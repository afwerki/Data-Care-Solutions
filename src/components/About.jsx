import React from "react";
import dcsTeamMeeting from "../images/dcsTeamMeeting.jpg";
import aboutus from "../images/AI_healthCare.jpeg";
import Hillingdon from "../images/Hillingdon hosptial_logo.jpeg";
import british from "../images/british heart foundation.jpeg";
import brent from "../images/brent_logo.jpeg";
import brunel from "../images/brunel logo.jpeg";
import health_bridge from "../images/health_bridge_dirct_logo.jpeg";
import {
  CloudUploadIcon,
  FolderAddIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import bgimg from "../images/cyber-bg.png";
import "./Herostyle.css";
import Teams from "./Teams";
import Vision from "./dcs/Vision";
// import { Button } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

const About = () => {
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div class="relative overflow-hidden bg-primary-p-dark">
          <div class="mx-auto max-w-7xl">
            <div class="relative z-10 bg-green pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
              <div></div>

              <main class="mx-auto mt-10 max-w-1xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div class="sm:text-center lg:text-left">
                 
                  <h2 className="text-lg text-white ">How DCS works?</h2>
                  <p class="mt-3 text-base text-white sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                    DCS uses a unique methodology consisting of lean principles
                    to improve performance and therefore deliver operational
                    efficiency. We work with organisations to help define their
                    problem statement and then find ways on how we can implement
                    solutions. We often run facilitated workshops with the team
                    and implement bespoke training methods. DCS will also work
                    with your organisation to help you identify the key
                    principles of process, risk and quality management. Through
                    the use of these established methodologies, DCS is able to
                    help improve efficiency by eliminating waste without
                    impacting productivity.
                  </p>
                </div>
              </main>
            </div>
          </div>
          <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
              src={aboutus}
              alt=""
            ></img>
          </div>
        </div>
        <Vision />

        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <br />
            <br />
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Our History
            </h1>
            <p className="font-normal text-base  leading-6 text-gray-600 ">
              The directors and the management team have considerable experience
              in providing clinical and administrative services on behalf of
              Commissioners. Through their work as senior directors of Clover
              Health Ltd, a federation of 15 practices looking after 90,000
              patients, multiple successful projects have been deployed
              demonstrating excellent quality healthcare services yet being
              economical for the commissioners. One such project won a national
              award. DCS was established to spread and promote the excellent
              work that had been done at a local level. The current directors
              are also partners in their own practices and fully understand the
              pressures that are experienced in the healthcare sector. They have
              used innovative methods such as lean principles to pilot projects
              that will reduce administrative workload for GPs thereby freeing
              up clinical capacity. They have also succeeded in establishing a
              workforce to help GPs manage their workload better in primary
              care. DCS fervently believes in better coding as being the bedrock
              of any healthcare project, and they developed Smart Searches??? to
              aid primary care understand their workload better and help them to
              organize their workforce to meet the future challenges. DCS
              believes that better health outcomes can be achieved if we improve
              our data capturing methods. This will act as a key enabler to
              ensure better health outcomes are achieved as the information
              collected will translate to more appropriate mapping of clinical
              services in the area.
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img
              className="w-full h-full"
              src={dcsTeamMeeting}
              alt="A group of People"
            />
          </div>
        </div>

        <Teams />
      </div>
    </div>
  );
};

export default About;

// import React from "react";
// import Hillingdon from "../images/Hillingdon hosptial_logo.jpeg";
// import british from "../images/british heart foundation.jpeg";
// import brent from "../images/brent_logo.jpeg";
// import brunel from "../images/brunel logo.jpeg";
// import health_bridge from "../images/health_bridge_dirct_logo.jpeg";
// import dcsTeamMeeting from "../images/dcsTeamMeeting.jpg";
// import {
//   CloudUploadIcon,
//   FolderAddIcon,
//   DatabaseIcon,
//   PaperAirplaneIcon,
//   ServerIcon,
// } from "@heroicons/react/solid";
// import bgimg from "../images/cyber-bg.png";
// import './Herostyle.css'
// import Teams from "./Teams";

// const About = () => {
//   return (
//     <div>
// <div class="py-16 bg-white">
//   <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
//       <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
//         <div class="md:5/12 lg:w-5/12">
//           <img src={dcsTeamMeeting} alt="image" loading="lazy" width="" height=""></img>
//         </div>
//         <div class="md:7/12 lg:w-6/12">
//           <br />
//           <span>About Us</span>
//           <h2 class="text-2xl text-gray-900  md:text-4xl">DATA CARE SOLUTIONS</h2>
//           <p class="mt-6 text-gray-600">The directors and the management team have considerable experience
//             in providing clinical and administrative services on behalf of
//             Commissioners. Through their work as senior directors of Clover
//             Health Ltd, a federation of 15 practices looking after 90,000
//             patients, multiple successful projects have been deployed
//             demonstrating excellent quality healthcare services yet being
//             economical for the commissioners. One such project won a national
//             award. DCS was established to spread and promote the excellent work
//             that had been done at a local level. The current directors are also
//             partners in their own practices and fully understand the pressures
//             that are experienced in the healthcare sector. They have used
//             innovative methods such as lean principles to pilot projects that
//             will reduce administrative workload for GPs thereby freeing up
//             clinical capacity. </p>
//           <p class="mt-4 text-gray-600"> They have also succeeded in establishing a
//             workforce to help GPs manage their workload better in primary care.
//             DCS fervently believes in better coding as being the bedrock of any
//             healthcare project, and they developed Smart Searches??? to aid
//             primary care understand their workload better and help them to
//             organize their workforce to meet the future challenges. DCS believes
//             that better health outcomes can be achieved if we improve our data
//             capturing methods. This will act as a key enabler to ensure better
//             health outcomes are achieved as the information collected will
//             translate to more appropriate mapping of clinical services in the
//             area.</p>
//         </div>
//       </div>
//   </div>
// </div>

//       <section id="sponsors" className="py-20 sm:py-32">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <h2
//             className="mx-auto max-w-2xl text-center font-display text-4xl font-medium
//           tracking-tighter sm:text-5xl "
//           >
//             Companies
//           </h2>
//           <hr/>
//           <div
//             className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center
//           gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32"
//           >
//             <div className="flex items-center justify-center">
//               <img
//                 src={british}
//                 alt="sponcer"
//                 class="w-24 h-24 rounded-full mx-auto"
//               />
//               <div className="ml-3">
//                 <p className="text-sm font-medium text-gray-900 ">
//                   British Heart Foundation{" "}
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               <img
//                 src={Hillingdon}
//                 alt="sponcer"
//                 class="w-24 h-24 rounded-full mx-auto"
//               />
//               <div className="ml-3">
//                 <p className="text-sm font-medium text-gray-900">
//                   Hillingdon Hospital{" "}
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               <img
//                 src={brunel}
//                 alt="sponcer"
//                 class="w-24 h-24 rounded-full mx-auto"
//               />
//               <div className="ml-3">
//                 <p className="text-sm font-medium text-gray-900 ">
//                   Brunel University{" "}
//                 </p>

//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               <img
//                 src={brent}
//                 alt="sponcer"
//                 class="w-24 h-24 rounded-full mx-auto"
//               />
//               <div className="ml-3">
//                 <p className="text-sm font-medium text-gray-900">Brent </p>
//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               <img
//                 src={health_bridge}
//                 alt="sponcer"
//                 class="w-24 h-24 rounded-full mx-auto"
//               />
//               <div className="ml-3">
//                 <p className="text-sm font-medium text-gray-900">
//                   Health Bridge Direct
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Teams/>
//     </div>
//   );
// };

// export default About;
