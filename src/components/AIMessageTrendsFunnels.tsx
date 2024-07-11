import { Flex, Image, Typography } from 'antd';

import { useState } from 'react';
import Markdown from 'react-markdown';
import '../customStyles.css';
import { Funnels } from './charts/Funnels';
import { Trends } from './charts/Trends';
import { BaseMessage } from './ChatScreenPA';
import MessageActionCard from './MessageActionCard';

export function AIMessageTrendsFunnels<T extends BaseMessage>({
  index,
  messages,
  showMessageActionCard,
  hideActionCardItems = [],
  handleRegenerateResponse,
}: {
  index: number;
  messages: T[];
  hideActionCardItems?: ('copy' | 'regenerate')[];
  showMessageActionCard?: boolean;
  handleRegenerateResponse: (
    userQuery: string,
    regenerateResponse?: boolean,
  ) => void;
}) {
  const content = messages[index]?.content;
  const isLastMessage = messages?.length - 1 === index;
  const shouldShowActionCardItems = isLastMessage && showMessageActionCard;

  const aiChatMessage = () => {
    const responseType = content?.query_response?.type;
    const data = content?.query_response?.data;
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
        src="/ai-icon.svg"
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
        {aiChatMessage()}

        {shouldShowActionCardItems && (
          <MessageActionCard<T>
            key={index}
            index={index}
            messages={messages}
            hideActionCardItems={hideActionCardItems}
            handleRegenerateResponse={handleRegenerateResponse}
          />
        )}
      </Flex>
    </Flex>
  );
}
