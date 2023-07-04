import { NextPage } from "next";
import Mobile from "./Mobile";

type props = {
  children: React.ReactNode;
};

const Layout: NextPage<props> = ({ children }) => {
  return (
    <>
      <div className="w-full h-screen bg-orange-300 flex justify-center items-center">
        <Mobile>{children}</Mobile>
      </div>
    </>
  );
};

export default Layout;
