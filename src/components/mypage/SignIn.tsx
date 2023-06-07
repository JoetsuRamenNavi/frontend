import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { User } from "../utils/apiMockData";

type SignInProps = {
  users: User[];
};

type FormData = {
  id: number;
  password: string;
};

const SignIn: React.FC<SignInProps> = ({ users }) => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const user = users.find(
      (user) => user.id === data.id && user.password === data.password
    );
    if (user) {
      console.log("ログイン成功！");
    } else {
      console.log("一致するuserがいません");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("id", { required: true })} placeholder="User ID" />
      <input
        {...register("password", { required: true })}
        type="password"
        placeholder="Password"
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
