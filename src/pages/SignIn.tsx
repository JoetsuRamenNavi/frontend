import { useForm } from "react-hook-form";
import { useState } from "react";
import { users } from "@/components/utils/usersData";

type Inputs = {
  id: string;
  password: string;
};

// usersDataの型
type User = {
  id: number;
  name: string;
  password: string;
  age: number;
  battle: {
    date: string[];
    flg: boolean[];
    store: string[];
    name: string[];
  };
};

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [loginUser, setLoginUser] = useState<User | null>(null);

  const onSubmit = ({ id, password }: Inputs) => {
    const user = users.find(
      (user) => user.id === Number(id) && user.password === password
    );
    if (user) {
      setLoginUser(user);
    } else {
      alert("IDかパスワードが間違っています");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="number"
        placeholder="ID"
        {...register("id", { required: true })}
      />
      {errors.id && <p>This field is required</p>}

      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />
      {errors.password && <p>This field is required</p>}

      <input type="submit" />
      {loginUser && <p>ログイン成功: {loginUser.name}</p>}
    </form>
  );
};

export default SignIn;
