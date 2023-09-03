"use client";

import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    const isClient = !!window;
    if (isClient) {
      const cookieAllowed =
        localStorage.getItem("display-cookie-consent") || "true";
      const cookieAllowedType = cookieAllowed === "true";
      setShowCookieConsent(cookieAllowedType);
    }
  }, []);

  const toggleButtonCookie = () => {
    localStorage.setItem("display-cookie-consent", false);
    setShowCookieConsent(false);
  };

  return (
    <div>
      {showCookieConsent && (
        <section className="fixed flex items-center justify-between max-w-4xl p-4 mx-auto bg-white shadow-md left-12 bottom-16 shadow-gray-400 md:gap-x-4 rounded-2xl">
          <p className="text-sm text-gray-600 ">
            By continuing to use this site you consent to the use of cookies in
            accordance with our cookie policy.
          </p>

          <button
            className="flex items-center justify-center text-gray-700 transition-colors duration-300 rounded-full shrink-0 w-7 h-7 focus:outline-none hover:bg-gray-100"
            onClick={toggleButtonCookie}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </section>
      )}
    </div>
  );
};

export default CookieConsent;
