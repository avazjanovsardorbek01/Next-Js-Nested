"use client";
import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Modal, Radio } from "antd";
import { login, register } from "@/service/auth.service";
import { toast } from "react-toastify";
import { SignUp } from "@/types/auth-types";
import SignInModal from "../signin";

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
type FieldType = {
  first_name: string;
  last_name: string;
  gender: string;
  email?: string;
  password?: string;
};

const SignUpModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const onFinish: FormProps<SignUp>["onFinish"] = async (values) => {
    console.log("Success:", values);

    try {
      const status = await register(values);
      console.log("Register status:", status);
      if (status === 201) {
        const st = await login({
          email: values.email,
          password: values.password,
        });
        if (st === 200) {
          setOpen(false);
          toast.success("Logied successfuly");
        }
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-[#FBD029]"
      >
        Зарегистрироваться
      </button>
      <Modal
        centered
        open={open}
        onCancel={() => setOpen(false)}
        width={600}
        footer={null}
        className="p-20"
      >
        <b className="text-center text-2xl block">Регистрация</b>
        <div className="my-4">
          <span>Если Вы Регистрированы, нажмите кнопку</span>{" "}
          <button className="text-[#FBD029]">“Войте”</button>!
        </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="first_name"
            rules={[
              { required: true, message: "Please input your First Name!" },
              { min: 4, message: "First Name must be at least 5 characters!" },
              { max: 20, message: "First Name must be at most 20 characters!" },
            ]}
          >
            <Input placeholder="First Name" />
          </Form.Item>

          <Form.Item<FieldType>
            name="last_name"
            rules={[
              { required: true, message: "Please input your Last Name!" },
              { min: 4, message: "Last Name must be at least 4  characters!" },
              { max: 20, message: "Last Name must be at most 20 characters!" },
            ]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>

          <Form.Item<FieldType>
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="Email" type="email" />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              {
                pattern:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/,
                message: (
                  <span>
                    Password must be at least 8 characters long and include
                    <br />
                    at least one uppercase letter, one lowercase letter, one
                    <br />
                    number, and one special character!
                  </span>
                ),
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item<FieldType>
            name="gender"
            rules={[{ required: true, message: "Please select your gender!" }]}
          >
            <Radio.Group>
              <Radio value="female">Female</Radio>
              <Radio value="male">Male</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <button
              type="submit"
              className="w-full bg-[#FBD029] rounded-lg py-2"
            >
              Регистрация
            </button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default SignUpModal;
