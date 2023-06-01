import { NextPage } from "next";
import Link from "next/link";

const Header: NextPage = () => {
  return (
    <div className="h-[65px] w-full pl-[10px] bg-white flex items-center">
      <Link href="/">
        <p className="text-[24px] font-semibold">上越ラーメンアプリ</p>
      </Link>
    </div>
  );
};

export default Header;
