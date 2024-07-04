import { Flex, Image, Skeleton } from "antd";

export default function AILoader() {
  return (
    <Flex style={{ width: "90%" }} align="flex-start" gap={8}>
      <Image
        className="ai-icon-rotate"
        src="/ai-icon.svg"
        height={40}
        width={40}
        style={{
          height: "2rem",
          width: "2rem",
        }}
      />
      <Skeleton active></Skeleton>
    </Flex>
  );
}
