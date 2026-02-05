// 'use client';

// import React from "react";
// import FloatingActions from "@/components/FloatingActions";
// import Projects from "@/components/Projects";

// export default function Portfolio() {
//   return (
//     <main className="bg-white text-gray-800">
//       <Nav />
//       <Hero />
//       <TrustBar />
//       <Services />
//       <Projects />
//       <About />
//       <Pricing />
//       <Testimonials />
//       <Contact />
//       <FloatingActions />
//       <Footer />
//     </main>
//   );
// }

// /* ---------------- LOGO ---------------- */
// function Logo() {
//   return (
//     <div className="flex items-center gap-3">
//       <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
//         DT
//       </div>
//       <div>
//         <div className="font-semibold text-lg">DT Web Studio</div>
//         <div className="text-xs text-gray-500">Web • SEO • Growth</div>
//       </div>
//     </div>
//   );
// }

// /* ---------------- NAV ---------------- */
// function Nav() {
//   return (
//     <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <Logo />
//         <div className="hidden md:flex gap-8 text-sm font-medium">
//           <a href="#services" className="hover:text-blue-600">Services</a>
//           <a href="#projects" className="hover:text-blue-600">Projects</a>
//           <a href="#pricing" className="hover:text-blue-600">Pricing</a>
//           <a
//             href="#contact"
//             className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
//           >
//             Contact
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// /* ---------------- HERO ---------------- */
// function Hero() {
//   return (
//     <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
//         <div>
//           <span className="inline-block mb-4 px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
//             Web Development & SEO in Wrocław
//           </span>

//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//             Modern Websites That <br />
//             <span className="text-blue-600">Bring Real Customers</span>
//           </h1>

//           <p className="mt-6 text-gray-600 text-lg max-w-xl">
//             I help local businesses grow online with fast, SEO-optimized websites,
//             clean design, and proven Google ranking strategies.
//           </p>

//           <div className="mt-8 flex gap-4">
//             <a
//               href="#contact"
//               className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700"
//             >
//               Free Consultation
//             </a>
//             <a
//               href="#projects"
//               className="border px-8 py-3 rounded-lg hover:bg-gray-50"
//             >
//               View Work
//             </a>
//           </div>
//         </div>

//         <div className="bg-white rounded-2xl shadow-xl p-8">
//           <h3 className="font-semibold text-lg mb-4">Why DT Web Studio?</h3>
//           <ul className="space-y-3 text-gray-600">
//             <li>⚡ Fast & SEO-ready websites</li>
//             <li>📈 Google visibility & local ranking</li>
//             <li>📱 Mobile-first design</li>
//             <li>🤝 Clear communication & support</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------------- TRUST BAR ---------------- */
// function TrustBar() {
//   return (
//     <section className="py-10 border-y bg-white">
//       <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm text-gray-600">
//         <div>⚙️ Next.js & React</div>
//         <div>🚀 SEO Optimized</div>
//         <div>📍 Wrocław Based</div>
//         <div>💼 Business Focused</div>
//       </div>
//     </section>
//   );
// }

// /* ---------------- SERVICES ---------------- */
// function Services() {
//   const services = [
//     {
//       title: "Website Development",
//       desc: "Modern, fast and responsive websites built with Next.js.",
//     },
//     {
//       title: "E-commerce Solutions",
//       desc: "Simple and scalable online stores for small businesses.",
//     },
//     {
//       title: "SEO Optimization",
//       desc: "Technical, on-page and local SEO to rank on Google.",
//     },
//     {
//       title: "Google My Business",
//       desc: "Local visibility, maps ranking and profile optimization.",
//     },
//     {
//       title: "Content & Copywriting",
//       desc: "SEO-friendly content that converts visitors into clients.",
//     },
//     {
//       title: "Maintenance & Support",
//       desc: "Monthly updates, fixes and continuous improvements.",
//     },
//   ];

//   return (
//     <section id="services" className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center">Services</h2>
//         <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
//           Everything you need to build a strong and visible online presence.
//         </p>

//         <div className="mt-14 grid md:grid-cols-3 gap-8">
//           {services.map((s) => (
//             <div
//               key={s.title}
//               className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
//             >
//               <h3 className="font-semibold text-lg">{s.title}</h3>
//               <p className="mt-3 text-gray-600">{s.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------------- PROJECTS ---------------- */
// // function Projects() {
// //   return (
// //     <section id="projects" className="py-24">
// //       <div className="max-w-7xl mx-auto px-6">
// //         <h2 className="text-3xl font-bold">Selected Projects</h2>
// //         <p className="text-gray-600 mt-4 max-w-xl">
// //           Demo projects showcasing design, performance and SEO best practices.
// //         </p>

// //         <div className="mt-12 grid md:grid-cols-3 gap-8">
// //           {["Restaurant Website", "Barber Shop", "E-commerce Store"].map(
// //             (p) => (
// //               <div
// //                 key={p}
// //                 className="border rounded-xl p-6 hover:shadow-lg transition"
// //               >
// //                 <div className="h-40 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-500">
// //                   Preview
// //                 </div>
// //                 <h3 className="font-semibold">{p}</h3>
// //                 <p className="text-sm text-gray-600 mt-2">
// //                   Modern layout, mobile-first design and SEO foundation.
// //                 </p>
// //               </div>
// //             )
// //           )}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// /* ---------------- ABOUT ---------------- */
// function About() {
//   return (
//     <section className="py-24 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
//         <div>
//           <h2 className="text-3xl font-bold">About DT Web Studio</h2>
//           <p className="mt-6 text-gray-600">
//             I’m Divyanshu, a full-stack web developer and SEO specialist based in
//             Wrocław. I help businesses turn their websites into real growth tools.
//           </p>
//           <p className="mt-4 text-gray-600">
//             My approach is simple: understand your business, build fast and
//             clean solutions, and focus on results.
//           </p>
//         </div>

//         <div className="bg-white p-8 rounded-xl shadow">
//           <ul className="space-y-3 text-gray-600">
//             <li>✔ 2+ years professional experience</li>
//             <li>✔ Business-focused mindset</li>
//             <li>✔ Clear communication</li>
//             <li>✔ Long-term support</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------------- PRICING ---------------- */
// function Pricing() {
//   return (
//     <section id="pricing" className="py-24">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold">Pricing</h2>
//         <p className="mt-4 text-gray-600">
//           Simple and transparent pricing for small businesses.
//         </p>

//         <div className="mt-14 grid md:grid-cols-3 gap-8">
//           {[
//             ["Starter", "600 zł", "One-page website"],
//             ["Business", "1200 zł", "Multi-page website"],
//             ["Premium", "2500 zł", "Advanced SEO + design"],
//           ].map(([t, p, d]) => (
//             <div
//               key={t}
//               className="border rounded-xl p-8 hover:shadow-lg transition"
//             >
//               <h3 className="font-semibold text-xl">{t}</h3>
//               <p className="text-3xl font-bold mt-4">{p}</p>
//               <p className="text-gray-600 mt-2">{d}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------------- TESTIMONIALS ---------------- */
// function Testimonials() {
//   return (
//     <section className="py-20 bg-gray-50 text-center">
//       <h2 className="text-3xl font-bold">Client Testimonials</h2>
//       <p className="mt-4 text-gray-600 max-w-xl mx-auto">
//         Real client feedback will appear here soon.  
//         Currently onboarding new clients with special care.
//       </p>
//     </section>
//   );
// }

// /* ---------------- CONTACT ---------------- */
// function Contact() {
//   return (
//     <section id="contact" className="py-24">
//       <div className="max-w-4xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center">Let’s Work Together</h2>
//         <p className="text-center text-gray-600 mt-4">
//           Tell me about your project and I’ll get back within 24 hours.
//         </p>

//         <form className="mt-12 grid gap-4">
//           <input className="border p-4 rounded-lg" placeholder="Name" />
//           <input className="border p-4 rounded-lg" placeholder="Email" />
//           <textarea
//             className="border p-4 rounded-lg"
//             placeholder="Project details"
//             rows={5}
//           />
//           <button className="bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700">
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// /* ---------------- FOOTER ---------------- */
// function Footer() {
//   return (
//     <footer className="py-8 border-t text-center text-sm text-gray-500">
//       © {new Date().getFullYear()} DT Web Studio · Wrocław, Poland
//     </footer>
//   );
// }
