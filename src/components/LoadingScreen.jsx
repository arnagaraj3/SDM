import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 text-white z-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5, ease: "easeInOut" }} 
        className="text-center"
      >
        <h1 className="text-3xl font-bold">Loading...</h1>
        <div className="mt-4 animate-spin w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full"></div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
