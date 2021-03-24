import React from "react";
import { Checkbox, Layout, Button } from "antd";

const MessageCom = () => {
  const { Sider, Content } = Layout;
  return (
    <>
      <div>消息中心</div>
      <Layout>
        <Sider width={400} theme="light">
          <div>
            <Checkbox></Checkbox> <Button>删除</Button>
            <Button>标记已读</Button> <Button>全部已读</Button>
            <Button>全部删除</Button>
          </div>


          <div>
            
          </div>
        </Sider>
        <Content></Content>
      </Layout>
    </>
  );
};

export default MessageCom;
