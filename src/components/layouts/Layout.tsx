import { NextPage } from "next";
import Header from "./Header";
import BottomMenu from "./BottomMenu";

type props = {
  children: React.ReactNode;
};

const Layout: NextPage<props> = ({ children }) => {
  return (
    <>
      <div className="aaa w-screen h-screen flex flex-col justify-between items-center">
        <Header />
        {children}
        <BottomMenu />
      </div>
    </>
  );
};

export default Layout;
