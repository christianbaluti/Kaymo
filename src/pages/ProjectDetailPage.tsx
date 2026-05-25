import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  MapPin, Calendar, Clock, Users, DollarSign, Building2, HardHat, 
  CheckCircle, AlertTriangle, Award, ArrowLeft, ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SmartImage from "@/components/SmartImage";
import { getProjectById, projects } from "@/data/projects";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-end pt-20">
        <div className="absolute inset-0 z-0">
          <SmartImage
            src={project.images[0]}
            alt={project.title}
            loading="eager"
            fetchPriority="high"
            containerClassName="w-full h-full"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/70 to-transparent" />
        </div>

        <div className="container-wide relative z-10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-accent-foreground/80 hover:text-accent-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
            <h1 className="heading-xl text-accent-foreground mb-4">{project.title}</h1>
            <p className="text-lg text-accent-foreground/80 max-w-3xl">{project.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="heading-lg text-foreground mb-4">Project Overview</h2>
                <p className="body-lg">{project.fullDescription}</p>
              </motion.div>

              {/* Scope of Work */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="heading-lg text-foreground mb-4">Scope of Work</h2>
                <ul className="space-y-3">
                  {project.scope.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="heading-lg text-foreground mb-4">Challenges Overcome</h2>
                <ul className="space-y-3">
                  {project.challenges.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="heading-lg text-foreground mb-4">Project Outcomes</h2>
                <ul className="space-y-3">
                  {project.outcomes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Image Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="heading-lg text-foreground mb-4">Project Gallery</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.images.map((image, index) => (
                    <SmartImage
                      key={index}
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      containerClassName="w-full h-48 rounded-xl"
                      className="w-full h-full object-cover"
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-secondary rounded-2xl p-6 sticky top-24"
              >
                <h3 className="heading-md text-foreground mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Year</p>
                      <p className="font-medium text-foreground">{project.year}</p>
                    </div>
                  </div>
                  {project.client && (
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Client</p>
                        <p className="font-medium text-foreground">{project.client}</p>
                      </div>
                    </div>
                  )}
                  {project.mainContractor && (
                    <div className="flex items-start gap-3">
                      <HardHat className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Main Contractor</p>
                        <p className="font-medium text-foreground">{project.mainContractor}</p>
                      </div>
                    </div>
                  )}
                  {project.consultingEngineers && (
                    <div className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Consulting Engineers</p>
                        <p className="font-medium text-foreground">{project.consultingEngineers}</p>
                      </div>
                    </div>
                  )}
                  {project.value && (
                    <div className="flex items-start gap-3">
                      <DollarSign className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Project Value</p>
                        <p className="font-medium text-foreground">{project.value}</p>
                      </div>
                    </div>
                  )}
                  {project.duration && (
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <p className="font-medium text-foreground">{project.duration}</p>
                      </div>
                    </div>
                  )}
                  {project.estimatedCompletion && (
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Estimated Completion</p>
                        <p className="font-medium text-foreground">{project.estimatedCompletion}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Button asChild className="w-full">
                    <Link to="/contact">
                      Start a Similar Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-8 border-t border-border">
            {prevProject ? (
              <Link
                to={`/projects/${prevProject.id}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">{prevProject.title}</span>
                <span className="sm:hidden">Previous</span>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                to={`/projects/${nextProject.id}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="hidden sm:inline">{nextProject.title}</span>
                <span className="sm:hidden">Next</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetailPage;
