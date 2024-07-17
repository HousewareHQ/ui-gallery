import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import {
  Avatar,
  Button,
  Card,
  Flex,
  List,
  message,
  Modal,
  Popover,
  Tooltip,
  Typography,
} from 'antd';
import { CSVLink } from 'react-csv';
import { Code, Download, ShareFat } from '@phosphor-icons/react';
import Markdown from 'react-markdown';
import { useState } from 'react';

const { Paragraph, Text } = Typography;
export interface AiMessageTableProps {
  title: string;
  sequelQuery?: string;
  description?: string;
  segmentSize: number | null;
  summary: string;
  rowData: Record<string, any>[];
  columnDefs: {
    field: string;
  }[];
}

export default function AiMessageTable({
  title,
  summary,
  segmentSize,
  description,
  sequelQuery,
  rowData,
  columnDefs,
}: AiMessageTableProps) {
  const [ellipsis, setEllipsis] = useState(true);
  const [showSqlModal, setShowSqlModal] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const exportPopOverContent = (
    <List
      itemLayout="horizontal"
      dataSource={[
        {
          text: 'Braze',
          img: '',
        },
        {
          text: 'HubSpot',
          img: '',
        },
      ]}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
              />
            }
            title={<a href="https://ant.design">{item.text}</a>}
          />
        </List.Item>
      )}
    />
  );

  return (
    <Flex
      vertical
      gap={16}
      style={{
        width: '100%',
      }}
    >
      <Card
        size="small"
        bordered
        hoverable
        style={{
          backgroundColor: 'var(--foreground)',
          width: '100%',
        }}
        styles={{
          header: {
            backgroundColor: '#FFF',
          },
        }}
        title={
          <Flex justify="space-between" style={{ width: '100%' }}>
            <Typography style={{ width: '80%', overflow: 'hidden' }}>
              {title}
            </Typography>
            <Flex align="center" gap={6}>
              <Tooltip title="View sql query">
                <Button
                  disabled={!sequelQuery}
                  type="text"
                  size="small"
                  icon={<Code size={20} />}
                  onClick={() => setShowSqlModal(true)}
                />
              </Tooltip>
              <CSVLink data={rowData} style={{ color: '#3C3838' }}>
                <Tooltip title="Download as CSV">
                  <Button
                    type="text"
                    size="small"
                    icon={<Download size={20} />}
                  />
                </Tooltip>
              </CSVLink>
              <Popover
                title="Export segment to"
                placement="rightTop"
                content={exportPopOverContent}
                arrow={false}
              >
                <Button
                  type="text"
                  size="small"
                  icon={<ShareFat size={20} />}
                />
              </Popover>
            </Flex>
          </Flex>
        }
      >
        {contextHolder}
        <Modal
          title="Copy SQL Query to clip board"
          open={showSqlModal}
          onOk={() => {
            navigator.clipboard.writeText(sequelQuery ?? '');
            messageApi.success('SQL code copied to clipboard');
            setShowSqlModal(false);
          }}
          okText="Copy"
          onCancel={() => setShowSqlModal(false)}
        >
          <Card>
            <Markdown>{sequelQuery}</Markdown>
          </Card>
        </Modal>
        <Flex vertical gap={12}>
          <Flex vertical>
            <Paragraph
              ellipsis={
                ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false
              }
            >
              Description: {description}
            </Paragraph>
            <Text>Segment size: {segmentSize}</Text>
          </Flex>
          <div
            style={{
              width: '100%',
              height: 300,
            }}
          >
            <AgGridReact rowData={rowData} columnDefs={columnDefs} />
          </div>
          <Typography>{summary}</Typography>
        </Flex>
      </Card>
      <Typography>
        <Markdown>{summary}</Markdown>
      </Typography>
    </Flex>
  );
}
