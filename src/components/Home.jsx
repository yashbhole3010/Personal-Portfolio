import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center flex-col text-center pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Yash Bhole</h1>
      <p className="text-xl">Frontend Developer | Java Enthusiast</p>
    </motion.section>
  );
};

export default Home;