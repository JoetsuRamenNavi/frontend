/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Link from "next/link";
import { theme } from "../themes/color";

const Header: NextPage = () => {
  return (
    <>
      <div
        className={`h-[65px] w-full ${theme.main.bg} flex justify-between items-center px-[16px]`}
      >
        <Link href={"/"}>
          <h1>
            <img src="/logo.png" alt="ロゴ" width={224} />
          </h1>
        </Link>
        <div
          className={`${theme.accent.bg} ${theme.base.text} px-[12px] py-[4px] text-[16px]`}
        >
          ログイン
        </div>
      </div>
    </>
  );
};

export default Header;
