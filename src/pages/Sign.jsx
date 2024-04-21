import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";

const Sign = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const { username, password } = userInfo;
    if (validate(username, password)) {
      try {
        const token = await axios.post('http://localhost:5000/user/generateToken', userInfo);

        console.log(token)
        document.cookie = token.data;
        navigate("/")
      } catch (error) {
        console.log(error);
      }

      setUserInfo({
        username: "",
        password: ""
      })
    }
  };

  const validate = (username, password) => {
    if (username.length < 3) {
      alert("username must be bigger than 3 characters");
      return false;
    } else if (password.length < 8) {
      alert("password must be bigger than 8 characters");
      return false;
    }
    return true;
  };
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Input
        type="text"
        value={userInfo.username}
        onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
        placeholder="Enter Your Name"
        autoComplete="off"
      />
      <Input
        type="password"
        value={userInfo.password}
        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
        placeholder="Enter Your Password"
        autoComplete="off"
      />
      <Button type="submit" value="Sign-in" />
    </Form>
  );
};

export default Sign;

const Form = tw.form`flex flex-col gap-6 w-1/2 mx-auto my-24 border-2 px-8 py-14 rounded-xl shadow-lg border-white/10`
const Input = tw.input`p-8 rounded-md bg-opacity-5 focus:outline-none bg-black text-white`
const Button = tw.input`p-8 rounded-md bg-red-600 text-white font-bold text-xl shadow-lg cursor-pointer`
