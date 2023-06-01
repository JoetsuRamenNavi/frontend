/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const BottomMenu: NextPage = () => {
  // アイコンのサイズ
  const iconSize = 28;

  const router = useRouter();

  // アイコンセット
  const setIcon = (src: string, link: string) => {
    return (
      <Link href={link}>
        <Image src={src} alt="" width={iconSize} height={iconSize} />
      </Link>
    );
  };

  // ページに合わせてアイコンカラー変更
  const setMenuButton = (path: string, iconName: string) => {
    return (
      <>
        {router.pathname != path
          ? setIcon(`/icon/bottomMenu/${iconName}.png`, path)
          : setIcon(`/icon/bottomMenu/${iconName}Selected.png`, path)}
      </>
    );
  };

  return (
    <div className="w-full h-[65px] fixed bottom-0 bg-white flex justify-around items-center">
      {/* 第一引数： (URL) , 第二引数： (アイコン名) */}
      {setMenuButton("/", "ramen")}

      {router.pathname != "/stores/[id]"
        ? setMenuButton("/Search", "search")
        : setIcon(`/icon/bottomMenu/searchSelected.png`, "search")}

      {setMenuButton("/Mypage", "user")}
    </div>
  );
};

export default BottomMenu;
