/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layouts/Layout";
import { entryStores } from "@/components/utils/entryStore";
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
            {entryStores[storeId].store}
          </p>
          <div className="flex justify-between mb-[15px]">
            <p className="text-[16px]">「 {entryStores[storeId].name} 」</p>
            <p className="text-[16px]">{entryStores[storeId].price} 円</p>
          </div>
        </div>
        <img className="w-full" src={entryStores[storeId].img} alt="" />
      </Layout>
    </>
  );
};

export default StoreDetail;
