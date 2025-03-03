import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Signup = () => {
  return (
    <div className="page-wrap">
    <div className='container mx-auto'>
        <div className="flex justify-center items-center h-[100vh]">
            <div className="flex align-middle justify-center items-center md:w-1/2 w-full px-4">
             <div className="flex flex-col align-middle w-[370px]">
                <h3 className="text-base/8 flex justify-center font-bold text-3xl">Create your account</h3>
                <h4 className="text-base/8 flex justify-center font-medium text-3xl mb-9">Fill in your details below to get started.</h4>
                <span  className='border rounded-full px-24 py-2 text-base/7 flex justify-center mb-10 hover:shadow-lg '>
                    <Link href="/Google">Sign up with Google</Link>
                </span>
                  <div className="flex justify-center mb-10 relative"> <hr className="w-2xs" /> <span className="absolute -top-3.5 bg-white px-1">or</span></div>
                <div className="">
                  <form action="#" method="POST" className="space-y-6">
            <div>
              <div className=" mt-2">
                <input
                placeholder=' Email address'
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-3xl py-3 px-5 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 hover:shadow-lg -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 hover:outline-orange-900 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                placeholder='Password'
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-3xl py-3 px-5 bg-white px-3 py-1.5 text-base text-gray-900 hover:shadow-lg outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 hover:outline-orange-900 sm:text-sm/6"
                />
              </div>
            </div>
            <div>

              <div className="mt-2 ">
                <input
                  placeholder='Confirm Password'
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-3xl py-3 px-5 bg-white px-3 py-1.5 text-base text-gray-900 hover:shadow-lg outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 hover:outline-orange-900 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-3xl py-3 px-5 mb-5 bg-orange-700 px-3 py-1.5 text-xl font-medium text-white shadow-xs hover:bg-orange-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Sign in
              </button>
            </div>
                  </form>
                </div>
                <p className='text-l font-light mb-2.5'>By continuing, you consent to the  <span className='text-orange-900'> <Link href="/Google"> privacy policy  </Link></span> <span className='text-orange-900 flex justify-center'> <Link href="/Google">terms of service.</Link></span></p>
                <p className="flex justify-center"> Already have an account? <span className="text-orange-900">Sign in</span></p>
             </div>
            </div>
            <div className="w-1/2 hidden lg:block px-4">
                <Image 
                src={"/logo-img.png"}
                alt='logo'
                height={840}
                width={640}
                className='border-1 md:w-[90%]'
                    />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Signup
