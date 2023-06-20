/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layouts/Layout";
import { stores } from "@/components/utils/storesData";
import {
  Button,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import { ChangeEvent, useRef, useState } from "react";

// 星評価
export const averageStar = (id: number) => {
  let num = 0;
  let firstDecimalPoint = 0;

  // スコア値の合算
  for (let i = 0; i < stores[id].reputation.star.length; i++) {
    num += stores[id].reputation.star[i];
  }

  // 平均値の算出
  num = num / stores[id].reputation.star.length;

  // 第一小数点取得
  firstDecimalPoint = Math.floor((num - Math.floor(num)) * 10);

  if (0 <= firstDecimalPoint && firstDecimalPoint < 5) {
    // 切り捨て
    return Math.floor(num);
  } else if (5 <= firstDecimalPoint && firstDecimalPoint <= 10) {
    // 切り上げ
    return Math.ceil(num);
  } else {
    // エラーハンドリング
    return 0;
  }
};

const Search: NextPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [soup, setSoup] = useState("");
  const [style, setStyle] = useState("");
  const [men, setMen] = useState("");

  // 検索バー ハンドル
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  // カテゴリー ハンドル
  // スープ
  const handleSoupCategoryChange = (e: SelectChangeEvent<string>) => {
    if (e.target.value !== undefined) {
      setSoup(e.target.value);
      console.log(e.target.value);
    }
  };
  const soupCategory = ["豚骨", "醤油", "豚骨醤油", "塩"];

  // スタイル
  const handleStyleCategoryChange = (e: SelectChangeEvent<string>) => {
    setStyle(e.target.value as string);
  };
  const styleCategory = ["ラーメン", "つけ麺", "まぜそば", "油そば"];

  // 麺
  const handleMenCategoryChange = (e: SelectChangeEvent<string>) => {
    setMen(e.target.value as string);
  };
  const menCategory = ["手打ち太麺", "手打ち細麺", "ちぢれ", "ストレート"];

  // 検索入力欄の初期化
  const handleCancel = () => {
    setSearchValue("");
    setSoup("");
    setStyle("");
    setMen("");
  };

  // 検索バー　レイアウト
  const searchBar = (
    <div className="relative rounded-lg bg-[#00000020] hover:bg-[#00000030]">
      <div className="p-[5px] h-full absolute pointer-events-none flex items-center justify-center">
        <img src="/icon/search.png" alt="" width={18} height={18} />
      </div>
      <div className="ml-[32px] w-full">
        <InputBase
          className="w-full h-[30px]"
          onChange={handleSearch}
          value={searchValue}
          placeholder="検索"
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </div>
  );

  // セレクトボタン　レイアウト
  const selectCategory = (
    <>
      <div className="flex items-center justify-between my-[15px]">
        <FormControl fullWidth color="warning">
          <InputLabel id="demo-simple-select-label">スープ</InputLabel>
          <Select
            className="w-[100px]"
            value={soup}
            label="スープ"
            onChange={handleSoupCategoryChange}
          >
            {soupCategory.map((name, index) => (
              <MenuItem key={index} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth color="warning">
          <InputLabel id="demo-simple-select-label">スタイル</InputLabel>
          <Select
            className="w-[100px]"
            value={style}
            label="スタイル"
            onChange={handleStyleCategoryChange}
          >
            {styleCategory.map((name, index) => (
              <MenuItem key={index} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth color="warning">
          <InputLabel id="demo-simple-select-label">麺</InputLabel>
          <Select
            className="w-[100px]"
            value={men}
            label="me"
            onChange={handleMenCategoryChange}
          >
            {menCategory.map((name, index) => (
              <MenuItem key={index} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );

  return (
    <>
      <Layout>
        <div className="bg-[#f3f3f3] h-[120px] w-full overflow-hidden p-[12px]">
          {searchBar}
          {selectCategory}
        </div>
        <div className="w-full bg-[#d7d7d7]">
          {stores.map((store, index) => (
            <Link key={index} href={`stores/${store.id}`}>
              <div className="p-[10px] bg-[#fff] my-[10px] border-t-[5px] border-[#eba61d] flex justify-between items-center">
                <div className="w-[95%]">
                  <p className="text-[18px]">{store.name}</p>
                  <div className="flex items-center justify-around my-[10px]">
                    <img
                      src={store.main.images[0]}
                      alt=""
                      width={120}
                      height={120}
                    />
                    <img
                      src={store.main.images[1]}
                      alt=""
                      width={120}
                      height={120}
                    />
                    <img
                      src={store.main.images[2]}
                      alt=""
                      width={120}
                      height={120}
                    />
                  </div>
                  <div className="flex items-center mx-[10px]">
                    <img
                      src={`/star/${averageStar(store.id)}.png`}
                      alt=""
                      width={100}
                    />
                    <span className="text-[16px] font-bold ml-[5px] text-[#333]">
                      {averageStar(store.id) / 2}
                    </span>
                  </div>
                  <div className="flex items-center text-[16px] my-[10px] justify-around w-[320px]">
                    <p>予算</p>
                    <p>
                      &#x1f31e;~¥<span>{store.main.budgetLunch}</span>
                    </p>
                    <p>
                      &#x1f31b;~¥
                      <span>{store.main.budgetNight}</span>
                    </p>
                    <p>
                      口コミ <span>{store.reputation.title.length}</span>件
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src="icon/chevron-right.png"
                    alt=""
                    width={16}
                    height={16}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Search;
