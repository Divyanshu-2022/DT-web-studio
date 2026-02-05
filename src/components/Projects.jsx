import Link from "next/link";

function Projects() {
  const projects = [
    {
      title: "Restaurant Website",
      slug: "restaurant",
      description:
        "High-performance restaurant website with local SEO and booking focus.",
    },
    {
      title: "Barber Shop",
      slug: "barber",
      description:
        "Modern barber website designed for local visibility and conversions.",
    },
    {
      title: "E-commerce Store",
      slug: "ecommerce",
      description:
        "Clean e-commerce starter with fast loading and SEO foundation.",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Selected Projects</h2>
        <p className="text-gray-600 mt-4 max-w-xl">
          Demo case studies showcasing design, performance and SEO best practices.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group border rounded-xl p-6 hover:shadow-xl transition block"
            >
              {/* Preview */}
              <div className="h-44 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-5 flex items-center justify-center text-gray-500 group-hover:scale-[1.02] transition">
                View Case Study →
              </div>

              <h3 className="font-semibold text-lg group-hover:text-blue-600 transition">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                {project.description}
              </p>

              <div className="mt-4 text-sm font-medium text-blue-600">
                View project →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;