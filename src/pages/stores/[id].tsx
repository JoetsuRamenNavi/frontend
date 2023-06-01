import Layout from "@/components/layouts/Layout";
import { NextPage } from "next";
import { useRouter } from "next/router";

const StoreDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Layout>
        <p>
          このページのIDは{id}で{router.pathname}
        </p>
      </Layout>
    </>
  );
};

export default StoreDetail;
