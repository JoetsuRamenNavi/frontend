import { NextPage } from "next";
import Header from "./Header";
import BottomMenu from "./BottomMenu";

type props = {
  children: React.ReactNode;
};

const Layout: NextPage<props> = ({ children }) => {
  return (
    <>
      <div className="aaa w-full flex flex-col items-center pt-[65px] pb-[65px]">
        <Header />
        {children}
        <BottomMenu />
      </div>
    </>
  );
};

export default Layout;
