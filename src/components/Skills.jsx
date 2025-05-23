const Skills = () => {
  const skills = ["HTML", "CSS", "Java"];
  return (
    <section id="skills" className="p-10 text-center bg-gray-800">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-700 px-6 py-3 rounded-lg text-white shadow-md">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;