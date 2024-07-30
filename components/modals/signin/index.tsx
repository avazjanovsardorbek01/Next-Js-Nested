"use client";
import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Modal } from "antd";
import { login } from "@/service/auth.service";
import { toast } from "react-toastify";
import { SignIn } from "@/types/auth-types";

type FieldType = {
  email?: string;
  password?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const SignInModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const onFinish: FormProps<SignIn>["onFinish"] = async (values) => {
    console.log("Success:", values);

    try {
      const status = await login(values);
      console.log("Login status:", status);
      if (status === 200) {
        setOpen(false);
        toast.success("Logied successfuly");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-[#FBD029] w-full"
      >
        Войти
      </button>
      <Modal
        centered
        open={open}
        onCancel={() => setOpen(false)}
        width={600}
        footer={null}
        className="p-20"
      >
        <b className="text-center text-2xl block">Вход в аккаунт</b>
        <br />
        <div className="">
          <span>Если Вы не зарегистрированы, нажмите кнопку</span>{" "}
          <button className="text-[#FBD029]">Зарегистрироваться</button>
        </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ width: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="mt-5"
        >
          <Form.Item<FieldType>
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Email" type="email" />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <h1 className="text-[#917BFF] mb-3">Забыли пароль!</h1>
          <Form.Item>
            <button
              type="submit"
              className="w-full bg-[#FBD029] rounded-lg py-2"
            >
              Войти
            </button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default SignInModal;
