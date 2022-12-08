import { useState } from "react"

export default function MobileNav() {
    const [viewNav, setViewNav] = useState(false);

    return (
      <>
        <span className="flex justify-end">
          {viewNav ? (
            <svg
              onClick={(prev) => setViewNav(false)}
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon h-10 w-10"
              viewBox="0 0 512 512"
            >
              <title>Close</title>
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M368 368L144 144M368 144L144 368"
              />
            </svg>
          ) : (
            <svg
              onClick={(prev) => setViewNav(true)}
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon h-10 w-10 "
              viewBox="0 0 512 512"
            >
              <title>Menu</title>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="32"
                d="M80 160h352M80 256h352M80 352h352"
              ></path>
            </svg>
          )}
        </span>

        {viewNav && (
          <div className="absolute border-b-1 bg-gray-100 py-4 px-6 left-0 right-0 top-16 flex flex-col space-y-2">
            <a href="#features" className="font-medium">
              Features
            </a>
            <a href="#pricing" className="font-medium">
              Pricing
            </a>
            <div className="py-4 flex justify-center">
              <a
                href="https://app.notioncommerce.com"
                className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md shadow"
              >
                Dashboard
              </a>
            </div>
          </div>
        )}
      </>
    );
}
