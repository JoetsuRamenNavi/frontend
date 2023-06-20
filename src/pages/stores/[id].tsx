/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layouts/Layout";
import { stores } from "@/components/utils/storesData";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { averageStar } from "../Search";
import Link from "next/link";
import { ColorButton } from "@/components/button/ColorButton";
import { Button, Grid } from "@mui/material";
import { Item } from "@/components/card/GridItem";

const StoreDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [storeId, setStoreId] = useState(0);
  const [tabFlg, setTabFlg] = useState(0);

  const LineLayout = <div className="border-b-[1px] w-full"></div>;

  const viewTop = (
    <>
      <div className="p-[16px]">
        <div className="grid-cols-3 grid">
          {stores[storeId].main.images.map((image, index) => (
            <div className="p-[4px]" key={index}>
              <img src={image} alt="" />
            </div>
          ))}
        </div>
        <div className="text-center text-[16px] mt-[32px] mb-[16px]">
          <p>店舗情報</p>
        </div>

        {LineLayout}

        <div className="py-[16px] text-[16px] flex items-center">
          <div className="w-[130px] flex items-center justify-center">
            <p className="">スープ</p>
          </div>
          {stores[storeId].main.soup.map((name, index) => (
            <p key={index}>{name}</p>
          ))}
        </div>

        {LineLayout}

        <div className="py-[16px] text-[16px] flex items-center">
          <div className="w-[130px] flex items-center justify-center">
            <p className="">スタイル</p>
          </div>
          {stores[storeId].main.style.map((name, index) => (
            <p key={index}>{name}</p>
          ))}
        </div>

        {LineLayout}

        <div className="py-[16px] text-[16px] flex items-center">
          <div className="w-[130px] flex items-center justify-center">
            <p className="">麺</p>
          </div>
          {stores[storeId].main.men.map((name, index) => (
            <p key={index}>{name}</p>
          ))}
        </div>

        {LineLayout}

        <div className="py-[16px] text-[16px] flex items-center">
          <div className="w-[130px] flex items-center justify-center">
            <p className="">電話番号</p>
          </div>
          <div className="">
            <p>{stores[storeId].main.tel}</p>
          </div>
        </div>

        {LineLayout}

        <div className="py-[16px] text-[16px] flex items-center">
          <div className="w-[130px] flex items-center justify-center">
            <p className="">住所</p>
          </div>
          <div className="">
            <p>〒{stores[storeId].main.address[0]}</p>
            <p>{stores[storeId].main.address[1]}</p>
          </div>
        </div>
        <iframe
          src={stores[storeId].main.address[2]}
          className="w-full h-[250px] pb-[16px]"
          loading="lazy"
        ></iframe>

        {LineLayout}

        <div className="py-[16px] text-[16px] flex items-center">
          <div className="w-[130px] flex items-center justify-center">
            <p className="">営業時間</p>
          </div>
          <div className="flex flex-col items-center">
            {stores[storeId].main.time.map((name, index) => (
              <p key={index} className="mr-[16px]">
                {name}
              </p>
            ))}
          </div>
        </div>

        {LineLayout}

        <div className="py-[16px] text-[16px] flex items-center">
          <div className="w-[130px] flex items-center justify-center">
            <p className="">定休日</p>
          </div>
          <div className="flex items-center">
            {stores[storeId].main.holiday.map((name, index) => (
              <p key={index} className="mr-[16px]">
                {name}曜日
              </p>
            ))}
          </div>
        </div>

        {LineLayout}

        <div className="py-[16px] text-[16px] flex items-center">
          <div className="w-[130px] flex items-center justify-center">
            <p className="">予算</p>
          </div>
          <div className="">
            <p>&#x1f31e;~¥{stores[storeId].main.budgetLunch}</p>
            <p>&#x1f31b;~¥{stores[storeId].main.budgetNight}</p>
          </div>
        </div>

        {LineLayout}

        <div className="py-[16px] text-[16px] flex items-center">
          <div className="w-[130px] flex items-center justify-center">
            <p className="">支払い</p>
          </div>
          <div className="flex flex-col">
            {stores[storeId].main.pay.map((name, index) => (
              <p key={index} className="mr-[16px]">
                {name}
              </p>
            ))}
          </div>
        </div>

        {LineLayout}

        <div className="py-[16px] text-[16px] flex items-center">
          <div className="w-[130px] flex items-center justify-center">
            <p className="">席数</p>
          </div>
          <div className="flex flex-col">
            <p>テーブル席 {stores[storeId].main.seat.table} 席</p>
            <p>カウンター席 {stores[storeId].main.seat.counter} 席</p>
          </div>
        </div>

        {LineLayout}
      </div>
    </>
  );
  const viewMenu = (
    <div className="px-[16px] w-full">
      <div className="w-full">
        {stores[storeId].menu.image.map((src, index) => (
          <div
            className="shadow-md w-full flex items-center my-[16px] justify-between text-[16px]"
            key={index}
          >
            <img src={src} alt="" className="w-[100px] h-[100px]" />
            <p>{stores[storeId].menu.name[index]}</p>
            <p className="mr-[16px]">{stores[storeId].menu.price[index]} 円</p>
          </div>
        ))}
      </div>
    </div>
  );
  const viewReputation = (
    <div className="px-[16px] w-full">
      <div className="p-[32px]">
        <Button variant="outlined" color="inherit" fullWidth>
          口コミを投稿する
        </Button>
      </div>

      {LineLayout}
      {stores[storeId].reputation.star.map((star, index) => (
        <div className="w-full" key={index}>
          <div className="flex mt-[16px] mb-[8px]">
            {stores[storeId].reputation.storeTime[index] ? (
              <span className="text-[16px]">&#x1f31e;</span>
            ) : (
              <span className="text-[16px]">&#x1f31b;</span>
            )}

            <img src={`/star/${star}.png`} alt="" width={100} />
            <span className="text-[16px] font-bold ml-[5px] text-[#333]">
              {star / 2}
            </span>
          </div>
          <p className="text-[16px] mb-[8px]">
            {stores[storeId].reputation.title[index]}
          </p>
          <p className="mb-[16px]">{stores[storeId].reputation.body[index]}</p>

          {LineLayout}
        </div>
      ))}
    </div>
  );

  const selectedTab = () => {
    if (tabFlg == 0) {
      return viewTop;
    }
    if (tabFlg == 1) {
      return viewMenu;
    }
    if (tabFlg == 2) {
      return viewReputation;
    }
  };

  useEffect(() => {
    if (typeof id == "string") {
      setStoreId(parseInt(id));
    }
  }, [id]);

  return (
    <>
      <Layout>
        <div className="w-full">
          <Link href={"../Search"}>
            <p className="text-[16px] my-[8px] text-left bg-[#fff]">
              ＜ 検索結果に戻る
            </p>
          </Link>
        </div>
        <img
          className="w-full h-[250px]"
          src={stores[storeId].topImage}
          alt=""
        />
        <div className="flex flex-col justify-start w-full px-[16px]  bg-[#f3f3f3]">
          <p className="text-[18px] my-[8px] font-bold">
            {stores[storeId].name}
          </p>

          <div className="flex">
            <img
              src={`/star/${averageStar(stores[storeId].id)}.png`}
              alt=""
              width={120}
            />
            <span className="text-[16px] font-bold ml-[5px] text-[#333]">
              {averageStar(stores[storeId].id) / 2}
            </span>
          </div>
          <div className="flex items-center text-[16px] mt-[12px] justify-around w-[320px]">
            <p>予算</p>
            <p>
              &#x1f31e;~¥<span>{stores[storeId].main.budgetLunch}</span>
            </p>
            <p>
              &#x1f31b;~¥
              <span>{stores[storeId].main.budgetNight}</span>
            </p>
            <p>
              口コミ <span>{stores[storeId].reputation.title.length}</span>件
            </p>
          </div>
          <div className="flex items-center text-[16px] px-[8px] my-[8px] w-[320px]">
            <p className="mr-[16px]">店休日</p>
            <span>（</span>
            {stores[storeId].main.holiday.map((day, index) => (
              <p key={index} className="ml-[8px]">
                {day}曜
              </p>
            ))}
            <span className="ml-[8px]">）</span>
          </div>
        </div>
        <div className="px-[16px] py-[8px] w-full flex items-center justify-around shadow-md">
          <ColorButton onClick={() => setTabFlg(0)}>トップ</ColorButton>
          <ColorButton onClick={() => setTabFlg(1)} className="ml-[8px]">
            メニュー
          </ColorButton>
          <ColorButton onClick={() => setTabFlg(2)} className="ml-[8px]">
            口コミ
          </ColorButton>
        </div>
        <div className="w-full">{selectedTab()}</div>
      </Layout>
    </>
  );
};

export default StoreDetail;
