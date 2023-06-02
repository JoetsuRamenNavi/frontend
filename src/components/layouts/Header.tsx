import { NextPage } from "next";
import Link from "next/link";

const Header: NextPage = () => {
  return (
    <div className="h-[65px] w-full fixed top-0 left-0 pl-[10px] bg-white flex items-center baseShadow z-10">
      <Link href="/">
        <p className="text-[24px] font-semibold">上越ラーメンアプリ</p>
      </Link>
    </div>
  );
};

export default Header;
