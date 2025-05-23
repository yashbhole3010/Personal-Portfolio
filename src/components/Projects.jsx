const Projects = () => {
  const projects = [
    {
      name: "Stopwatch",
      description: "A simple stopwatch app built with HTML, CSS, and Java.",
      tech: ["HTML", "CSS", "Java"],
    },
  ];

  return (
    <section id="projects" className="p-10 text-center">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-lg text-left shadow-lg">
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="mb-2">{project.description}</p>
            <p className="text-sm text-gray-400">Tech Used: {project.tech.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;