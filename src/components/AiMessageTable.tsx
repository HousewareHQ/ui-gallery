import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { Card, Flex, Tooltip, Typography } from 'antd';
import { CSVLink } from 'react-csv';
import { Download } from '@phosphor-icons/react';
import Markdown from 'react-markdown';

export interface AiMessageTableProps {
  title: string;
  summary: string;
  rowData: Record<string, any>[];
  columnDefs: {
    field: string;
  }[];
}

export default function AiMessageTable({
  title,
  summary,
  rowData,
  columnDefs,
}: AiMessageTableProps) {
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
            <Typography>{title}</Typography>
            <CSVLink data={rowData}>
              <Tooltip title="download as CSV">
                <Download size={20} />
              </Tooltip>
            </CSVLink>
          </Flex>
        }
      >
        <div
          style={{
            width: '100%',
            height: 300,
          }}
        >
          <AgGridReact rowData={rowData} columnDefs={columnDefs} />
        </div>
      </Card>
      <Typography>
        <Markdown>{summary}</Markdown>
      </Typography>
    </Flex>
  );
}
