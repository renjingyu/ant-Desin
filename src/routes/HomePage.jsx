import React from 'react';
import { Link } from 'dva/router';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './HomePage.less';

const FormItem = Form.Item;

const NormalLoginForm = Form.create()(React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('接收到表单的值: ', values);
        window.location.href = "/users";
      }
    });
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form action="/users" onSubmit={this.handleSubmit} className="login-form">
        <div className={styles.maxwidth}>
	        <FormItem>
	          {getFieldDecorator('userName', {
	            rules: [{ required: true, message: '请输入用户名!' }],
	          })(
	            <Input addonBefore={<Icon type="user" />} placeholder="用户名" />
	          )}
	        </FormItem>
	        <FormItem>
	          {getFieldDecorator('password', {
	            rules: [{ required: true, message: '请输入密码!' }],
	          })(
	            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="密码" />
	          )}
	        </FormItem>
	        <FormItem>
	          {getFieldDecorator('remember', {
	            valuePropName: 'checked',
	            initialValue: true,
	          })(
	            <Checkbox>记住我</Checkbox>
	          )}
	          <a className={styles.pwdforget}>忘记密码</a>
		          <Button type="primary" htmlType="submit" className={styles.formbutton}>
		            登录
		          </Button>
	          或 <a>立即注册</a>
	        </FormItem>
	     </div>
      </Form>
    );
  },
}));

NormalLoginForm.propTypes = {
};

export default NormalLoginForm;