/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layouts/Layout";
import { stores } from "@/components/utils/storesData";
import useWindowSize from "@/hooks/useWindowSize";
import { Button } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [width, height] = useWindowSize();

  const [topImage, setTopImage] = useState("");

  useEffect(() => {
    if (width >= 0 && width <= 414) {
      return setTopImage("/top/topImage.png");
    }
    return setTopImage("/top/topImageTablet.png");
  }, [width]);

  return (
    <>
      <Layout>
        <div className="w-full">
          <img src={topImage} alt="雪室酒粕ラーメン" />
        </div>
        <div className="w-full px-[15px] text-[16px] mt-[40px] bg-white">
          <p className="text-[20px] font-bold my-[14px]">
            ラーメンバトルとは、、、
          </p>
          <p>
            上越市内の複数のラーメン屋が参加しシーズンごとに決められたレギュレーションでオリジナルラーメンを作成。参加者の投票(店舗にてQRコードの読み取り)によりグランプリを決める企画です！
          </p>
        </div>
        <div className="w-full mt-[40px]">
          <p className="text-[20px] font-bold text-center">
            エントリー店舗の紹介
          </p>
          {stores.map((store, index) => (
            <div
              key={index}
              className="w-full bg-[#FAEACEAA] my-[30px] py-[20px] px-[15px]"
            >
              <div className="px-[15px]">
                <p className="text-[18px] my-[10px] font-bold">{store.name}</p>
                <div className="flex justify-between mb-[15px]">
                  <p className="text-[16px]">「 {store.entry.name} 」</p>
                  <p className="text-[16px]">{store.entry.price} 円</p>
                </div>
              </div>
              <img className="w-full" src={store.entry.img} alt="" />
              <div className="flex justify-end m-[8px]">
                <Link href={`/stores/${store.id}`}>
                  <Button
                    variant="contained"
                    style={{
                      color: "#fff",
                      borderColor: "#d5a347",
                      backgroundColor: "#d5a347",
                    }}
                  >
                    詳細を見る
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}
