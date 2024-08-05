"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormWrapper from "@/app/_comps/shared/form-wrapper/form-wrapper";
import FormInput from "@/app/_comps/shared/form-input/form-input.comp";
import AppButton from "@/app/_comps/shared/app-button/app-button.comp";
import {
  signupSchema,
  TSignupSchema,
} from "@/app/_common/utils/validation-schemas/register-form.valid.util";

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TSignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  const handleRegister = (data: TSignupSchema) => {
    console.log(data);
    reset();
  };

  return (
    <main className="page">
      <div className="min-h-screen flex flex-center bg-white">
        <FormWrapper title="signup">
          <form
            onSubmit={handleSubmit(handleRegister)}
            aria-label="SignupForm"
            noValidate
          >
            <div className="mb-4 flex gap-4">
              <div className="w-1/2	">
                <FormInput
                  register={register}
                  formState={{ errors, isSubmitting }}
                  reset={reset}
                  setError={setError}
                  type="text"
                  id="firstName"
                  required
                  label="First Name"
                />
              </div>
              <div className="w-1/2	">
                <FormInput
                  register={register}
                  formState={{ errors, isSubmitting }}
                  reset={reset}
                  setError={setError}
                  type="text"
                  id="lastName"
                  required
                  label="Last Name"
                />
              </div>
            </div>

            <div className="mb-4">
              <FormInput
                register={register}
                formState={{ errors, isSubmitting }}
                reset={reset}
                setError={setError}
                type="email"
                id="signupEmail"
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
                id="signupPassword"
                required
                label="Password"
              />
            </div>
            <div className="mb-4">
              <FormInput
                register={register}
                formState={{ errors, isSubmitting }}
                reset={reset}
                setError={setError}
                type="password"
                id="signupConfirmPassword"
                required
                label="Confirm Password"
              />
            </div>
            {/* another action wrappre */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-center w-full mb-6 text-gray-700 leading-none">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Have an account already?
                <Link href={`/login`} className="font-bold px-1 underline">
                  login
                </Link>
                now!
              </p>
            </div>

            <div className="flex items-center justify-between">
              <AppButton title="Sign up" classes="text-sm w-full h-10" />
            </div>
          </form>
        </FormWrapper>
      </div>
    </main>
  );
};

export default SignupPage;
