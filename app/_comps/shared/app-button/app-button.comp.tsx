import React, { FC } from "react";

interface IAppButton {
  title?: string;
  classes: string;
}

const AppButton: FC<IAppButton> = ({ title, classes }) => {
  return (
    <button
      type="submit"
      className={`bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50 uppercase ${classes}`}
      aria-label={title}
    >
      {title}
    </button>
  );
};

export default AppButton;
