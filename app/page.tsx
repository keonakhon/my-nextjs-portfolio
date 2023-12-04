import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faDev
} from "@fortawesome/free-brands-svg-icons";

import CookieConsent from "@/components/CookieConsent";
import MyBlog from "@/components/MyBlog";
import Experiences from "@/components/Experiences";

import page from "./styles/page.module.css";

export default function Home() {
  return (
    <main className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-600 via-sky-600 to-white">
      <section className="flex flex-row min-h-screen items-center">
        <div
          className="flex flex-col mx-auto bg-white pb-4 w-10/12 opacity-80
          rounded-xl shadow-lg space-y-4 lg:w-3/12 md:w-6/12"
        >
          <div className="flex mt-10 justify-center">
            <Image
              src="/images/display_profile.jpeg"
              alt="Keo Pic"
              className="object-cover mx-auto w-48 h-48 rounded-full sm:mx-0 sm:shrink-0"
              width={800}
              height={800}
              priority
            />
          </div>
          <div className="px-2 space-y-2">
            <div className="flex flex-col space-y-0.5 text-center">
              <p className="text-lg text-black font-semibold">
                Keonakhon Kawan
              </p>
              <p className="text-slate-500 font-medium">
                A Software Developer for 5 years
              </p>
            </div>
          </div>
          <div className="flex justify-end gap-1.5 m-4">
            <Link
              href="https://linkedin.com/in/keonakhon"
              rel="noopener noreferrer"
              target="_blank"
              className={`text-[#0175b2]`}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={`${page["brand-icon-size"]}`}
              />
            </Link>
            <Link
              href="https://dev.to/keonakhon"
              rel="noopener noreferrer"
              target="_blank"
              className={`text-gray-800`}
            >
              <FontAwesomeIcon
                icon={faDev}
                className={`${page["brand-icon-size"]}`}
              />
            </Link>
            <Link
              href="https://github.com/keonakhon"
              rel="noopener noreferrer"
              target="_blank"
              className={`text-gray-800`}
            >
              <FontAwesomeIcon
                icon={faSquareGithub}
                className={`${page["brand-icon-size"]}`}
              />
            </Link>
          </div>
        </div>
      </section>
      <MyBlog />
      <Experiences />
      <CookieConsent />
    </main>
  );
}
