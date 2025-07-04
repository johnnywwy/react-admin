import { Form, Input, Button } from "antd";
import styles from "./index.module.less";
import { ILoginParams } from "../../types/api";
import api from "../../api";
import storage from "../../utils/storage.ts";
const Login = () => {
  const onFinish = async (values: ILoginParams) => {
    const data = (await api.login(values)) as string;
    storage.set("token", data);
    window.location.href = "/";
    console.log("Success:", data);
  };
  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.title}>系统登陆</div>
        <Form
          className={styles.formWrapper}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          labelCol={{ span: 3 }}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "请输入用户名!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" block htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
