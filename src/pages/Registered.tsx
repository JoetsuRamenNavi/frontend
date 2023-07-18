import Layout from "@/components/layouts/Layout";
import { users } from "@/components/utils/usersData";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import ButtonLayout from "@/components/layouts/Button";
import router from "next/router";

const ChangedMembers : NextPage = () =>{

    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm();
        const onSubmit = (data: any) => {
            console.log(data);
            router.push(`/`);
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
          {/* <label >名前</label> */}
            <div>
                <p>店舗登録が完了しました。</p>
            </div>

            <ButtonLayout text="トップページへ" />
            </form>
        </div>
        </Layout>
        </>
    );
};

export default ChangedMembers;

function register(arg0: string, arg1: { required: boolean; }): import("react").JSX.IntrinsicAttributes & import("react").ClassAttributes<HTMLInputElement> & import("react").InputHTMLAttributes<HTMLInputElement> {
    throw new Error("Function not implemented.");
}
