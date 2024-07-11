import '../customStyles.css';
import { ArrowClockwise, CheckCircle, Clipboard } from '@phosphor-icons/react';
import { Button, Card, Flex } from 'antd';
import { Fragment, ReactNode, useMemo, useState } from 'react';
import { BaseMessage } from './ChatScreenPA';

export default function MessageActionCard<T extends BaseMessage>({
  index,
  messages,
  handleRegenerateResponse,
  hideActionCardItems = [],
  customMessageActionCardItem = [],
}: {
  index: number;
  messages: T[];
  handleRegenerateResponse: (
    userQuery: string,
    regenerateResponse?: boolean,
  ) => void;
  hideActionCardItems?: ('copy' | 'regenerate')[];
  customMessageActionCardItem?: ReactNode[];
}) {
  const content = messages[index]?.content;
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = () => {
    const toBeSavedContent = (() => {
      const responseType = content?.query_response?.type;
      const data = content?.query_response?.data;

      switch (responseType) {
        case 'text':
          return data;
        case 'trend':
        case 'funnel':
          return content?.query_response?.summary || '';
        default:
          return 'I am not sure how to respond to that, can you please try again?';
      }
    })();

    navigator.clipboard.writeText(toBeSavedContent);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const defaultActionCardItem = useMemo(
    () => ({
      copy: (
        <Button
          size="small"
          onClick={handleCopyToClipboard}
          type="text"
          icon={
            isCopied ? (
              <CheckCircle size={'0.7rem'} />
            ) : (
              <Clipboard size={'0.7rem'} />
            )
          }
          style={{
            fontSize: '0.7rem',
            color: 'var(--secondary-text)',
          }}
        >
          Copy
        </Button>
      ),
      regenerate: (
        <Button
          size="small"
          onClick={() => {
            handleRegenerateResponse(
              messages[messages.length - 2]?.content || '',
              true,
            );
          }}
          type="text"
          icon={<ArrowClockwise size={'0.7rem'} />}
          style={{
            fontSize: '0.7rem',
            color: 'var(--secondary-text)',
          }}
        >
          Regenerate
        </Button>
      ),
    }),
    [isCopied, handleRegenerateResponse, messages],
  );

  return (
    <Card
      className="ai-message-actions"
      size="small"
      style={{
        width: 'max-content',
        backgroundColor: 'var(--background)',
        alignSelf: 'flex-end',
      }}
      styles={{
        body: {
          padding: 3,
        },
      }}
    >
      <Flex>
        {Object.keys(defaultActionCardItem).map(
          (item) =>
            !hideActionCardItems.includes(item as 'copy' | 'regenerate') && (
              <Fragment key={item}>
                {defaultActionCardItem[item as 'copy' | 'regenerate']}
              </Fragment>
            ),
        )}
        {customMessageActionCardItem}
      </Flex>
    </Card>
  );
}
