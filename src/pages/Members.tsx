import Layout from "@/components/layouts/Layout";
import { users } from "@/components/utils/usersData";
// import { members } from "@/components/utils/mypagelistData";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";


const Members : NextPage = () => {

    const [name] = useState(0);

    return(
        <>
        <Layout>
            <div className=" mx-[15px] min-h-[calc(100vh_-_240px)] ">

            <p className="text-left text-lg py-[30px] font-bold">会員情報</p>

            <div>
            
            <ul className="my-14  border-t-[1px] border-[#808080]">
              {/* utilsにmypage配列作ったのでそれを回してる */}
              {/* {members.map((mblist, index) => (
                <div className="flex ">
                  <div key={index} className="w-full ">
                    <Link href={mblist.link}>
                      <ListItem sx={{ borderBottom: "1px solid #333",fontSize:9, }}>
                        <ListItemText sx={{ marginY: "15px",}}  primaryTypographyProps={{fontSize:12}}>{mblist.text}{users[0].name}</ListItemText>
                      </ListItem>
                    </Link>
                  </div>
                </div>
              ))} */}

                <div className="flex ">
                    <div className="w-full ">
                        <ul>
                            <Link href={"/ChangeName"}>
                                <li className="border-b-[1px] border-[#808080] ">
                                    <div className="my-[20px] mx-[15px] flex place-content-between">
                                    <p className="text-[12px]">ニックネーム </p>
                                    <p className="text-[12px]">{users[0].name}</p>
                                    <p className="text-[12px]">＞</p>
                                    </div>
                                </li>
                            </Link>
                            <Link href={"/ChangeMail"}>
                                <li className="border-b-[1px] border-[#808080]">
                                    <div className="my-[20px] mx-[15px] flex place-content-between">
                                    <p className="text-[12px]">メールアドレス </p>
                                    <p className="text-[12px]">{users[0].mail}</p>
                                    <p className="text-[12px]">＞</p>
                                    </div>
                                </li>
                            </Link>
                            <Link href={"/ChangingPassword"}>
                                <li className="border-b-[1px] border-[#808080]">
                                    <div className="my-[20px] mx-[15px] flex place-content-between">
                                    <p className="text-[12px]">パスワード変更</p>
                                    <p className="text-[12px]">＞</p>
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </div>

                </div>

            </ul>
          </div>

            </div>
        </Layout>
        </>
    )
}

export default Members;