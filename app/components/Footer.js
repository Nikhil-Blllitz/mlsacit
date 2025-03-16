"use client"
import React from 'react'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-transparent text-white w-full p-8 rounded-md opacity-85 bg-red-600'>
      <h3 className='text-slate-500 text-xl font-bold'>Microsoft Learn Student Ambassador</h3>
      <div className='w-full h-[2px] bg-slate-400 '></div>
        <div className="container grid grid-cols-2 ">
            <div className="name text-left text-lg text-semibold">
                {/* <img src="/msc_logo.png" alt="" width={50} height={50}/> */}
                
                <h4 className='text-slate-500'>Cambridge Institute of Technology</h4>
            </div>
            <div className="parts text-right text-lg grid grid-rows-3 text-semibold">
                <Link href="/events" className="text-slate-500 hover:text-white">Events</Link>
                <Link href="/"
                className="text-slate-500 hover:text-white">Team</Link>
                {/* <Link href="/projects" className="text-slate-500 hover:text-white">Projects</Link> */}
            </div>
        </div>
        <div>
            <h3 className='text-slate-500'>Social Links</h3>
            <div className="flex gap-8">
            <div className="mt-6 text-slate-500 hover:text-white">
              <a
                href="https://www.linkedin.com/company/microsoft-student-club-citech/"
                
                rel="noopener noreferrer"
                className=" text-2xl "
              >
                <FaLinkedin size={30}/>
              </a>
            </div>
            <div className="mt-6 mb-6 text-slate-500 hover:text-white">
              <a
                href="https://www.instagram.com/msclub_cit?igsh=ajhqcWJoN3VnNGRw"
                
                rel="noopener noreferrer"
                className=" text-2xl "
              >
                <FaInstagram size={30}/>
              </a>
            </div>
            </div>
        </div>
        <div className='w-full h-[2px] bg-slate-400 '></div>
      <p className='text-center p-2'>Copyright &copy; MLSA, Cambridge Institute of Technology.</p>
    </div>
  )
}

export default Footer

// "use client";
// import React from "react";
// import Link from "next/link";
// import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   return (
//     <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Left Section: Logo and Inspiring Text */}
//           <div className="text-center md:text-left">
//             <img
//               src="/msc-logo.png"
//               alt="MSC Logo"
//               className="w-32 mx-auto md:mx-0 mb-4"
//             />
//             <p className="text-gray-300">
//               WE ENCOURAGE YOUNG MINDS TO
//               <br />
//               PURSUE KNOWLEDGE AND EXCELLENCE
//               <br />
//               IN UNIQUE WAYS
//             </p>
//           </div>

//           {/* Center Section: Social Icons */}
//           <div className="flex justify-center items-center space-x-6">
//             <a
//               href="https://github.com/your-repo"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-gray-300 transition duration-300 hover:scale-110"
//             >
//               <FaGithub size={30} />
//             </a>
//             <a
//               href="https://www.linkedin.com/company/microsoft-student-club-citech/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-gray-300 transition duration-300 hover:scale-110"
//             >
//               <FaLinkedin size={30} />
//             </a>
//             <a
//               href="https://www.instagram.com/msclub_cit?igsh=ajhqcWJoN3VnNGRw"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-gray-300 transition duration-300 hover:scale-110"
//             >
//               <FaInstagram size={30} />
//             </a>
//           </div>

//           {/* Right Section: Navigation Links */}
//           <div className="text-center md:text-right">
//             <Link
//               href="/events"
//               className="block mb-2 text-white hover:text-gray-300"
//             >
//               Events
//             </Link>
//             <Link href="/team" className="block text-white hover:text-gray-300">
//               Team
//             </Link>
//           </div>
//         </div>

//         {/* Bottom Section: Address and Additional Details */}
//         <div className="mt-8 text-center text-gray-400">
//           <p>Visit us at Cambridge Institute of Technology, KR Puram, Bengaluru</p>
//           <p>2024 MLSA KIIT | DESIGNED BY MLSA CIT TEAM</p>
//           <p className="mt-4">
//             Copyright © {currentYear} MLSA, Cambridge Institute of Technology.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;