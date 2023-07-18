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

const AfPassword: NextPage = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
        router.push(`/ChangedMembers`);
    };
    console.log(errors);

    return (
        <Layout>
        <div className="w-full h-[70vh]  px-[16px]">
            <p className="text-left text-lg my-[30px] font-bold">パスワード変更</p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="h-[85%] flex flex-col justify-between"
            >
          {/* <label >名前</label> */}
            <div>
                <input
                className="bg-[#f4f4f4] w-full p-[10px] text-[15px] rounded"
                type="password" 
                placeholder="新しいパスワード" 
                {...register("Password", {required: true, max: 100, min: 8})} 
                />
                <input
                className="bg-[#f4f4f4] w-full p-[10px] text-[15px] rounded mt-[30px]"
                type="password" 
                placeholder="新しいパスワード（確認用）" 
                {...register("Password", {required: true, max: 100, min: 8})} 
                />
            </div>

            <ButtonLayout text="パスワードを変更する" />
            </form>
        </div>
        </Layout>
    );
};

export default AfPassword;
