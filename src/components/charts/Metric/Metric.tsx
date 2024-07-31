import { ArrowDown, ArrowUp } from "@phosphor-icons/react";
import { Card, Flex, Typography } from "antd";


export type MetricProps = {
    title: string;
    value: number;
    valuePrefix?: string;
    change: number;
    changeType?: "up" | "down";
}

export default function Metric({ title, value, change, valuePrefix, changeType }: MetricProps) {
    return (
        <Card>
            <Flex gap={4} justify="center" align="center" vertical>
                <Typography.Text type="secondary">{title}</Typography.Text>
                <Typography.Text>
                    {valuePrefix && `${valuePrefix} `}
                    {value}
                </Typography.Text>
                <Flex align="center">
                    <Typography.Text type="success">
                        {change}
                    </Typography.Text>
                    {changeType === "up" ? <ArrowUp /> : <ArrowDown />}
                </Flex>
            </Flex>
        </Card>
    )
}