import Layout from "@/components/layouts/Layout";
import { users } from "@/components/utils/usersData";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import ButtonLayout from "@/components/layouts/Button";
import router from "next/router";

const Entered : NextPage = () =>{

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
        <div className="w-full h-[70vh] px-[16px]">
            <p className="text-left text-lg my-[30px] font-bold">ラーメンバトルエントリー</p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="h-[85%] flex flex-col justify-between"
            >
          {/* <label >名前</label> */}
            <div>
                <p>エントリーが完了しました。</p>
                <br></br>
                <p>運営から確認のご連絡を差し上げます。</p>
                <p>少々お待ちください</p>
            </div>

            <ButtonLayout text="トップページへ" />
            </form>
        </div>
        </Layout>
        </>
    );
};

export default Entered;

