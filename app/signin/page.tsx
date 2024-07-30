"use client";
import React from "react";
import type { FormProps } from "antd";
import { Button, Card, Form, Input } from "antd";
import { login } from "@/service/auth.service";
import { toast } from "react-toastify";
import { SignIn } from "@/types/auth-types";
import Link from "next/link";
import { useRouter } from "next/navigation";

type FieldType = {
  email?: string;
  password?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const SignInModal: React.FC = () => {
  const router = useRouter();

  const onFinish: FormProps<SignIn>["onFinish"] = async (values) => {
    try {
      const status = await login(values);
      console.log("Login status:", status);
      if (status === 200) {
        toast.success("Logged in successfully");
        router.push("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed");
    }
  };

  return (
    <div className="flex justify-center h-[80vh] bg-[#F2F2F2] py-8">
      <Card className="flex items-center justify-center text-center h-[300px]">
        <b className="text-2xl">Вход в аккаунт</b>

        <div className="">
          <span>Если Вы не зарегистрированы, нажмите кнопку</span>{" "}
          <Link href="signup" className="text-[#FBD029]">
            Зарегистрироваться
          </Link>
        </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="mt-8"
        >
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
                min: 8,
                message: "Password must be at least 8 characters long!",
              },
              {
                pattern:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
                message: (
                  <span>
                    Password must include at least one uppercase letter, one{" "}
                    <br />
                    lowercase letter, one number, and one special character!
                  </span>
                ),
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
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
