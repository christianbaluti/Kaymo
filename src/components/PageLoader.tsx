import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative">
          <div className="w-16 h-16 border-4 border-muted rounded-full animate-spin border-t-primary" />
        </div>
        <p className="text-muted-foreground font-medium animate-pulse">Loading...</p>
      </motion.div>
    </motion.div>
  );
};

export default PageLoader;
