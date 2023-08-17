import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center content-center bg-gradient-to-r from-indigo-400 to-zinc-600">
      <div
        className="flex flex-col py-10 px-10 mx-auto bg-white 
        rounded-xl shadow-lg space-y-4 sm:w-2/12 sm:items-center"
      >
        <Image
          src="/dispaly_profile.jpeg"
          alt="Keo Pic"
          className="block mx-auto w-48 h-48 rounded-full sm:mx-0 sm:shrink-0"
          width={800}
          height={800}
          priority
        />
        <div className="px-2 space-y-2 text-center">
          <div className="flex flex-col space-y-0.5">
            <p className="text-lg text-black font-semibold">Keonakhon Kawan</p>
            <p className="text-slate-500 font-medium">Software Developer</p>
          </div>
          <div className="flex flex-row">
            <Link
              href="https://github.com/keonakhon"
              className="px-1.5 py-1.5 w-20 mx-1.5 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Linkedin
            </Link>
            <Link
              href="https://github.com/keonakhon"
              className="px-1.5 py-1.5 w-20 mx-1.5 text-sm text-gray-600 font-semibold rounded-full border border-gray-200 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
