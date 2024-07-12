
export interface AiMessageTableProps {
    title: string;
    summary: string;
    rowData: Record<string, any>[];
    columnDefs: {
        field: string;
    }[];
}
export default function AiMessageTable({ title, summary, rowData, columnDefs, }: AiMessageTableProps): import("react/jsx-runtime").JSX.Element;
