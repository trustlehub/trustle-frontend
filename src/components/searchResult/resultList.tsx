/* eslint-disable @typescript-eslint/no-explicit-any */
// import location from "../../assets/location.svg";
// import link from "../../assets/icons/link.svg";
// import info from "../../assets/info.svg";
// import twitter from "../../assets/icons/socials/twitter.svg";
// import facebook from "../../assets/icons/socials/facebook.svg";
// import instagram from "../../assets/icons/socials/instagram.svg";
// import tiktok from "../../assets/icons/socials/tiktok.svg";
// import snap from "../../assets/snap.svg";
// import { useEffect } from "react"
import ResultItem from "./resultItem";

function ResultList({ data }: { data: any }) {
  return (
    <div className="flex flex-wrap justify-between">
      {Object.keys(data).map((key: string) => {
        const value = data[key];
        return <ResultItem key={key} info={value} platform={key} />;
      })}
    </div>
  );
}
// function ResultItem_old({ data }: { data:object }) {
//   useEffect(() => {
//     console.log("profile data", data)

//     return () => {
//     }
//   }, [])

//   return (
//     <div className="flex items-center justify-between">
//       <div className="flex gap-3">
//         <div className="rounded-full bg-[url(../src/assets/avatar/p_4.webp)] w-16 h-16 bg-center bg-cover" />
//         <div className="flex flex-col gap-2">
//           <h1 className="font-primary font-medium text-lg leading-[22px] text-black">
//             Greg Cumberbatch
//           </h1>
//           <div className="flex flex-col gap-3">
//             <div className="flex gap-4">
//               <div className="flex gap-2">
//                 <img src={info} alt="" />
//                 <h1 className="font-secondary font-medium text-sm leading-[18px] text-grey-700">
//                   62 Years old
//                 </h1>
//               </div>
//               <div className="flex gap-2">
//                 <img src={location} alt="" />
//                 <h1 className="font-secondary font-medium text-sm leading-[18px] text-grey-700">
//                   Nice, Italy
//                 </h1>
//               </div>
//             </div>
//             <div className="flex gap-2">
//               <img src={link} alt="" />
//               <h1 className="font-secondary font-medium text-sm leading-[18px] text-grey-700">
//                 19 linked accounts found
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="px-6 py-3 bg-white rounded-lg shadow-[0_0_0_1px_inset_#EAECF0] font-secondary font-semibold text-sm text-grey-700 cursor-pointer">
//         View profile
//       </div>
//     </div>
//   );
// }

export default ResultList;
