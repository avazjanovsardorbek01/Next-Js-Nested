"use client";
import React from "react";
import type { FormProps } from "antd";
import { Button, Card, Form, Input, Radio } from "antd";
import { login, register } from "@/service/auth.service";
import { toast } from "react-toastify";
import { SignUp } from "@/types/auth-types";
import Link from "next/link";
import { useRouter } from "next/navigation";

type FieldType = {
  first_name: string;
  last_name: string;
  gender: string;
  email?: string;
  password?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const SignInModal: React.FC = () => {
  const router = useRouter();

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
        if (st === 200) router.push("/");
        toast.success("Registered successfully");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center bg-[#F2F2F2] py-10">
      <Card className="flex items-center justify-center">
        <b className="text-2xl text-center block my-5">Зарегистрироваться</b>
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

          <div className="flex justify-between items-center w-[390px] mb-3">
            <span>У вас уже есть аккаунт?</span>
            <Link href="signin" className="text-blue-600">
              Войти
            </Link>
          </div>

          <Form.Item>
            <Button htmlType="submit" className="w-full bg-[#fbd02a]">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SignInModal;
