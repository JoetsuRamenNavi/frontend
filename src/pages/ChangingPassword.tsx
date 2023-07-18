import Layout from "@/components/layouts/Layout";
import { users } from "@/components/utils/usersData";
import { mypages } from "@/components/utils/mypagelistData";
import { ListItem, ListItemText } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm, useFormContext } from "react-hook-form";
import ButtonLayout from "@/components/layouts/Button";
import router, { useRouter } from "next/router";

const Password: NextPage = () => {

    const Input = () => {
        const router = useRouter();
    };
      
        const {
          register, //inputなどに入力された値を参照するために使う
          handleSubmit,
          formState: { errors, isValid }
        } = useForm();
      
        const onSubmit = (data: any) => {
          console.log(data);
        // パスワード変更に遷移
          router.push(`/ChangedPassword`);
        };
        
      
        
//     const {
//     register,
//     handleSubmit,
//     formState: { errors,isValid },
//     } = useForm();
//     const onSubmit = (data: any) => {
//         console.log(data);
//         router.push("/ChangedPassword");
//     }

    
// //   const values = getValues(); // 入力データを取得

//   //直アクセスの場合はリダイレクト
//   //※必須項目の無いフォームは無いと思うのでisValidで判定
//     // if (!isValid) {
//     // router.push(`/`);
//     // }

//     console.log(errors);

    return (
        <Layout>
        <div className="w-full h-[65%] px-[16px]">
            <p className="text-left text-lg my-[30px] font-bold">パスワード変更</p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="h-[85%] flex flex-col justify-between"
                // action={"/ChangedPassword"}
            >
          {/* <label >名前</label> */}
            <div>
                <input
                className="bg-[#f4f4f4] w-full p-[10px] text-[15px] rounded"
                type="password" 
                placeholder="passord" 
                {...register("Password", {required: true, max: 100, min: 8})} 
                />
            </div>

            <ButtonLayout text="パスワードを変更する" />
            </form>
        </div>
        </Layout>
    );
};

export default Password;
