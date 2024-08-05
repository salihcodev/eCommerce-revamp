"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/app/_comps/shared/form-input/form-input.comp";
import FormWrapper from "@/app/_comps/shared/form-wrapper/form-wrapper";
import AppButton from "@/app/_comps/shared/app-button/app-button.comp";
import {
  changePasswordSchema,
  recoverSchema,
  TChangePasswordSchemaSchema,
  TRecoverSchema,
} from "@/app/_common/utils/validation-schemas/recover-form.valid.util";

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<TRecoverSchema>({
    resolver: zodResolver(recoverSchema),
  });

  // made another copy right here, to avoid creating another separate file component.
  const {
    register: _register,
    handleSubmit: _handleSubmit,
    formState: { errors: _errors },
    reset: _reset,
    setError: _setError,
  } = useForm<TChangePasswordSchemaSchema>({
    resolver: zodResolver(changePasswordSchema),
  });

  const handleRecover = (data: TRecoverSchema) => {
    console.log(data);
    reset();
  };

  const handleResetpasses = (data: TChangePasswordSchemaSchema) => {
    console.log(data);
    _reset();
  };

  return (
    <main className="page">
      <div className="min-h-screen flex flex-center bg-white">
        {false ? (
          <FormWrapper title="Recover">
            <form
              onSubmit={handleSubmit(handleRecover)}
              aria-label="Forgot Password"
              noValidate
            >
              <div className="mb-4">
                <FormInput
                  register={register}
                  formState={{ errors }}
                  reset={reset}
                  setError={setError}
                  type="email"
                  id="recoverEmail"
                  required
                  label="Email"
                />
              </div>

              <div className="flex items-center justify-between">
                <AppButton title="Submit" classes="text-sm w-full h-10 mt-4" />
              </div>
            </form>
          </FormWrapper>
        ) : (
          <FormWrapper title="Change your password">
            <form
              onSubmit={_handleSubmit(handleResetpasses)}
              aria-label="Forgot Password"
              noValidate
            >
              <div className="mb-4">
                <FormInput
                  register={_register}
                  formState={{ errors: _errors }}
                  reset={_reset}
                  setError={_setError}
                  type="password"
                  id="recoverPassword"
                  required
                  label="Password"
                />
              </div>
              <div className="mb-4">
                <FormInput
                  register={_register}
                  formState={{ errors: _errors }}
                  reset={_reset}
                  setError={_setError}
                  type="password"
                  id="recoverConfirmPassword"
                  required
                  label="Confirm Password"
                />
              </div>

              <div className="flex items-center justify-between">
                <AppButton title="Submit" classes="text-sm w-full h-10 mt-4" />
              </div>
            </form>
          </FormWrapper>
        )}
      </div>
    </main>
  );
};

export default ForgotPasswordPage;
