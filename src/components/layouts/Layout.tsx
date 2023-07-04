import { NextPage } from "next";
import Mobile from "./Mobile";
import { theme } from "../themes/color";

type props = {
  children: React.ReactNode;
};

const Layout: NextPage<props> = ({ children }) => {
  return (
    <>
      <div
        className={`w-full h-screen ${theme.accent.bg} flex justify-center items-center`}
      >
        <Mobile>{children}</Mobile>
      </div>
    </>
  );
};

export default Layout;
