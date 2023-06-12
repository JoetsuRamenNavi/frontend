import { useForm } from "react-hook-form";
import { User } from "../utils/apiMockData";

type SignUpProps = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  setShowSignUp: (showSignUp: boolean) => void;
};

type FormData = {
  id: string;
  password: string;
};

const SignUp: React.FC<SignUpProps> = ({ users, setUsers, setShowSignUp }) => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    if (users.find((user) => user.id === parseInt(data.id))) {
      console.log("User ID already taken");
      return;
    }

    const newUser = {
      id: parseInt(data.id),
      password: data.password,
      name: "New User",
      age: 30,
      favorite_store: 1,
    };
    setUsers((prevUsers: User[]): User[] => [...prevUsers, newUser]);
    setShowSignUp(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("id", { required: true })} placeholder="User ID" />
      <input
        {...register("password", { required: true })}
        type="password"
        placeholder="Password"
      />
      <button type="submit">新規登録</button>
      <br />
      <button type="button" onClick={() => setShowSignUp(false)}>
        ログインはこちら
      </button>
    </form>
  );
};

export default SignUp;
