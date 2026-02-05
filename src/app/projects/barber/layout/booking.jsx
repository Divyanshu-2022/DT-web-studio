import React from 'react'

function booking() {
    return (
        <div>
            <section id="booking" className="py-24 bg-white text-center">
                <h2 className="text-4xl font-bold">Book Your Visit</h2>
                <p className="mt-4 text-gray-600">Reserve your seat and enjoy premium grooming.</p>

                <form className="mt-10 max-w-xl mx-auto grid gap-4">
                    <input className="border p-4 rounded-lg" placeholder="Your Name" />
                    <input className="border p-4 rounded-lg" placeholder="Phone Number" />
                    <input type="date" className="border p-4 rounded-lg" />
                    <button className="bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition">
                        Book Appointment
                    </button>
                </form>
            </section>

        </div>
    )
}

export default booking