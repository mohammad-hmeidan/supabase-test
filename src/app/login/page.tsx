"use client";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const Login = () => {
  const [data, setData] = useState<{ email: string; passowrd: string }>({
    email: "",
    passowrd: "",
  });
  const router = useRouter();
  const login = async () => {
    try {
      let { data: datauser, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.passowrd,
      });

      if (datauser) {
        console.log(datauser);
        router.refresh();
      }
      console.log(error);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="container mx-auto w-[400px]">
      <div className="grid">
        <label>Email</label>
        <input
          type="text"
          name="email"
          className="border-2 border-red-300"
          value={data?.email}
          onChange={handleChange}
        />
      </div>
      <div className="grid">
        <label>passowrd</label>
        <input
          type="text"
          name="passowrd"
          className="border-2 border-red-300"
          value={data?.passowrd}
          onChange={handleChange}
        />
      </div>
      <div>
        <button
          onClick={login}
          className="bg-red-500 mt-3 mx-auto block p-2 text-white "
        >
          login
        </button>
      </div>
    </div>
  );
};

export default Login;
