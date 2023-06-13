/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { users } from "../utils/usersData";

const navItems = ["Home", "About", "Contact"];

const Header: NextPage = () => {
  // login状況
  const [isLogin, setIsLogin] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const listItem = (text: string, link: string) => {
    return (
      <Link href={link}>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "start", paddingLeft: "30px" }}>
            <ListItemText>{text}</ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>
    );
  };

  const drawer = (
    <Box
      sx={{
        textAlign: "start",
        backgroundColor: "#333",
        color: "#eee",
        height: "100%",
      }}
    >
      <div className="flex items-center justify-end">
        <img
          className="m-[12px]"
          onClick={handleDrawerToggle}
          src="icon/close.png"
          alt=""
          width={28}
          height={28}
        />
      </div>
      {isLogin ? (
        <>
          <List>
            <div className="mb-[12px] text-[20px]">
              <ListItem>{users[0].name} さん</ListItem>
            </div>
            {listItem("マイページ", "auth/Signin")}
            {listItem("会員情報の確認", "auth/Signup")}
            {listItem("ラーメンバトル投票履歴", "/")}
            {listItem("ログアウト", "/")}
            <div className="border-b-[1px] border-[#eee] mx-[24px] my-[12px]"></div>
            {listItem("ラーメンバトル", "/")}
            {listItem("ラーメンバトル投票フォーム", "/")}
            <div className="border-b-[1px] border-[#eee] mx-[24px] my-[12px]"></div>
            {listItem("店舗検索", "/Search")}
            <div className="border-b-[1px] border-[#eee] mx-[24px] my-[12px]"></div>
            <div className="" onClick={() => setIsLogin(!isLogin)}>
              {listItem("サンプルログアウト", "/")}
            </div>
          </List>
        </>
      ) : (
        <>
          <List>
            {listItem("ログイン", "SignIn")}
            {listItem("新規会員登録", "SignUp")}
            <div className="border-b-[1px] border-[#eee] mx-[24px] my-[12px]"></div>
            {listItem("ラーメンバトル", "/")}
            <div className="border-b-[1px] border-[#eee] mx-[24px] my-[12px]"></div>
            {listItem("店舗検索", "Search")}
            <div className="border-b-[1px] border-[#eee] mx-[24px] my-[12px]"></div>
            <div className="" onClick={() => setIsLogin(!isLogin)}>
              {listItem("サンプルログイン", "/")}
            </div>
          </List>
        </>
      )}
    </Box>
  );
  return (
    <div className="h-[65px] w-full fixed top-0 left-0 pl-[10px] bg-white flex items-center baseShadow z-10">
      <Link href="/">
        <p className="text-[24px] font-semibold">上越ラーメンアプリ</p>
      </Link>

      <div className="absolute right-0">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 0.5, display: { sm: "none" } }}
        >
          <img src="/icon/hamburgerMenu.png" alt="" width={28} height={28} />
        </IconButton>
      </div>

      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </div>
  );
};

export default Header;
