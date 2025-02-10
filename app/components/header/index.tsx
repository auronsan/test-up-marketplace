"use client";
import Link from "next/link";
import { SearchBar } from "@/app/components/SearchBar";
import { useScrollingUp } from "@/app/utils/use-scrolling-up";
import { classNames } from "@/app/utils/class-names";
import Image from "next/image";

export function Header() {
  const isScrollingUp = useScrollingUp();

  return (
    <header
      className={classNames(
        isScrollingUp ? "sticky top-0 z-10 animate-dropIn" : "",
        "bg-gradient-to-r from-zinc-700 to-gray-900 shadow-lg transform shadow-xl"
      )}
    >
      <div className="max-w-6xl mx-auto p-4 flex items-center space-x-4">
        <h1 className="text-white w-10">
          <Link href="/">
            <Image src="/vercel.svg" width={40} height={31} alt="vercel" />
          </Link>
        </h1>

        <div className="flex-1 md:pr-8">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
