import Layout from "@/components/layouts/Layout";
import { users } from "@/components/utils/usersData";
import { mypages } from "@/components/utils/mypagelistData";
import { ListItem, ListItemText } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ButtonLayout from "@/components/layouts/Button";
import { DefaultValue } from "recoil";
import router from "next/router";

const Mail: NextPage = () => {
    const {
    register,
    handleSubmit,
    setValue,
    formState: { errors},
    } = useForm(
    );
    const onSubmit = (data: any) => {
        console.log(data);
        router.push(`/ChangedMembers`);
    };
    console.log(errors);

    return (
        <Layout>
        <div className="w-full h-[65%] px-[16px]">
            <p className="text-left text-lg my-[30px] font-bold">メールアドレス</p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="h-[85%] flex flex-col justify-between"
            >
          {/* <label >名前</label> */}
            <div>
                <input
                className="bg-[#f4f4f4] w-full p-[10px] text-[15px] rounded"
                type="text"
                defaultValue={users[0].mail}
                {...register("email", { required: true })}
                />
            </div>

            <ButtonLayout text="変更する" />
            </form>
        </div>
        </Layout>
    );
};

export default Mail;
function setValue(arg0: string, arg1: string) {
    throw new Error("Function not implemented.");
}

