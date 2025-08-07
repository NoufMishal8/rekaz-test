'use client';
import { motion } from 'framer-motion';
import StartButton from './components/StartButton';
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  const handleStart = () => {
  router.push('/Builder');
};


  return (
   <main
  className="min-h-screen bg-cover bg-center bg-no-repeat text-[#3C2A1E] flex flex-col items-center justify-center px-6 text-center"
  style={{ backgroundImage: "url('/RekazBG.png')" }}
>
  <img
    src="/favicon.png"
    alt="Rekaz Logo"
    className="w-50 h-40 mb-4 "
  />

  <h1 className="text-5xl font-bold mb-6 font-poppins tracking-wide">
    Welcome to <br />
  </h1>

  <h1 className="text-7xl font-extrabold mb-12">
    <span className="text-[#f4a261]">Rekaz</span>{' '}
    <span className="text-[#3C2A1E] font-medium">Mini Website Builder</span>
  </h1>


      <p className="text-lg max-w-xl mb-8">
        Start creating beautiful websites effortlessly. Add sections, edit content, and see it live instantly.
      </p>

      <StartButton onClick={handleStart} />
    </main>
  );
}
  