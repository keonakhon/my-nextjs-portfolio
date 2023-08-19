import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import page from "./styles/page.module.css";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col justify-center content-center bg-gradient-to-r from-gray-600 to-indigo-900">
        <div
          className="flex flex-col mx-auto bg-white py-10 items-center
        rounded-xl shadow-lg space-y-4 lg:w-3/12 sm:w-5/12"
        >
          <Image
            src="/dispaly_profile.jpeg"
            alt="Keo Pic"
            className="object-cover mx-auto w-48 h-48 rounded-full sm:mx-0 sm:shrink-0"
            width={800}
            height={800}
            priority
          />
          <div className="px-2 space-y-2">
            <div className="flex flex-col space-y-0.5 text-center">
              <p className="text-lg text-black font-semibold">
                Keonakhon Kawan
              </p>
              <p className="text-slate-500 font-medium">Software Developer</p>
            </div>
            <div className="flex flex-row">
              <Link
                href="https://linkedin.com/in/keonakhon/"
                rel="noopener noreferrer"
                target="_blank"
                className="flex justify-center gap-1.5 px-1.5 py-2 w-28 mx-1.5 text-sm 
                text-[#0175b2] font-semibold rounded-full border border-blue-200 
                hover:text-white hover:bg-[#0175b2] hover:border-transparent 
                focus:outline-none focus:ring-2 focus:ring-[#0175b2] focus:ring-offset-2"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={page.linkedinIcon}
                />
                LinkedIn
              </Link>
              <Link
                href="https://github.com/keonakhon"
                rel="noopener noreferrer"
                target="_blank"
                className="flex justify-center gap-1.5 px-1.5 py-2 w-28 mx-1.5 text-sm 
                text-gray-600 font-semibold rounded-full border border-gray-200 
                hover:text-white hover:bg-gray-600 hover:border-transparent 
                focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
              >
                <FontAwesomeIcon icon={faGithub} className={page.githubIcon} />
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
