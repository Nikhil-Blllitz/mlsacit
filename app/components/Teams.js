// "use client";
// import React, { useRef, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Image from "next/image";
// import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
// import { useRouter } from "next/navigation";

// const Teams = () => {
//   const containerRef = useRef(null);
//   const router = useRouter();

//   useEffect(() => {
//     AOS.init({
//       offset: 200,
//       duration: 300,
//       easing: "ease-out",
//       once: true,
//       mirror: false,
//     });
//   }, []);

//   // Scroll dynamically based on container width
//   const scrollDistance = 0.5 * (containerRef.current?.offsetWidth || 210);

//   const scrollLeft = () => {
//     if (containerRef.current) containerRef.current.scrollLeft -= scrollDistance;
//   };

//   const scrollRight = () => {
//     if (containerRef.current) containerRef.current.scrollLeft += scrollDistance;
//   };

//   return (
//     <div className="relative w-full flex flex-col items-center justify-center h-auto py-0 gap-4">
//       {/* Heading */}
//       <div className="w-full text-center">
//         <h1 className="text-3xl font-[CB] sm:text-3xl lg:text-4xl font-bold mb-4" data-aos="zoom-in">
//           Meet Our <span className="text-blue-500">Team</span>
//         </h1>
//       </div>

//       {/* Scroll Container Wrapper */}
//       <div className="relative w-full">
//         {/* Left Scroll Button */}
//         <button
//           onClick={scrollLeft}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-600 rounded-full shadow-lg hover:bg-gray-400 transition-all duration-300 text-black"
//           data-aos="slide-right"
//         >
//           <IoIosArrowRoundBack size={30} />
//         </button>

//         {/* Team Members Scroll Container */}
//         <div
//           ref={containerRef}
//           className="space-x-4 w-full flex scroll-smooth px-12 py-4 whitespace-nowrap overflow-x-auto no-scrollbar"
//         >
//           {teamData.map((member, index) => (
//             <div
//               key={index}
//               onClick={() => router.push(`/teams/${member.path}`)}
//               className="flip-card group relative flex-shrink-0 w-[200px] h-[200px] cursor-pointer rounded-full border-2 border-white"
//               data-aos="zoom-out"
//               style={{ perspective: "1000px" }}
//             >
//               <div className="flip-card-inner absolute w-full h-full transition-transform duration-500">
//                 {/* Front Face */}
//                 <div className="flip-card-front absolute w-full h-full flex items-center justify-center rounded-full">
//                   <Image
//                     src={member.image}
//                     alt={member.name}
//                     width={90}
//                     height={90}
//                     className="object-cover"
//                   />
//                 </div>
//                 {/* Back Face */}
//                 <div className="flip-card-back absolute w-full h-full flex flex-col items-center justify-center rounded-full bg-gray-800">
//                   <h3 className="text-white text-xl font-bold">{member.name}</h3>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right Scroll Button */}
//         <button
//           onClick={scrollRight}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-600 rounded-full shadow-lg hover:bg-gray-400 transition-all duration-300 text-black"
//           data-aos="slide-left"
//         >
//           <IoIosArrowRoundForward size={30} />
//         </button>
//       </div>

//       <style jsx>{`
//         .flip-card-inner {
//           transform-style: preserve-3d;
//         }
//         .flip-card-front,
//         .flip-card-back {
//           backface-visibility: hidden;
//         }
//         .flip-card-back {
//           transform: rotateY(180deg);
//         }
//         /* Flip on hover only */
//         .flip-card:hover .flip-card-inner {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </div>
//   );
// };

// const teamData = [
//   { name: "Advisor", path: "advisor", image: "/images/teams/advisor.png" },
//   { name: "President", path: "president", image: "/images/teams/president.png" },
//   { name: "Vice President", path: "vp", image: "/images/teams/vice-president.png" },
//   { name: "Social Media", path: "socmed", image: "/images/teams/social-media.png" },
//   { name: "Technical", path: "technical", image: "/images/teams/technical.png" },
//   { name: "Design", path: "designers", image: "/images/teams/designers.png" },
//   { name: "Marketing", path: "marketing", image: "/images/teams/marketing.png" },
//   { name: "Curation", path: "curation", image: "/images/teams/curation.png" },
//   { name: "Treasurer", path: "treasure", image: "/images/teams/treasure.png" },
// ];

// export default Teams;


"use client";
import React, { useRef, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useRouter } from "next/navigation";

const Teams = () => {
  const containerRef = useRef(null);
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Initialize AOS after component is mounted
    AOS.init({
      offset: 200,
      duration: 300,
      easing: "ease-out",
      once: true,
      mirror: false,
      disable: 'mobile' // Disable on mobile for better performance
    });
    
    // Mark component as loaded
    setIsLoaded(true);
    
    // Cleanup function
    return () => {
      AOS.refresh();
    };
  }, []);
  
  // Calculate scroll distance only when needed
  const scrollLeft = () => {
    if (containerRef.current) {
      const scrollDistance = 0.5 * containerRef.current.offsetWidth;
      containerRef.current.scrollLeft -= scrollDistance;
    }
  };
  
  const scrollRight = () => {
    if (containerRef.current) {
      const scrollDistance = 0.5 * containerRef.current.offsetWidth;
      containerRef.current.scrollLeft += scrollDistance;
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center h-auto py-0 gap-4">
      {/* Heading */}
      <div className="w-full text-center">
        <h1 className="text-3xl font-[CB] sm:text-3xl lg:text-4xl font-bold mb-4" data-aos="zoom-in">
          Meet Our <span className="text-blue-500">Team</span>
        </h1>
      </div>
      
      {/* Scroll Container Wrapper - Only show when loaded */}
      <div className={`relative w-full transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-600 rounded-full shadow-lg hover:bg-gray-400 transition-all duration-300 text-black"
          data-aos="slide-right"
          data-aos-delay="100"
        >
          <IoIosArrowRoundBack size={30} />
        </button>
        
        {/* Team Members Scroll Container */}
        <div
          ref={containerRef}
          className="space-x-4 w-full flex scroll-smooth px-12 py-4 whitespace-nowrap overflow-x-auto no-scrollbar"
        >
          {teamData.map((member, index) => (
            <div
              key={index}
              onClick={() => router.push(`/teams/${member.path}`)}
              className="flip-card group relative flex-shrink-0 w-[200px] h-[200px] cursor-pointer rounded-full border-2 border-white"
              data-aos="zoom-out"
              data-aos-delay={100 + index * 50}
              style={{ perspective: "1000px" }}
            >
              <div className="flip-card-inner absolute w-full h-full transition-transform duration-500">
                {/* Front Face */}
                <div className="flip-card-front absolute w-full h-full flex items-center justify-center rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={90}
                    height={90}
                    className="object-cover"
                    priority={index < 3} // Prioritize loading the first 3 images
                  />
                </div>
                {/* Back Face */}
                <div className="flip-card-back absolute w-full h-full flex flex-col items-center justify-center rounded-full bg-gray-800">
                  <h3 className="text-white text-xl font-bold">{member.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-600 rounded-full shadow-lg hover:bg-gray-400 transition-all duration-300 text-black"
          data-aos="slide-left"
          data-aos-delay="100"
        >
          <IoIosArrowRoundForward size={30} />
        </button>
      </div>
      
      <style jsx>{`
        .flip-card-inner {
          transform-style: preserve-3d;
        }
        .flip-card-front,
        .flip-card-back {
          backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
        /* Flip on hover only */
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        /* Improve performance with hardware acceleration */
        .flip-card, .flip-card-inner, .flip-card-front, .flip-card-back {
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

const teamData = [
  { name: "Advisor", path: "advisor", image: "/images/teams/advisor.png" },
  { name: "President", path: "president", image: "/images/teams/president.png" },
  { name: "Vice President", path: "vp", image: "/images/teams/vice-president.png" },
  { name: "Social Media", path: "socmed", image: "/images/teams/social-media.png" },
  { name: "Technical", path: "technical", image: "/images/teams/technical.png" },
  { name: "Design", path: "designers", image: "/images/teams/designers.png" },
  { name: "Marketing", path: "marketing", image: "/images/teams/marketing.png" },
  { name: "Curation", path: "curation", image: "/images/teams/curation.png" },
  { name: "Treasurer", path: "treasure", image: "/images/teams/treasure.png" },
];

export default Teams;