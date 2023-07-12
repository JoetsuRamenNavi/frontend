/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layouts/Layout";
import { theme } from "@/components/themes/color";
import { entryDt } from "@/components/utils/entryData";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const EntryStorePage: NextPage = () => {
  const router = useRouter();
  const storeId = Number(router.query.id);
  const store = entryDt.find((store) => store.id === storeId);

  return (
    <Layout>
      <div className="w-full flex flex-col items-center px-[16px] my-[48px]">
        <h2 className="my-[16px]">{store?.store}</h2>
        <div className="w-[360px] flex flex-col items-center">
          <div className="w-full mb-[32px]">
            <img className="my-[16px]" src={store?.image} alt="" />
            <h2 className="px-[16px]">
              {store?.name} {store?.price}円
            </h2>
          </div>
        </div>
        <p>{store?.comment}</p>
        <div className="mt-[48px]">
          <p>住所：{store?.address}</p>
          <p>電話番号：{store?.tel}</p>
          {store?.url != null && (
            <p>
              店舗サイト：
              <a
                href={store?.url}
                className="hover:border-b-[1px] border-[#000]"
              >
                {store?.url}
              </a>
            </p>
          )}
        </div>

        <Link href={"/"}>
          <button
            className={`mt-[32px] w-[320px] py-[12px] h-full ${theme.main.bg} ${theme.base.text}`}
          >
            <p>戻る</p>
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default EntryStorePage;
