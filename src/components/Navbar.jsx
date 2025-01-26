// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <div className="fixed top-0 left-0 right-0 z-50 flex justify-between p-4 bg-slate-400/50 m-3 rounded-md shadow-lg backdrop-blur-lg">
//       <h1 className="text-4xl">Navbar</h1>
//       <div>
//         <ul className="flex gap-5 ">
//           <Link className="text-2xl hover:text-slate-800 hover:shadow-lg cursor-pointer">Home</Link>
//           <Link className="text-2xl hover:text-slate-800 hover:shadow-lg cursor-pointer">Project</Link>
//           <Link href="#contact" className="text-2xl hover:text-slate-800 hover:shadow-lg cursor-pointer">
//             Contact
//           </Link>
//         </ul>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between p-4 bg-slate-400/50 m-3 rounded-md shadow-lg backdrop-blur-lg">
      <h1 className="text-4xl">Navbar</h1>
      <div>
        <ul className="flex gap-5">
          <Link href="/" className="text-2xl hover:text-slate-800 hover:shadow-lg cursor-pointer">
            Home
          </Link>
          <Link href="#project" className="text-2xl hover:text-slate-800 hover:shadow-lg cursor-pointer">
            Project
          </Link>
          <Link href="#contact" className="text-2xl hover:text-slate-800 hover:shadow-lg cursor-pointer">
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
}
