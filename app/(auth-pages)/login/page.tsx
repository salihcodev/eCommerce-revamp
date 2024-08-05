"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/app/_comps/shared/form-input/form-input.comp";
import FormWrapper from "@/app/_comps/shared/form-wrapper/form-wrapper";
import Link from "next/link";
import AppButton from "@/app/_comps/shared/app-button/app-button.comp";
import {
  loginSchema,
  TLoginSchema,
} from "@/app/_common/utils/validation-schemas/login-form.valid.util";

const LoginPage = () => {
  const [showRecover, setShowRecover] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = (data: TLoginSchema) => {
    console.log(data);

    // setShowRecover(true);
    reset();
  };

  return (
    <main className="page">
      <div className="min-h-screen flex flex-center bg-white">
        <FormWrapper title="Login">
          <form
            onSubmit={handleSubmit(handleLogin)}
            aria-label="Login Form"
            noValidate
          >
            <div className="mb-4">
              <FormInput
                register={register}
                formState={{ errors, isSubmitting }}
                reset={reset}
                setError={setError}
                type="email"
                id="loginEmail"
                required
                label="Email"
              />
            </div>
            <div className="mb-4">
              <FormInput
                register={register}
                formState={{ errors, isSubmitting }}
                reset={reset}
                setError={setError}
                type="password"
                id="loginPassword"
                required
                label="Password"
              />
            </div>
            {/* another action wrappre */}
            <div>
              <p className="text-sm text-center w-full my-2 text-gray-700">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Dont't have one.. You can get it for free
                <Link href={`/register`} className="font-bold px-1 underline">
                  Register
                </Link>
                now!
              </p>

              {showRecover ? (
                <p className="text-sm text-center w-full my-2 text-gray-700">
                  Forgot your password? no worries
                  <Link href={`/register`} className="font-bold px-1 underline">
                    Recover
                  </Link>
                  here
                </p>
              ) : null}
            </div>

            <div className="flex items-center justify-between mt-6">
              <AppButton title="Sign in" classes="text-sm w-full h-10" />
            </div>
          </form>
        </FormWrapper>
      </div>
    </main>
  );
};

export default LoginPage;
