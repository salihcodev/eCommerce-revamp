import React, { FC, ReactNode } from "react";

const FormWrapper: FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <section className="p-8 w-full max-w-lg">
      <h2 className="text-2xl mb-6 text-left text-gray-700 capitalize">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default FormWrapper;
