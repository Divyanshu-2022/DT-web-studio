// "use client";
// import { useState } from "react";

// export default function RestaurantFloorModal() {
//   const [open, setOpen] = useState(true); // open by default for demo
//   const [guests, setGuests] = useState(2);
//   const [selectedTables, setSelectedTables] = useState([]);

//   const tables = [
//     { id: 1, seats: 4 },
//     { id: 2, seats: 4 },
//     { id: 3, seats: 2 },
//     { id: 4, seats: 2 },
//     { id: 5, seats: 2 },
//     { id: 6, seats: 2 },
//     { id: 7, seats: 2 },
//     { id: 8, seats: 2 },
//     { id: 9, seats: 2 },
//   ];

//   const handleSelect = (tableId) => {
//     const table = tables.find(t => t.id === tableId);

//     if (table.seats === 4) {
//       setSelectedTables([tableId]);
//     } else {
//       if (guests <= 2) {
//         setSelectedTables([tableId]);
//       } else {
//         const needed = Math.ceil(guests / 2);
//         const smallTables = [3,4,5,6,7,8,9];
//         const start = smallTables.indexOf(tableId);
//         const joined = smallTables.slice(start, start + needed);
//         setSelectedTables(joined);
//       }
//     }
//   };

//   const Table = ({ id, className }) => (
//     <div
//       onClick={() => handleSelect(id)}
//       className={`absolute flex items-center justify-center font-bold cursor-pointer transition
//         ${selectedTables.includes(id) ? "bg-green-500 text-white" : "bg-yellow-300 text-black"}
//         hover:scale-105 ${className}`}
//     >
//       {id}
//     </div>
//   );

//   return (
//     <>
//       {open && (
//         <div className="fixed inset-0 bg-black/70 z-50 flex">
          
//           {/* LEFT — FLOOR PLAN */}
//           <div className="flex-1 relative bg-[#f8f8f8] border-r-4 border-black">

//             {/* CLOSE */}
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-6 left-6 bg-black text-white px-4 py-2 rounded-lg"
//             >
//               Close
//             </button>

//             {/* TOP TABLES */}
//             <Table id={1} className="w-28 h-20 top-16 left-[30%] rounded-md border-4 border-black" />
//             <Table id={2} className="w-28 h-20 top-16 right-[20%] rounded-md border-4 border-black" />

//             {/* BOTTOM ROW */}
//             <Table id={9} className="w-20 h-20 bottom-16 left-[10%] rounded-xl border-4 border-black" />
//             <Table id={8} className="w-20 h-20 bottom-16 left-[22%] rounded-xl border-4 border-black" />
//             <Table id={7} className="w-20 h-20 bottom-16 left-[34%] rounded-xl border-4 border-black" />
//             <Table id={6} className="w-20 h-20 bottom-16 left-[46%] rounded-xl border-4 border-black" />
//             <Table id={5} className="w-20 h-20 bottom-16 left-[58%] rounded-xl border-4 border-black" />
//             <Table id={4} className="w-20 h-20 bottom-16 left-[70%] rounded-xl border-4 border-black" />
//             <Table id={3} className="w-20 h-20 bottom-16 left-[82%] rounded-xl border-4 border-black" />

//             {/* Gate */}
//             <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-6 rotate-90">
//               Gate
//             </div>
//           </div>

//           {/* RIGHT — BOOKING PANEL */}
//           <div className="w-96 bg-white p-8">
//             <h2 className="text-2xl font-bold mb-6">Reservation</h2>

//             <label className="block font-semibold mb-2">Guests</label>
//             <select
//               value={guests}
//               onChange={(e) => setGuests(Number(e.target.value))}
//               className="w-full border p-3 rounded mb-6"
//             >
//               {[...Array(10)].map((_, i) => (
//                 <option key={i} value={i + 1}>
//                   {i + 1} {i === 0 ? "Person" : "People"}
//                 </option>
//               ))}
//             </select>

//             <div className="mb-6">
//               <p className="font-semibold">Selected Tables</p>
//               <p className="text-green-600 text-lg">
//                 {selectedTables.length ? selectedTables.join(", ") : "None"}
//               </p>
//             </div>

//             {selectedTables.length > 0 && (
//               <a
//                 href={`mailto:food@bombaygrill.pl?subject=Reservation&body=Reserve table(s): ${selectedTables.join(", ")} for ${guests} guests.`}
//                 className="block bg-red-600 text-white text-center py-3 rounded-lg font-semibold"
//               >
//                 Confirm Reservation
//               </a>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
