import { NextPage } from "next";

type props = {
  children: React.ReactNode;
};

const Mobile: NextPage<props> = ({ children }) => {
  return (
    <>
      {/* タブレット許容 */}
      <div className="w-full h-full max-w-[820px] bg-teal-300">{children}</div>

      {/* モバイルのみ */}
      {/* <div className="w-full h-full max-w-[414px] bg-teal-300">{children}</div> */}
    </>
  );
};

export default Mobile;
