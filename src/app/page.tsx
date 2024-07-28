import { supabase } from "@/lib/supabase";

export default function Home() {
  // const setNewView = async () => {
  //   console.log("set new view");
  //   const { data, error } = await supabase
  //     .from("views")
  //     .insert({ name: "random name 25" });
  //   if (data) console.log(data);
  //   if (error) console.log(error);
  // };
  // setNewView();
  return (
    <div className="h-screen flex justify-center items-center text-9xl">
      Logged in
    </div>
  );
}
