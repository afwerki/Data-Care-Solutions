import React from "react";
import BarChart from "./BarChart ";
import LineChart from "./LineChart";
import PieChart from "./PieChart ";

const Training = () => {
  return (
    <div className=" rounded-sm">
      <div
        name="Service_detail"
        className="w-full h-screen bg-zinc-200 flex flex-col justify-between font-sans-serif"
      >
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto font-sans-serif">
          <div className="">
            {/* <p className='text-2xl'>Unique sequencing & production</p> */}
            <h1 className="py-3 text-5xl md:text-4xl text-primary-lightgreen">
              Products
            </h1>
            <p>
              Our healthcare system is one of the most essential functions in
              modern society. The multifarious hurdles that it currently faces
              such as a growing and ageing population along with insufficient
              funding has made delivering high quality healthcare challenging.
              What if we could all work together to achieve our dream of
              providing the best for our patients? Data Care Solutions (DCS) has
              a vision to improve patients’ wellbeing by assisting organisations
              to deliver high quality healthcare. We have extensive experience
              working with providers and commissioners whilst ensuring we are
              fully compliant with all regulatory frameworks. DCS has great
              insight into the multiple areas within healthcare and can help
              navigate organisations through their challenges. DCS uses a wide
              range of tools but more importantly help to embed change in
              behaviour amongst the team members. DCS has run a number of
              successful workshops with leaders and staff members and helped
              them reach a consensus whereby their purpose has a shared vision
              and goals.
            </p>
          </div>
          <div className="">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRhdGElMjBzY2llbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="/"
            />
          </div>
        </div>
      </div>
      <img
        class="w-24 h-24  mx-auto"
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRhdGElMjBzY2llbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        width="384"
        height="512"
      />
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text-sky-400 font-sans-serif">
            Our Smart Searches™ improve clinical care – case study
          </div>
          <div class="text-slate-700 dark:text-slate-500 font-sans-serif">
            Background
          </div>
        </figcaption>
        <blockquote>
          <p class="text-md font-light font-sans-serif">
            Background A group of five practices with a combined list size of
            over 26,000 patients were keen to work more collaboratively with the
            prospect of a potential merger in the not so distant future.
            However, they struggled on how to do this and where they should
            start first. Time was spent with the leaders of the practices and
            learning their requirements and very soon a pattern emerged that
            they were all facing common issues which was largely related to
            variation in administrative and clinical practice, inadequate
            workforce and difficulty to recruit.
          </p>
          <p>Key themes identified while brainstorming with the GPs</p>
          <p>
            • Empower patients and staff • Manage workload better • Reduce
            variation in healthcare • Make change resilient • Align best
            practice
          </p>
          <p>Implement solution</p>
          <p>
            We identified their current workforce issues and agreed that they
            may want to focus on what works best in one practice may not work
            well in another. After a period of due diligence, we identified
            common themes that could be applied across the five practices but
            still allow some variability to take place within the practice. We
            concentrated our efforts on creating their vehicle by which they
            could mobilise their vision and then started to work with aligning
            back room functions first. We helped the group appoint an
            operational director with some mid-level managers to help with key
            administrative functionalities. We designed and deployed bespoke
            products to help manage their clinical workload and developed a
            project plan to when they could look to merge contracts.
          </p>
          <p>Findings</p>
          <p>
            The group of practices are revered in their locality as they are
            seen as quite forward thinking by their CCG and nearby practices.
            They attracted some funding to help them establish themselves but
            more importantly they were eager to make change happen at a faster
            pace and so contributed additional funds from their personal
            accounts. We set up key milestones and internal KPIs to ensure the
            group’s objectives were on target. Creating the vehicle, including
            the paperwork for CQC, were our first priority which then followed
            with the appointment of personnel. The GPs were very much keen to
            manage their workload better and so we helped the practices with the
            training of Clinical Administrators through our File Away programme.
            We helped develop tools to help them hold virtual diabetes clinics
            and then provided bespoke training and education for them as well to
            ensure that the pharmacists were up-to-date. After the change had
            taken place, the practices showed an increase in income from the DES
            and LES components compared to the previous years.
          </p>
        </blockquote>
      </div>

      <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
        <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
          <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
            <h1 class="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
              Beach House in Collingwood
            </h1>
            <p class="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">
              Entire house
            </p>
          </div>
          <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRhdGElMjBzY2llbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              class="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
              loading="lazy"
            ></img>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRhdGElMjBzY2llbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              class="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
              loading="lazy"
            ></img>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRhdGElMjBzY2llbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              class="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
              loading="lazy"
            ></img>
          </div>
          <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
            <dt class="sr-only">Reviews</dt>
            <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
              <svg
                width="24"
                height="24"
                fill="none"
                aria-hidden="true"
                class="mr-1 stroke-current dark:stroke-indigo-500"
              >
                <path
                  d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>
                4.89 <span class="text-slate-400 font-normal">(128)</span>
              </span>
            </dd>
            <dt class="sr-only">Location</dt>
            <dd class="flex items-center">
              <svg
                width="2"
                height="2"
                aria-hidden="true"
                fill="currentColor"
                class="mx-3 text-slate-300"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-1 text-slate-400 dark:text-slate-500"
                aria-hidden="true"
              >
                <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
              </svg>
              Collingwood, Ontario
            </dd>
          </dl>
          {/* <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
      <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Check availability</button>
    </div> */}
          <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
            This sunny and spacious room is for those traveling light and
            looking for a comfy and cosy place to lay their head for a night or
            two. This beach house sits in a vibrant neighborhood littered with
            cafes, pubs, restaurants and supermarkets and is close to all the
            major attractions such as Edinburgh Castle and Arthur's Seat.
          </p>
        </div>
      </main>
      {/* <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12 h-3 w-3 flex-1 ml-2">
          <BarChart />
        </div>
        <PieChart />

        <div></div>
      </div> */}
    </div>
  );
};

export default Training;
