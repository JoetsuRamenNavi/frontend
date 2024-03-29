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

        <Link href={"/Mypage"}>
          {/* <div
          className={`${theme.accent.bg} ${theme.base.text} px-[12px] py-[4px] text-[16px]`}
        >
          ログイン
        </div> */}
          <div
            className={`pl-[7px] pr-[8px] pt-[7px] pb-[8px] ${theme.accent.bg} rounded-full flex justify-center items-center`}
          >
            <img src="login.png/" alt="" width={24} height={24} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
