import { NextPage } from "next";
import Header from "./Header";
import Footer from "./Footer";
import { theme } from "../themes/color";

type props = {
  children: React.ReactNode;
};

const Mobile: NextPage<props> = ({ children }) => {
  return (
    <>
      {/* タブレット許容 */}
      <div className={`w-full h-full max-w-[820px] ${theme.base.bg}`}>
        <Header />
        {children}
        <Footer />
      </div>

      {/* モバイルのみ */}
      {/* <div className={`w-full h-full max-w-[414px] ${theme.base.bg}`}>{children}</div> */}
    </>
  );
};

export default Mobile;
