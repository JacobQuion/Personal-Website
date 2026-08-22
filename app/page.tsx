import Contact from "@/components/Contact";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="portfolio" className="scroll-mt-14">
        <Container size="wide" className="py-16 sm:py-20">
          <h2 className="mb-6 text-xs uppercase tracking-[0.18em] text-faint">
            Portfolio
          </h2>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <Contact />
    </>
  );
}
