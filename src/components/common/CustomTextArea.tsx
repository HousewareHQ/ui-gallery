import { Flex, Typography } from "antd";
import { InputRef, TextAreaProps } from "antd/es/input";
import TextArea from "antd/es/input/TextArea";
import { LegacyRef } from "react";

export type CustomTextAreaProps = {
  inputPlaceholder: string;
  userQuery: string;
  setUserQuery: (userQuery: string) => void;
  label?: string;
  handlePressEnter: () => void;
  inputRef?: LegacyRef<InputRef> | null;
} & TextAreaProps;

export const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  inputPlaceholder,
  userQuery,
  setUserQuery,
  handlePressEnter,
  label,
  inputRef,
  ...rest
}: CustomTextAreaProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.stopPropagation();
      e.preventDefault();

      handlePressEnter();
    }
  };

  return (
    <Flex
      vertical
      gap={4}
      style={{
        width: "100%",
      }}
    >
      {label && (
        <Typography.Text
          type="secondary"
          style={{
            fontSize: "0.8rem",
          }}
        >
          {label}
        </Typography.Text>
      )}
      <TextArea
        style={{ width: "100%" }}
        ref={inputRef}
        onChange={(e) => setUserQuery(e.target.value)}
        value={userQuery}
        autoSize={{ minRows: 1, maxRows: 8 }}
        size="large"
        variant="outlined"
        placeholder={inputPlaceholder}
        onKeyDown={handleKeyDown}
        {...rest}
      />
      <Flex align="flex-end" justify="flex-end">
        <Typography.Text
          type="secondary"
          style={{
            fontWeight: 500,
            fontSize: "0.6rem",

            visibility: userQuery.trim().length > 0 ? "visible" : "hidden",
          }}
        >
          Use{" "}
          <Typography.Text
            type="secondary"
            style={{
              backgroundColor: "var(--background)",
              fontWeight: 500,
              fontSize: "0.6rem",
              padding: "3px 6px",
              borderRadius: 4,
            }}
          >
            shift + enter
          </Typography.Text>{" "}
          for new line
        </Typography.Text>
      </Flex>
    </Flex>
  );
};
