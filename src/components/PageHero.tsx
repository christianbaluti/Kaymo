import { motion } from "framer-motion";
import SmartImage from "@/components/SmartImage";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <SmartImage
            src={backgroundImage}
            alt={title}
            loading="eager"
            fetchPriority="high"
            containerClassName="w-full h-full"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-accent" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/85 to-accent/70" />
      </div>

      <div className="container-wide relative z-10 text-center py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="heading-xl text-accent-foreground mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-accent-foreground/80 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
