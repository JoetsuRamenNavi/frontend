/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layouts/Layout";
import { stores } from "@/components/utils/storesData";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const StoreDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [storeId, setStoreId] = useState(0);

  useEffect(() => {
    if (typeof id == "string") {
      setStoreId(parseInt(id));
    }
  }, [id]);

  return (
    <>
      <Layout>
        <div className="px-[15px]">
          <p className="text-[18px] my-[10px] font-bold">
            {stores[storeId].name}
          </p>
          <div className="flex justify-between mb-[15px]">
            <p className="text-[16px]">「 {stores[storeId].entry.name} 」</p>
            <p className="text-[16px]">{stores[storeId].entry.price} 円</p>
          </div>
        </div>
        <img className="w-full" src={stores[storeId].entry.img} alt="" />
      </Layout>
    </>
  );
};

export default StoreDetail;
