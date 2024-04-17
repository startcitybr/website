"use client";

import { Fragment } from "react";
import Link from "next/link";

import { Disclosure, Menu, Transition } from "@headlessui/react";

import { useState, useEffect } from "react";

import NavBarMobile from "../NavBarMobile";
import navigation from "./data";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBarLogoLeft() {
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };
  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;
    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);
  return (
    <>
      {/* Navbar Normal */}
      <Disclosure as="header" className="bg-transparent z-50">
        {({ open }) => (
          <>
            <div className="items-center mx-auto px-2 sm:px-4 lg:px-8 max-w-7xl">
            <div className="relative h-24 flex justify-around">
                  <div className="relative z-0 flex-1 px-2 flex sm:inset-0">
                    <a href="/#home">
                      <img
                        className="hidden md:block h-20 mt-7 w-auto"
                        src="/logo.png"
                        alt="Startcity"
                      />
                    </a>
                    <a href="/#home">
                      <img
                        className="block md:hidden h-20 mt-5 w-auto"
                        src="/logo.png"
                        alt="Startcity"
                      />
                    </a>
                  </div>
                  <div className="relative z-10 px-2 flex lg:px-0">
                    <div className="flex-shrink-0 flex items-center">
                      <nav
                        className="hidden lg:py-2 lg:flex lg:space-x-8"
                        aria-label="Global"
                      >
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? " text-maincolor2  pt-8 px-6"
                                : "text-white hover:text-maincolor2 font-bold",
                              "rounded-md pt-8 px-3 inline-flex items-center text-sm font-medium uppercase hover:text-maincolor2"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center  lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="rounded-md  p-2 inline-flex items-center justify-center text-white hover:bg-secondcolor hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-maincolor">
                      <span className="sr-only">Open menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="hidden lg:relative lg:z-10 lg:flex lg:items-center"></div>
                </div>
            </div>
            <NavBarMobile />
          </>
        )}
      </Disclosure>

      {/* Navbar OnScroll */}
      {clientWindowHeight > 0 && (
        <Disclosure
          as="header"
          className="fixed w-full top-0 mx-auto px-4 sm:px-6 lg:px-8 z-50 bg-gray-50 shadow-xl rounded-b-xl "
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="700"
        >
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="relative h-24 flex justify-around">
                  <div className="relative z-0 flex-1 px-2 flex sm:inset-0">
                    <a href="/#home">
                      <img
                        className="hidden md:block h-20 mt-2 w-auto"
                        src="/logo.png"
                        alt="Startcity"
                      />
                    </a>
                    <a href="/#home">
                      <img
                        className="block md:hidden h-20 mt-2 w-auto"
                        src="/logo.png"
                        alt="Startcity"
                      />
                    </a>
                  </div>
                  <div className="relative z-10 px-2 flex lg:px-0">
                    <div className="flex-shrink-0 flex items-center">
                      <nav
                        className="hidden lg:py-2 lg:flex lg:space-x-8"
                        aria-label="Global"
                      >
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                              ? " text-maincolor2 pt-4 px-6"
                                : "text-darkcolor hover:text-maincolor2 font-bold",
                              "rounded-md pt-4 px-3 inline-flex items-center text-sm font-medium uppercase hover:text-maincolor2"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center  lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="mt-2 mr-1 rounded-md p-2 inline-flex items-center justify-center text-darkcolor hover:bg-secondcolor hover:text-maincolor1 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-maincolor">
                      <span className="sr-only">Open menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="hidden lg:relative lg:z-10 lg:flex lg:items-center"></div>
                </div>
              </div>
              <NavBarMobile />
            </>
          )}
        </Disclosure>
      )}
    </>
  );
}
