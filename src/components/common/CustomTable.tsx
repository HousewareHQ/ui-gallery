import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { PaginationProps, Table, Typography } from "antd";
import { AnyObject } from "antd/es/_util/type";
import { TableProps } from "antd/es/table";

export type CustomTableProps = {
  dataSource: readonly AnyObject[];
  columns: TableProps<any>["columns"];
  onRowClick?: (record: AnyObject, index: number | undefined) => void;
  rowKey?: string;

  size?: "small" | "middle" | "large";
} & TableProps<any>;

export const CustomTable: React.FC<CustomTableProps> = ({
  dataSource,
  columns,
  onRowClick,
  rowKey,
  size = "large",
  ...rest
}: CustomTableProps) => {
  const modifiedColumns = columns?.map((column) => ({
    ...column,
    title:
      typeof column?.title === "string"
        ? (column?.title as string)?.toUpperCase()
        : column?.title,
  }));

  const paginationItemRender: PaginationProps["itemRender"] = (_, type) => {
    if (type === "prev") {
      return (
        <Typography.Link>
          <LeftOutlined style={{ fontSize: "0.6rem" }} /> Previous
        </Typography.Link>
      );
    }
    if (type === "next") {
      return (
        <Typography.Link>
          Next <RightOutlined style={{ fontSize: "0.6rem" }} />
        </Typography.Link>
      );
    }
  };

  return (
    <Table
      dataSource={dataSource}
      columns={modifiedColumns}
      bordered={false}
      size={size}
      rowKey={rowKey}
      rowClassName={() => {
        return "custom-table-row";
      }}
      onRow={(record, rowIndex) => {
        return {
          onClick: () => {
            if (onRowClick) onRowClick(record, rowIndex);
          }, // click row
        };
      }}
      pagination={{
        showSizeChanger: false,
        showTotal: (total, range) => (
          <Typography.Text
            style={{
              width: "100%",
              textAlign: "left",
              color: "var(--tertiary-text)",
              flex: 1,
            }}
          >
            {`${range[0]}-${range[1]} of ${total} items`}
          </Typography.Text>
        ),
        style: {
          width: "100%",
          display: "flex",
          justifyItems: "flex-end",
          gap: "1rem",
        },
        itemRender: paginationItemRender,
        hideOnSinglePage: true,
      }}
      {...rest}
    />
  );
};
