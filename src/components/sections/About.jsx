export default function About() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl font-bold">About DT Web Studio</h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            I’m Divyanshu Tripathi, a full-stack developer and SEO specialist currently based in Poland,
            helping businesses build powerful online presences that actually generate growth.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            With professional experience in software engineering roles across India and Europe, 
            I combine technical precision with a strong understanding of business needs.
            My focus is not just building websites — but building digital systems that attract,
            convert, and scale. 
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            I work primarily with modern technologies like React, Next.js, Node.js, and cloud platforms,
            while also implementing SEO strategies that help companies rank and grow sustainably.
          </p>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-6">Professional Highlights</h3>
          <ul className="space-y-4 text-gray-600">
            <li>✔ Experience as Software Engineer in international companies.</li>
            <li>✔ Strong background in Full-Stack Web Development</li>
            <li>✔ Skilled in React, Next.js, Node.js & Cloud Technologies</li>
            <li>✔ Experience with databases, APIs, and performance optimization</li>
            <li>✔ Business-focused mindset with SEO & growth strategy knowledge</li>
            <li>✔ Clear communication and long-term client support</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
