import { useForm, SubmitHandler } from "react-hook-form";
import { users } from "@/components/utils/usersData";

type NewUser = {
  id: string;
  password: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewUser>();

  const onSubmit: SubmitHandler<NewUser> = (data) => {
    const existingUser = users.find((user) => user.id === Number(data.id));
    if (existingUser) {
      alert("このIDはすでに使われています。");
      return;
    }
    const newUser = {
      id: Number(data.id),
      password: data.password,
      name: "",
      age: 0,
      battle: {
        date: [],
        flg: [],
        store: [],
        name: [],
      },
    };
    users.push(newUser);
    alert("登録が完了しました。");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        ID:
        <input type="text" {...register("id", { required: true })} />
        {errors.id && <span>This field is required</span>}
      </label>
      <label>
        Password:
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>This field is required</span>}
      </label>
      <input type="submit" />
    </form>
  );
};

export default SignUp;
