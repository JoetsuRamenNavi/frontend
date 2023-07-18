import Layout from "@/components/layouts/Layout";
import { users } from "@/components/utils/usersData";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import ButtonLayout from "@/components/layouts/Button";
import router from "next/router";

const Entry : NextPage = () =>{

    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm();
        const onSubmit = (data: any) => {
            console.log(data);
            router.push(`/Entered`);
        };
        console.log(errors);

    return(
        <>
        <Layout>
            <div className="w-full min-h-[calc(100vh_-_240px)] px-[16px]">
            <p className="text-left text-lg py-[30px] font-bold">ラーメンバトルエントリー</p>
            <p>対戦テーマ：雪むろ酒かすラーメン</p>
            <p>開催期間 2023年12月~2024年4月</p>

        <form 
        onSubmit={handleSubmit(onSubmit)}
        className="h-[calc(100vh_-_410px)] flex flex-col justify-between"
        >
            <div>
            <input type="text" placeholder="エントリー商品名" className="bg-[#f4f4f4] w-full p-[10px] text-[15px] rounded my-[30px]" {...register("entryName", {required: true})} />
      <input type="number" placeholder="値段" className="bg-[#f4f4f4] w-full p-[10px] text-[15px] rounded mb-[30px]" {...register("cost", {required: true})} />
      <textarea placeholder="商品紹介（任意）" className="bg-[#f4f4f4] w-full p-[10px] text-[15px] rounded mb-[30px]" {...register} />
            </div>

            <ButtonLayout text="エントリー" />
        </form>
        </div>
        </Layout>
        </>
    );
};

export default Entry;
