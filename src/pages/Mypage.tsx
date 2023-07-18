/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layouts/Layout";
import { users } from "@/components/utils/usersData";
import { mypages } from "@/components/utils/mypagelistData";
import { ListItem, ListItemText } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

const Mypage: NextPage = () => {
  const [name] = useState(0);

  return (
    <>
      <Layout>
        <div className=" mx-[15px]">
          <p className="text-left text-lg my-[30px] font-bold">マイページ</p>

          <div className="bg-[#000] h-[200px] flex items-end rounded-xl p-[20px]">
            <div className=" text-white w-full h-full">
              <img src="/MembersLogo.png" alt="会員証" width={224} />
              <div className="flex justify-between pt-[30px] ">
                <div className="text-[18px] font-bold self-end">
                  {users[name].name}
                </div>
                <img src="/ramen.png" alt="ラーメンアイコン" width={100} />
              </div>
            </div>
          </div>

          <div>
            <ul className="my-14  border-t-[1px] border-black">
              {/* utilsにmypage配列作ったのでそれを回してる */}
              {mypages.map((list, index) => (
                <div key={index} className="flex ">
                  <div key={index} className="w-full ">
                    <Link href={list.link}>
                      <ListItem sx={{ borderBottom: "1px solid #333" }}>
                        <img src={list.image} className="mr-[15px] " />
                        <ListItemText sx={{ marginY: "15px" }}>
                          {list.text}
                        </ListItemText>
                      </ListItem>
                    </Link>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Mypage;
function setId(arg0: number) {
  throw new Error("Function not implemented.");
}
