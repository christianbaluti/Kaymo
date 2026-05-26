import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight, Construction, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import SmartImage from "@/components/SmartImage";
import { projects, type ProjectCategory } from "@/data/projects";
import projectsHeader from "@/assets/headers/projects-header.jpg";

type ProjectFilter = "all" | ProjectCategory;

const projectCategoryMeta: Record<ProjectCategory, {
  label: string;
  shortLabel: string;
  icon: typeof Construction;
  className: string;
}> = {
  road: {
    label: "Road Construction",
    shortLabel: "Road",
    icon: Construction,
    className: "bg-primary text-primary-foreground",
  },
  water: {
    label: "Water & Sewer",
    shortLabel: "Water",
    icon: Droplets,
    className: "bg-blue-600 text-white",
  },
  "waste-water-treatment": {
    label: "Waste Water Treatment",
    shortLabel: "Waste Water",
    icon: Droplets,
    className: "bg-cyan-700 text-white",
  },
};

const ProjectsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState<ProjectFilter>("all");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category === "road" || category === "water" || category === "waste-water-treatment") {
      setFilter(category);
    } else {
      setFilter("all");
    }
  }, [searchParams]);

  const handleFilterChange = (newFilter: ProjectFilter) => {
    setFilter(newFilter);
    if (newFilter === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", newFilter);
    }
    setSearchParams(searchParams);
  };

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter((project) => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main>
      <PageHero
        title="Our Projects"
        subtitle="Explore our portfolio of completed road construction, water infrastructure, and wastewater treatment works projects."
        backgroundImage={projectsHeader}
      />

      <section className="section-padding">
        <div className="container-wide">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => handleFilterChange("all")}
            >
              All Projects
            </Button>
            <Button
              variant={filter === "road" ? "default" : "outline"}
              onClick={() => handleFilterChange("road")}
              className="flex items-center gap-2"
            >
              <Construction className="h-4 w-4" />
              Road Construction
            </Button>
            <Button
              variant={filter === "water" ? "default" : "outline"}
              onClick={() => handleFilterChange("water")}
              className="flex items-center gap-2"
            >
              <Droplets className="h-4 w-4" />
              Water & Sewer
            </Button>
            <Button
              variant={filter === "waste-water-treatment" ? "default" : "outline"}
              onClick={() => handleFilterChange("waste-water-treatment")}
              className="flex items-center gap-2"
            >
              <Droplets className="h-4 w-4" />
              Waste Water Treatment
            </Button>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={filter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              (() => {
                const meta = projectCategoryMeta[project.category];
                const CategoryIcon = meta.icon;

                return (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-card transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <SmartImage
                        src={project.images[0]}
                        alt={project.title}
                        containerClassName="w-full h-full"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${meta.className}`}>
                          <CategoryIcon className="h-3 w-3" />
                          {meta.shortLabel}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-bold text-white line-clamp-2">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {project.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary">
                          {project.value ?? `Completion ${project.estimatedCompletion}`}
                        </span>
                        <Button variant="ghost" size="sm" asChild className="group/btn">
                          <Link to={`/projects/${project.id}`}>
                            View Details
                            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })()
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
