import Layout from "@/components/layouts/Layout";
import { users } from "@/components/utils/usersData";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import ButtonLayout from "@/components/layouts/Button";
import router from "next/router";

const Registration : NextPage = () =>{

    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm();
        const onSubmit = (data: any) => {
            console.log(data);
            router.push(`/Registerd`);
        };
        console.log(errors);

    return(
        <>
        <Layout>
            <div className="w-full min-h-[calc(100vh_-_240px)] px-[16px]">
            <p className="text-left text-lg py-[30px] font-bold">店舗登録</p>

        <form 
        onSubmit={handleSubmit(onSubmit)}
        className="h-[calc(100vh_-_360px)] flex flex-col justify-between"
        >
            <div>
            <input type="text"  placeholder="店舗名" className="bg-[#f4f4f4] w-full p-[10px] text-[15px] rounded mb-[30px]" {...register("StorName", {required: true})} />
            <input type="tel" placeholder="電話番号" className="bg-[#f4f4f4] w-full p-[10px] text-[15px] rounded mb-[30px]" {...register("Phone number", {required: true})} />
            <input type="text" placeholder="住所" className="bg-[#f4f4f4] w-full p-[10px] text-[15px] rounded mb-[30px]" {...register("Address", {required: true})} />
            <input type="url" placeholder="お店のURL（任意）" className="bg-[#f4f4f4] w-full p-[10px] text-[15px] rounded mb-[30px]" {...register("URL", {})} />
            </div>

            <ButtonLayout text="登録" />
        </form>
        </div>
        </Layout>
        </>
    );
};

export default Registration;
