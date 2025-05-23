const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        <h1 className="text-xl font-bold">Yash Bhole</h1>
        <div className="space-x-4">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;