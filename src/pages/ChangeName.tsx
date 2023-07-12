import Layout from "@/components/layouts/Layout";
import { users } from "@/components/utils/usersData";
import { mypages } from "@/components/utils/mypagelistData";
import { ListItem, ListItemText } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonLayout from "@/components/layouts/Button";

const Name: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <Layout>
      <div className="w-full h-[80%] px-[16px]">
        <p className="text-left text-lg my-[30px] font-bold">マイページ</p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-[85%] flex flex-col justify-between"
        >
          {/* <label >名前</label> */}
          <div>
            <input
              className="bg-[#f4f4f4] w-full p-[10px] text-[15px] rounded"
              type="text"
              value={users[0].name}
              {...register("name", { required: true })}
            />
          </div>

          <ButtonLayout text="変更する" />
        </form>
      </div>
    </Layout>
  );
};

export default Name;
