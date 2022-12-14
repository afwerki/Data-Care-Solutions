import { Fragment } from "react";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div>
      <div class="relative overflow-hidden bg-white">
        <div class="mx-auto max-w-7xl">
          <div class="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
           

            <main class="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span class="block xl:inline">CLEAN DATA</span>
                  <span class="block text-indigo-600 xl:inline">
                    SAFE PATIENT
                  </span>
                </h1>
                <p class="mt-3 text-base text-black sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Helping you improve performance and deliver operational
                  efficiency by using lean processes Primary and secondary
                  healthcare consultancy and tools
                </p>
                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="Smart_Tools_detail"
                      class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                    >
                      Read more about our products
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
}
