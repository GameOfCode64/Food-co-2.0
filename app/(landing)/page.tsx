import TopRestaurant from "@/components/TopRestaurant";
import play from "@/public/play_store.png";
import app from "@/public/app_store.png";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="md:px-20 px-4 mt-8 h-full mb-8">
      <TopRestaurant />
      <div className="w-full bg-[#eeeeee] h-[300px] md:mt-12 mt-6 rounded-3xl px-2">
        <div className="flex items-center justify-center h-full flex-col">
          <p className="font-extrabold text-[#333] text-center">
            For better experience, download the Food & Co app now
          </p>
          <div className="flex items-center justify-center gap-12 mt-8">
            <Image
              src={play}
              alt="play"
              height={120}
              width={120}
              className="cursor-pointer"
            />
            <Image
              src={app}
              alt="play"
              height={120}
              width={120}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-2 md:mt-8 mt-4">
        <p>❤️ Game of Code</p>

        <div className="flex items-center justify-normal space-x-4">
          <Link
            href="https://github.com/GameOfCode64"
            className="w-[45px] h-[45px] border-[2px] flex items-center justify-center bg-black text-white p-1 rounded-full"
          >
            <Github />
          </Link>
          <Link
            href="https://www.linkedin.com/in/bhavishya-tripathi-0ba42b297/"
            className="w-[45px] h-[45px] border-[2px]  flex items-center justify-center bg-[#007bb6] text-white p-1 rounded-full"
          >
            <Linkedin />
          </Link>
        </div>
      </div>
    </main>
  );
}
