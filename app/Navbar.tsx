import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
Link;

const Navbar = () => {

  const links = [
    {
      label: "English",
      href: "/",
      icon: <GlobeAltIcon className="h-4 w-4 inline-flex" />,
    },
    { label: "Become a Seller", href: "/" },
  ];

  const smallScreens = ``

  return (
    <header className="border-b h-16">
      <nav className="flex items-center h-16 justify-between container mx-auto md:max-w-7xl">
        <Link href="/">
          {" "}
          <svg
            width="89"
            height="27"
            viewBox="0 0 89 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#404145">
              <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
            </g>
            <g fill="#1dbf73">
              <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
            </g>
          </svg>
        </Link>
        <ul className="flex items-center gap-5">
          {/* dropdown 1 */}
          <li className="hs-dropdown hs-dropdown-1 relative hidden md:inline-flex">
            <button
              id="hs-dropdown-1"
              type="button"
              className="hs-dropdown-toggle py-2 px-2 inline-flex items-center gap-x-2 text-base font-bold rounded-lg hover:bg-gray-100 bg-white text-gray-800 disabled:opacity-50 disabled:pointer-events-none "
            >
              Fiverr Pro
              <svg
                className="hs-dropdown-open:rotate-180 size-4 text-gray-600 dark:text-neutral-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>

            <div
              className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-60 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
              aria-labelledby="hs-dropdown-1"
            >
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                Newsletter
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                Purchases
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                Downloads
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                Team Account
              </a>
            </div>
          </li>

          {/* dropdown 2 */}
          <li className="hs-dropdown hs-dropdown-2 relative hidden md:inline-flex">
            <button
              id="hs-dropdown-2"
              type="button"
              className="hs-dropdown-toggle py-2 px-2 inline-flex items-center gap-x-2 text-base font-bold rounded-lg hover:bg-gray-100 bg-white text-gray-800 disabled:opacity-50 disabled:pointer-events-none "
            >
              Explore
              <svg
                className="hs-dropdown-open:rotate-180 size-4 text-gray-600 dark:text-neutral-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>

            <div
              className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-60 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
              aria-labelledby="hs-dropdown-2"
            >
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                Newsletter
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                Purchases
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                Downloads
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                Team Account
              </a>
            </div>
          </li>

          {links.map((link) => (
            <li key={link.href} className="hidden md:block">
              <Link
                className="text-gray-500 flex gap-2 items-center hover:text-green-500 font-semibold"
                href={link.href}
              >
                {link?.icon} {link.label}
              </Link>
            </li>
          ))}
          <li className="">
            <Link
              className="text-gray-500 flex gap-2 items-center hover:text-green-500 font-semibold"
              href="/"
            >
              Sign In
            </Link>
          </li>
          <li className="">
            <Link
              href="/"
              className="text-green-500 flex gap-2 items-center font-medium text-base hover:text-white hover:bg-green-500 border border-green-500 px-3 py-1 rounded-sm"
            >
              Join
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
