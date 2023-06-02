import Layout from "@/components/layouts/Layout";
import { entryStores } from "@/components/utils/entryStore";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

const StoreDetail: NextPage = () => {
  const router = useRouter();
  const { strId } = router.query;

  return (
    <>
      <Layout>
        <p></p>
      </Layout>
    </>
  );
};

export default StoreDetail;
