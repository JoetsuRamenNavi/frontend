import { useForm } from "react-hook-form";
import { User } from "../utils/apiMockData";

type SignInProps = {
  users: User[];
  setShowSignUp: (showSignUp: boolean) => void;
};

type FormData = {
  id: string;
  password: string;
};

const SignIn: React.FC<SignInProps> = ({ users, setShowSignUp }) => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const user = users.find(
      (user) => user.id === parseInt(data.id) && user.password === data.password
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
      <button type="submit">ログイン</button>
      <br />
      <button type="button" onClick={() => setShowSignUp(true)}>
        新規登録はこちら
      </button>
    </form>
  );
};

export default SignIn;
