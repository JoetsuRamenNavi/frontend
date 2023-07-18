import Layout from "@/components/layouts/Layout";
import { entryDt } from "@/components/utils/entryData";
import { NextPage } from "next";
import { useRouter } from "next/router";

const QR: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const store = entryDt.find((store) => store.id == Number(id));
  return (
    <Layout>
      <div className="px-[16px] h-[calc(100vh_-_272px)]">
        <div className="">
          <h2 className="my-[32px]">ラーメンバトル</h2>
          <div className="h-[h-]">
            <p className="font-bold">{store?.store}</p>
            <p>の投票権を獲得しました！</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QR;
