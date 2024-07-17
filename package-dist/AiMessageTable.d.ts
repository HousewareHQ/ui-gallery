
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
export default function AiMessageTable({ title, summary, segmentSize, description, sequelQuery, rowData, columnDefs, }: AiMessageTableProps): import("react/jsx-runtime").JSX.Element;
