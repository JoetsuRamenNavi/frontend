import Layout from "@/components/layouts/Layout";
import SignIn from "@/components/mypage/SignIn";
import SignUp from "@/components/mypage/SignUp";
import { NextPage } from "next";
import { useState } from "react";
import { User, mockUserData } from "@/components/utils/apiMockData";

const Mypage: NextPage = () => {
  const [users, setUsers] = useState<User[]>(mockUserData);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <Layout>
        {showSignUp ? (
          <SignUp
            users={users}
            setUsers={setUsers}
            setShowSignUp={setShowSignUp}
          />
        ) : (
          <SignIn users={users} setShowSignUp={setShowSignUp} />
        )}
      </Layout>
    </>
  );
};

export default Mypage;
