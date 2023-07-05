/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Link from "next/link";
import { theme } from "../themes/color";

const Footer: NextPage = () => {
  return (
    <>
      <div
        className={`h-[175px] w-full ${theme.main.bg}  px-[16px] py-[20px] sticky top-[100vh]`}
      >
        <div className="pt-[60px] pb-[30px]">
          <Link href={"/"}>
            <img src="/logo.png" alt="ロゴ" width={224} />
          </Link>
        </div>
        <p className=" text-white font-bold text-[8px]">
          © JoetshRamenNavi All rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
