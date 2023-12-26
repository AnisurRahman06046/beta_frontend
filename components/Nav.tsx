// import React from 'react'

// const Nav = () => {
//   return (
//     <header className="p-4 dark:bg-gray-800 dark:text-gray-100">

//       <div className="flex items-center space-x-3 lg:flex">
//         <button className=" px-8 py-3 rounded">Sign in</button>
//         <button className=" px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign up</button>
//       </div>

//   </header>
//   )
// }

// export default Nav

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Nav = () => {
  return (
    <nav className="p-4 dark:bg-gray-800 dark:text-gray-100 h-screen-min">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 lg:flex-grow lg:justify-end">
          <Link className="font-semibold text-indigo-950" href="/products">Products</Link>
          <Link className="font-semibold text-indigo-950" href="/orders">Orders</Link>
          <Link href="/">
            <Button
              variant="ghost"
              className="bg-blue-500 text-indigo-900 font-bold"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/api/register">
            <Button
              variant="ghost"
              className="bg-blue-500 text-indigo-900 font-bold"
            >
              Log Out
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
