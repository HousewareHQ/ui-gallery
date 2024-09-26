import { AnyObject } from 'antd/es/_util/type';
import { TableProps } from 'antd/es/table';

export type CustomTableProps = {
    dataSource: readonly AnyObject[];
    columns: TableProps<any>["columns"];
    onRowClick?: (record: AnyObject, index: number | undefined) => void;
    rowKey?: string;
    size?: "small" | "middle" | "large";
} & TableProps<any>;
export declare const CustomTable: React.FC<CustomTableProps>;
