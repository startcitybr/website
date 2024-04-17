import React from "react";
import { Disclosure } from "@headlessui/react";
import navigation from "../NavBarLogoLeft/data";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBarMobile = () => {
  return (
    <>
      <Disclosure.Panel
        as="nav"
        className="lg:hidden mx-2 rounded-md"
        aria-label="Global"
      >
        <div className="pt-2 pb-3 px-2 space-y-1 rounded-b-xl">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-maincolor2 text-white"
                  : "text-graycolor hover:bg-maincolor2 hover:text-white",
                "block rounded-md py-2 px-3 text-base font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </>
  );
};

export default NavBarMobile;
