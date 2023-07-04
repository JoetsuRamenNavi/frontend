/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Link from "next/link";
import { theme } from "../themes/color";

const Header: NextPage = () => {
  return (
    <>
      <div
        className={`h-[65px] w-full ${theme.main.bg} flex justify-between items-center`}
      >
        <Link href={"/"}>
          <img src="/logo.png" alt="ロゴ" width={390} />
        </Link>
        <div className={`${theme.accent.bg} ${theme.base.text} px-[4px]`}>
          ログイン
        </div>
      </div>
    </>
  );
};

export default Header;
