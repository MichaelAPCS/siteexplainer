import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsMoonFill, BsSun } from "react-icons/bs";
import { TbWriting } from "react-icons/tb";
import ContactUs from "./ContactUs";
import { FaLanguage } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  let [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    // <header className="flex justify-between items-center w-full border-b-2 pb-2 sm:px-4 px-2">
    //   <Link href="/" className="flex items-center space-x-3">
    //     <TbWriting className={"h-10 w-10 mt-2 text-gray-700 dark:text-white"} />
    //     <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight text-gray-700 dark:text-white">
    //       SiteExplainer
    //     </h1>
    //   </Link>
    //   <div className="flex flex-row gap-4">
    //     <ContactUs />
    //     <div className="flex justify-center border-2 rounded-full border-gray-600 dark:border-gray-200">
    //       {currentTheme === "dark" ? (
    //         <button
    //           className="p-2 text-xl cursor-pointer"
    //           onClick={() => setTheme("light")}>
    //           <BsMoonFill />
    //         </button>
    //       ) : (
    //         <button
    //           className="p-2 text-xl cursor-pointer"
    //           onClick={() => setTheme("dark")}>
    //           <BsSun />
    //         </button>
    //       )}
    //     </div>
    //   </div>

    // </header>
    <div className="z-20 shadow-md w-full fixed top-0 left-0 md:bg-gray-300 md:bg-opacity-30">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer items-center text-gold">
          <button>
            <Link href="/" className="flex items-center space-x-3">
              <TbWriting
                className={"h-10 w-10 mt-2 text-gray-700 dark:text-white"}
              />
              <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight text-gray-700 dark:text-white">
                SiteExplainer
              </h1>
            </Link>
          </button>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute z-20 right-8 top-6 cursor-pointer md:hidden  text-white">
          <button>
            {open ? (
              <AiOutlineClose className="text-white dark:text-gray-700" />
            ) : (
              <AiOutlineMenu className="text-black dark:text-white" />
            )}
          </button>
        </div>

        <ul
          className={`md:flex md:items-center items-end text- md:pb-0 pb-12 absolute md:static md:z-auto text-white md:bg-transparent bg-gold hover:text-gold z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in font-rubik bg-black dark:bg-white md:dark:bg-transparent ${
            open ? "top-0" : "top-[-490px]"
          }`}>
          <div className="mt-4">
            <button className="md:hidden flex">
              <Link href="/" className="flex items-center space-x-3">
                <TbWriting
                  className={"h-10 w-10 mt-2 dark:text-gray-700 text-white"}
                />
                <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight dark:text-gray-700 text-white">
                  SiteExplainer
                </h1>
              </Link>
            </button>
          </div>
          <div className="flex md:flex-row gap-4 justify-around mt-8 md:mt-0 ">
            <div className="flex text-4xl items-center text-center dark:text-black md:dark:text-white md:text-black ">
              <FaLanguage className="" />
            </div>
            <ContactUs />
            <div
              onClick={() => setOpen(false)}
              className="flex justify-center border-2 rounded-full  border-white dark:border-black md:border-gray-700 md:dark:border-white">
              {currentTheme === "dark" ? (
                <button
                  className="p-2 text-xl cursor-pointer dark:text-black md:dark:text-white"
                  onClick={() => setTheme("light")}>
                  <BsMoonFill />
                </button>
              ) : (
                <button
                  className="p-2 text-xl cursor-pointer md:text-gray-700"
                  onClick={() => setTheme("dark")}>
                  <BsSun />
                </button>
              )}
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
