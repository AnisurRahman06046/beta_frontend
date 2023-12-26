
"use client"

import Link from "next/link"
import { Button } from "./ui/button"

const LoginForm = () => {
  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-blue-500 dark:text-gray-100">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm dark:text-gray-400">Sign in to access your account</p>
      </div>
      <form noValidate action="" className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
          <div>
            {/* <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">Password</label>
              <a
                href="#"
                rel="noopener noreferrer"
                className="text-xs hover:underline dark:text-gray-400"
              >
                Forgot password?
              </a>
            </div> */}
            <label htmlFor="password" className="block mb-2 text-sm">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
          <Button className="w-full px-8 py-3 font-semibold rounded-md  bg-yellow-700">Sign In</Button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-400">
            Don't have an account yet?
            {/* <a
              href="#"
              rel="noopener noreferrer"
              className="hover:underline dark:text-violet-400"
            >
              Sign up
            </a> */}
            <Link href="/api/register">Sign Up.</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm