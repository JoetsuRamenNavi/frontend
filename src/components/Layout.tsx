import { NextPage } from "next";
import Link from "next/link";

type props = {
  children: React.ReactNode;
};

const Layout: NextPage<props> = ({ children }) => {
  return (
    <>
      <div className="aaa w-screen h-screen flex flex-col justify-center items-center">
        {children}
      </div>
    </>
  );
};

export default Layout;
