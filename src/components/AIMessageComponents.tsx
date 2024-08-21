import { Flex, Image, Typography } from 'antd';

import { ReactNode } from 'react';
import Markdown from 'react-markdown';
import '../customStyles.css';
import { Funnels } from './charts/Funnels';
import { Trends } from './charts/Trends';
import {
  BaseMessage,
  CustomMessageComponentProp,
} from './chatScreen/ChatScreenPA';
import MessageActionCard from './MessageActionCard';


export type AIMessageComponentsProps<T extends BaseMessage> = {
  index: number;
  messages: T[];
  showMessageActionCard?: boolean;
  hideActionCardItems?: ('copy' | 'regenerate')[];
  handleRegenerateResponse: (
    userQuery: string,
    regenerateResponse?: boolean,
  ) => void;
  customMessageComponent?: CustomMessageComponentProp<T>;
  customMessageActionCardItem?: ReactNode[];
};

export function AIMessageComponents<T extends BaseMessage>({
  index,
  messages,
  showMessageActionCard,
  hideActionCardItems = [],
  handleRegenerateResponse,
  customMessageComponent,
  customMessageActionCardItem,
}: AIMessageComponentsProps<T>) {
  const logoLink =
    window?.location?.hostname === 'localhost' ? '' : `${window.location}`;
  const content = messages[index]?.content;
  const isLastMessage = messages?.length - 1 === index;
  const shouldShowActionCardItems = isLastMessage && showMessageActionCard;
  const customComponent = customMessageComponent?.component;

  const aiChatMessage = () => {
    const responseType = content.type || content?.query_response?.type;
    const data = content?.data || content?.query_response?.data;
    const queryConfiguration = content?.query_configuration;

    switch (responseType) {
      case 'text':
        return (
          <Typography>
            <Markdown>{data}</Markdown>
          </Typography>
        );
      case 'trend':
        return (
          <Trends
            chartResponse={content.query_response}
            queryConfiguration={queryConfiguration}
          />
        );
      case 'funnel':
        return (
          <Funnels
            chartResponse={content.query_response}
            queryConfiguration={queryConfiguration}
          />
        );
      default:
        return (
          <Typography>
            I am not sure how to respond to that, can you please try again?
          </Typography>
        );
    }
  };

  return (
    <Flex
      style={{ width: '90%' }}
      align="flex-start"
      gap={8}
      className="ai-message-wrapper"
    >
      <Image
        src={`${logoLink}/ai-icon.svg`}
        height={40}
        width={40}
        style={{
          height: '2rem',
          width: '2rem',
        }}
        preview={false}
      />

      <Flex
        vertical
        style={{
          width: '100%',
        }}
        gap={14}
      >
        {(customComponent &&
          customComponent({
            messages,
            index,
            handleSendFollowupMessage: handleRegenerateResponse,
          })) ||
          aiChatMessage()}

        {shouldShowActionCardItems && (
          <MessageActionCard<T>
            key={index}
            index={index}
            messages={messages}
            hideActionCardItems={hideActionCardItems}
            handleRegenerateResponse={handleRegenerateResponse}
            customMessageActionCardItem={customMessageActionCardItem}
          />
        )}
      </Flex>
    </Flex>
  );
}
