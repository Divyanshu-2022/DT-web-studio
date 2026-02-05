"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully ✅");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("Failed to send message to ❌");
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error ❌");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SIDE — INFO */}
        <div>
          <h2 className="text-3xl font-bold">Let’s Build Something Great</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Have a project in mind? Whether you need a new website, better SEO,
            or a full digital upgrade — I’m here to help turn your ideas into
            real business results.
          </p>

          <div className="mt-8 space-y-5 text-gray-700">
            <div className="flex items-start gap-4">
              <span className="text-2xl">⚡</span>
              <div>
                <h4 className="font-semibold">Fast Response</h4>
                <p className="text-sm text-gray-600">
                  You’ll hear back within 24 hours.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">🎯</span>
              <div>
                <h4 className="font-semibold">Business-Focused Solutions</h4>
                <p className="text-sm text-gray-600">
                  Every project is designed to grow your business.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">🤝</span>
              <div>
                <h4 className="font-semibold">Long-Term Support</h4>
                <p className="text-sm text-gray-600">
                  I stay available even after launch.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-blue-50 border border-blue-100 p-6 rounded-xl">
            <p className="text-sm text-blue-900">
              Prefer email? Reach me directly at  
              <br />
              <span className="font-semibold">divyanshutripathi7826@gmail.com</span>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-6">Start Your Project</h3>

          <form className="grid gap-4" onSubmit={handleSubmit}>
            <input
              required
              className="border p-4 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              type="email"
              required
              className="border p-4 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              className="border p-4 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Business / Company Name (optional)"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />

            <textarea
              required
              className="border p-4 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Tell me about your project..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            <button className="bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 shadow-md hover:shadow-blue-300 transition font-semibold">
              Send Message 🚀
            </button>
          </form>

          {status && (
            <p className="text-sm mt-4 text-center text-gray-600">{status}</p>
          )}

          <p className="text-xs text-gray-500 mt-4 text-center">
            No spam. Your information stays private.
          </p>
        </div>
      </div>
    </section>
  );
}
