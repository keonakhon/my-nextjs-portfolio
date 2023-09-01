"use client";

import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faDev
} from "@fortawesome/free-brands-svg-icons";

import CookieConsent from "@/components/CookieConsent";

import page from "./styles/page.module.css";

// Test pr for vercel

export default function Home() {
  return (
    <main>
      <div
        className="flex min-h-screen flex-col justify-center content-center
      bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-green-100 via-sky-400 to-rose-700"
      >
        <div
          className="flex flex-col mx-auto bg-white py-10 items-center
        rounded-xl shadow-lg space-y-4 lg:w-3/12 sm:w-5/12"
        >
          <Image
            src="/images/display_profile.jpeg"
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
                className={`${page["button-linkedin"]} flex justify-center gap-1.5 px-1.5 py-2 w-28 mx-1.5 text-sm 
                text-[#0175b2] font-semibold rounded-full border border-blue-200 
                hover:text-white hover:bg-[#0175b2] hover:border-transparent 
                focus:outline-none focus:ring-2 focus:ring-[#0175b2] focus:ring-offset-2`}
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={`${page["linkedin-icon"]} ${page["brand-icon-size"]}`}
                />
                LinkedIn
              </Link>
              <Link
                href="https://github.com/keonakhon"
                rel="noopener noreferrer"
                target="_blank"
                className={`${page["button-github"]} flex justify-center gap-1.5 px-1.5 py-2 w-28 mx-1.5 text-sm 
                text-gray-600 font-semibold rounded-full border border-gray-200 
                hover:text-white hover:bg-gray-600 hover:border-transparent 
                focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2`}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className={`${page["github-icon"]} ${page["brand-icon-size"]}`}
                />
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
      <CookieConsent />
    </main>
  );
}
