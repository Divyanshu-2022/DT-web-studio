"use client";
import { useState } from "react";

export default function TableReservation() {
    const [open, setOpen] = useState(false);
    const [guests, setGuests] = useState(2);
    const [selectedTables, setSelectedTables] = useState([]);

    const twoSeatTables = [3, 4, 5, 6, 7, 8, 9];
    const fourSeatTables = [1, 2];

    const handleTableSelect = (table) => {
        // RULE: 4-seat tables only for exactly 4 guests
        if (fourSeatTables.includes(table)) {
            if (guests !== 4) return;
            setSelectedTables([table]);
            return;
        }

        // SMALL TABLE LOGIC
        const seatsPerTable = 2;
        const neededTables = Math.ceil(guests / seatsPerTable);
        const index = twoSeatTables.indexOf(table);

        let selected = [table];

        // Step 1: Try forward
        let forward = [];
        for (let i = index + 1; i < twoSeatTables.length && forward.length < neededTables - 1; i++) {
            forward.push(twoSeatTables[i]);
        }

        selected = [table, ...forward];

        // Step 2: If not enough, go backward
        if (selected.length < neededTables) {
            let remaining = neededTables - selected.length;
            let backward = [];
            for (let i = index - 1; i >= 0 && backward.length < remaining; i--) {
                backward.push(twoSeatTables[i]);
            }
            selected = [...backward.reverse(), ...selected];
        }

        setSelectedTables(selected);
    };


    return (
        <>
            {/* OPEN BUTTON */}
            <section className="py-16 bg-red-600 text-white text-center">
                <h2 className="text-3xl font-bold">Book Your Table / Zarezerwuj stolik</h2>
                <p className="mt-3 text-gray-100">We’re ready to serve you ❤️</p>
                <button
                    onClick={() => setOpen(true)}
                    className="mt-6 bg-white text-red-600 px-10 py-3 rounded-lg font-semibold"
                >
                    Book a Table
                </button>
            </section>

            {/* MODAL */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-red-900/20"></div>
                    <div className="bg-white w-full max-w-2xl rounded-xl p-6 relative">

                        {/* CLOSE BUTTON */}
                        <button
                            onClick={() => {
                                setOpen(false);
                                setSelectedTables([]);
                            }}
                            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-red-500 hover:text-white transition cursor-pointer text-xl font-bold"
                        >
                            ✕
                        </button>

                        <h3 className="text-2xl font-bold text-center mb-4">
                            Select Your Table
                        </h3>

                        {/* GUEST SELECTOR */}
                        <div className="text-center mb-6">
                            <label className="font-semibold mr-2">Number of Guests:</label>
                            <select
                                value={guests}
                                onChange={(e) => setGuests(Number(e.target.value))}
                                className="border px-3 py-2 rounded-lg"
                            >
                                {[...Array(10)].map((_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1} {i === 0 ? "Person" : "People"}
                                    </option>
                                ))}
                            </select>
                            {guests !== 4 && (
                                <p className="text-sm text-red-500 mt-2">
                                    Tables 1 & 2 require exactly 4 guests
                                </p>
                            )}
                        </div>

                        {/* TABLE SECTIONS */}
                        <div className="grid md:grid-cols-2 gap-8">

                            {/* 4 SEAT TABLES */}
                            <div className="flex flex-col">
                                <h4 className="font-bold mb-3 text-center">4-Seat Tables</h4>
                                <div className="flex gap-4 justify-center flex-col">
                                    {fourSeatTables.map((table) => (
                                        <button
                                            key={table}
                                            onClick={() => handleTableSelect(table)}
                                            disabled={guests !== 4}
                                            className={`w-20 h-20 rounded-lg border font-bold transition cursor-pointer
    ${selectedTables.includes(table)
                                                    ? "bg-green-500 text-white"
                                                    : guests !== 4
                                                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                                        : "bg-gray-100 hover:bg-gray-200"}`}
                                        >
                                            {table}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* 2 SEAT TABLES */}
                            <div>
                                <h4 className="font-bold mb-3 text-center">2-Seat Tables</h4>
                                <div className="grid grid-cols-4 gap-3">
                                    {twoSeatTables.map((table) => (
                                        <button
                                            key={table}
                                            onClick={() => handleTableSelect(table)}
                                            className={`py-3 rounded-lg border font-bold transition
                        ${selectedTables.includes(table)
                                                    ? "bg-green-500 text-white"
                                                    : "bg-gray-100 hover:bg-gray-200"}`}
                                        >
                                            {table}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CONFIRM BUTTON */}
                        {selectedTables.length > 0 && (
                            <a
                                href={`mailto:food@bombaygrill.pl?subject=Table Reservation&body=Hi, I would like to reserve table(s): ${selectedTables.join(", ")} for ${guests} guest(s).`}
                                className="block mt-6 bg-red-600 text-white text-center py-3 rounded-lg font-semibold"
                            >
                                Confirm Reservation
                            </a>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
