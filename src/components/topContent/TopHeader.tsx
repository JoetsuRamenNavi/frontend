import { NextPage } from "next";

const TopHeader: NextPage = () => {
  return (
    <>
      <div className="topCntHeader"></div>
      <div className="w-full px-[16px] my-[48px]">
        <h2 className="mb-[8px]">ラーメンバトルとは</h2>
        <p>
          上越市内の複数のラーメン屋が参加しシーズンごとに決められたレギュレーションでオリジナルラーメンを作成。参加者の投票(店舗にてQRコードの読み取り)によりグランプリを決める企画です！
        </p>
      </div>
    </>
  );
};

export default TopHeader;
