import Layout from "@/components/layouts/Layout";
import { users } from "@/components/utils/usersData";
import { mypages } from "@/components/utils/mypagelistData";
import { ListItem, ListItemText } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonLayout from "@/components/layouts/Button";
import router from "next/router";

const Name: NextPage = () => {
    type Inputs = {
        name:string,
      }
    const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm<Inputs>();
    const onSubmit = (data: any) => {
        console.log(data);
        router.push(`/ChangedMembers`);
    };
    console.log(errors);

    return (
        <Layout>
        <div className="w-full min-h-[calc(100vh_-_240px)] px-[16px]">
            <p className="text-left text-lg py-[30px] font-bold">ニックネーム</p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="h-[calc(100vh_-_360px)] flex flex-col justify-between"
            >
          {/* <label >名前</label> */}
            <div>
                <input
                className="bg-[#f4f4f4] w-full p-[10px] text-[15px] rounded"
                type="text"
                defaultValue={users[0].name}
                // value={users[0].name}
                {...register('name', { 
                    required: '名前を入力してね',
                    minLength: { value: 2, message: `2文字以上にしてね`  },
                })}
                />
                <p>{errors.name?.message}</p> {/* エラー表示 */}
            </div>

            <ButtonLayout text="変更する" />
            </form>
        </div>
        </Layout>
    );
};

export default Name;
