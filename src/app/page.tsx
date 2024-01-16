import QuizSetup from "@/components/home/QuizSetup";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col mx-4 w-full h-4/5 bg-slate-100 rounded-lg mt-6 shadow-lg">
      <QuizSetup />
    </div>
  );
};

export default Home;
