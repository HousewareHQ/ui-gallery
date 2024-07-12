import { AnyObject } from 'antd/es/_util/type';
import { TableProps } from 'antd/es/table';

export default function CustomTable({ dataSource, columns, onRowClick, rowKey, size, ...rest }: {
    dataSource: readonly AnyObject[];
    columns: TableProps<any>["columns"];
    onRowClick?: (record: AnyObject, index: number | undefined) => void;
    rowKey?: string;
    size?: "small" | "middle" | "large";
} & TableProps<any>): import("react/jsx-runtime").JSX.Element;
