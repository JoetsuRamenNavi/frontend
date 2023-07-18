import ButtonLayout from "@/components/layouts/Button";
import Layout from "@/components/layouts/Layout";
import { entryDt } from "@/components/utils/entryData";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const QR: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const store = entryDt.find((store) => store.id == Number(id));
  return (
    <Layout>
      <div className="px-[16px] h-[calc(100vh_-_240px)] py-[32px] flex flex-col justify-between">
        <div className="">
          <h2 className="mb-[32px]">ラーメンバトル</h2>
          <div className="h-[h-]">
            <p className="font-bold">{store?.store}</p>
            <p>の投票権を獲得しました！</p>
          </div>
        </div>
        <div className="cursor-pointer">
          <Link href={"/Mypage/"}>
            <ButtonLayout text={"マイページ"} />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default QR;
