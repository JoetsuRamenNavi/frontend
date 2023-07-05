import Layout from "@/components/layouts/Layout";
import { users } from "@/components/utils/usersData";
import {
  ListItem,
  ListItemText,
} from "@mui/material";

import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

const Mypage: NextPage = () => {
  const [id] = useState(0);
  const [name] = useState(0);

  //カード下のリストの制御
  const listItem = (text: string, link: string) => {
    return (
      <Link href={link}>
        <ListItem sx={{ borderBottom: "1px solid #333", paddingY: "16px"}}>
            <ListItemText>{text}</ListItemText>
        </ListItem>
      </Link>
    );
  };


  return (
    <>

    {/* 表示してる場所 */}
      <Layout>
        <div className=" mx-[15px]">
          <p className="text-left text-lg my-[30px] font-bold">マイページ</p>

        <div className="bg-[#000] h-[200px] flex items-end rounded-xl">
          {/* 要調整 */}
          <div className=" m-[20px] w-[60%] text-white">
          <img src="/Members.png" alt="会員証" width={224} />
          <div className="flex">
          <div className="text-lg font-bold">{users[name].name}i</div>
          <img src="/ramen.png" alt="ラーメンアイコン" width={100} />
          </div>
          </div>
        </div>

        <div>
          <ul className="my-14  border-t-[1px] border-black">
          {listItem("会員情報", "/")}
          {listItem("ラーメンバトル投票フォーム", "/")}
          {listItem("よくある質問", "/")}
          </ul>
        </div>

        <Link href="/">
        <p className="text-[#808080] underline border-black">ログアウト</p>
        </Link>

        </div>
      </Layout>
      
      <div>myPage</div>
    </>
  );
};

export default Mypage;
function setId(arg0: number) {
  throw new Error("Function not implemented.");
}

