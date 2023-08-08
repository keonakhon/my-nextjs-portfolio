import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className="py-11 px-11 w-full max-w-fit mx-auto 
        bg-white rounded-xl shadow-lg space-y-2 item 
        sm:items-center sm:space-y-2 sm:space-x-6"
      >
        <Image
          src="/dispaly_profile.jpeg"
          alt="Keo Pic"
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          width={200}
          height={200}
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
