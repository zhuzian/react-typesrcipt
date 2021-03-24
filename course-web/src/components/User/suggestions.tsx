import { Button, Form, Input } from "antd";
import React from "react";

const SuggestionCom = () => {
  const submitSuggestion = (values) => {

    
  };
  return (
    <>
      <div>建议</div>
      <Form onFinish={submitSuggestion}>
        <Form.Item>
          <Input.TextArea></Input.TextArea>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SuggestionCom;
