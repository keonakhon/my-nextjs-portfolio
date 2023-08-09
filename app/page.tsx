import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-zinc-400 min-h-screen flex-col justify-center content-center">
      <div
        className="flex flex-col py-10 px-10 mx-auto bg-white 
        rounded-xl shadow-lg space-y-2 md:w-3/12 sm:w-2/12 sm:items-center sm:space-y-8"
      >
        <Image
          src="/dispaly_profile.jpeg"
          alt="Keo Pic"
          className="block mx-auto w-44 h-44 rounded-full sm:mx-0 sm:shrink-0"
          width={900}
          height={900}
          priority
        />
        <div className="text-center space-y-2 sm:text-center">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Keonakhon Kawan</p>
            <p className="text-slate-500 font-medium">Software Developer</p>
          </div>
          <button className="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
            Linkedin
          </button>
          <button className="px-4 py-1 text-sm text-gray-600 font-semibold rounded-full border border-gray-200 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2">
            GitHub
          </button>
        </div>
      </div>
    </main>
  );
}
