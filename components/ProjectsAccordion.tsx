"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";

import type { ProjectEntry } from "@/data/types";

type ProjectsAccordionProps = {
  projects: ProjectEntry[];
};

function getProjectSortYear(year?: string) {
  if (!year) {
    return Number.NEGATIVE_INFINITY;
  }

  const matches = year.match(/\d{4}/g);

  if (!matches) {
    return Number.NEGATIVE_INFINITY;
  }

  return Math.max(...matches.map((value) => Number(value)));
}

export function ProjectsAccordion({ projects }: ProjectsAccordionProps) {
  const reducedMotion = useReducedMotion();
  const sortedProjects = useMemo(
    () =>
      projects
        .map((project, index) => ({
          project,
          index,
          sortYear: getProjectSortYear(project.year)
        }))
        .sort((left, right) => {
          if (right.sortYear !== left.sortYear) {
            return right.sortYear - left.sortYear;
          }

          return left.index - right.index;
        })
        .map(({ project }) => project),
    [projects]
  );
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  function toggleProject(id: string) {
    setOpenProjectId((current) => (current === id ? null : id));
  }

  return (
    <div className="overflow-hidden border-y border-border/40 bg-transparent">
      <div className="hidden grid-cols-[minmax(0,1.8fr)_6rem_minmax(0,0.7fr)_5rem_2rem] gap-4 border-b border-border/45 px-6 py-3 md:grid md:px-7">
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
          Project
        </span>
        <span className="text-left font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
          Year
        </span>
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
          Tag
        </span>
        <span className="text-left font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
          Links
        </span>
        <span aria-hidden="true" />
      </div>

      {sortedProjects.map((project, index) => {
        const isOpen = openProjectId === project.id;

        return (
          <article
            key={project.id}
            className={index === 0 ? "" : "border-t border-border/45"}
          >
            <div
              className={`grid gap-3 px-5 py-3 transition-colors duration-300 md:grid-cols-[minmax(0,1.8fr)_6rem_minmax(0,0.7fr)_5rem_2rem] md:gap-4 md:items-center md:px-7 ${
                isOpen ? "bg-surfaceAlt/8" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => toggleProject(project.id)}
                aria-expanded={isOpen}
                aria-controls={`project-panel-${project.id}`}
                className="grid gap-3 text-left md:col-span-3 md:grid-cols-[minmax(0,1.8fr)_6rem_minmax(0,0.7fr)] md:gap-4 md:items-center"
              >
                <div className="min-w-0">
                  <div className="flex items-start justify-between gap-3 md:block">
                    <h3 className="font-sans text-base font-medium tracking-[-0.01em] text-text md:text-[1.02rem]">
                      {project.title}
                    </h3>
                    {project.year ? (
                      <span className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-muted md:hidden">
                        {project.year}
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="hidden text-left font-mono text-[0.72rem] uppercase tracking-[0.2em] text-muted md:block">
                  {project.year ?? ""}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-border/35 bg-surfaceAlt/80 px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </button>

              <div className="flex items-center justify-between gap-2 md:contents">
                <div className="flex items-center gap-2 md:col-start-4 md:w-[5rem] md:justify-start">
                  {project.githubUrl ? (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} on GitHub`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-surfaceAlt/38 text-muted hover:bg-surfaceAlt/52 hover:text-accent"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 fill-current"
                      >
                        <path d="M12 1.75a10.25 10.25 0 0 0-3.24 19.98c.52.1.7-.22.7-.5v-1.82c-2.86.62-3.46-1.21-3.46-1.21-.47-1.17-1.15-1.48-1.15-1.48-.94-.64.07-.63.07-.63 1.04.07 1.59 1.07 1.59 1.07.92 1.58 2.42 1.12 3.01.85.09-.67.36-1.12.65-1.38-2.28-.26-4.68-1.14-4.68-5.1 0-1.13.4-2.06 1.07-2.79-.11-.26-.47-1.31.1-2.72 0 0 .87-.28 2.86 1.06A9.86 9.86 0 0 1 12 6.84c.85 0 1.71.11 2.5.34 1.99-1.34 2.86-1.06 2.86-1.06.57 1.41.21 2.46.1 2.72.67.73 1.07 1.66 1.07 2.79 0 3.97-2.4 4.83-4.69 5.08.37.32.7.94.7 1.9v2.82c0 .28.19.61.71.5A10.25 10.25 0 0 0 12 1.75Z" />
                      </svg>
                    </Link>
                  ) : null}
                  {project.caseStudySlug ? (
                    <Link
                      href={`/case-studies/${project.caseStudySlug}`}
                      aria-label={`Open ${project.title} case study`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-surfaceAlt/38 text-muted hover:bg-surfaceAlt/52 hover:text-accent"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>

                <button
                  type="button"
                  onClick={() => toggleProject(project.id)}
                  aria-expanded={isOpen}
                  aria-controls={`project-panel-${project.id}`}
                  aria-label={`${isOpen ? "Collapse" : "Expand"} ${project.title}`}
                  className={`inline-flex h-8 w-8 items-center justify-center transition-colors duration-300 md:col-start-5 md:justify-self-start ${
                    isOpen ? "text-accent" : "text-muted hover:text-accent"
                  }`}
                >
                  <motion.span
                    animate={reducedMotion ? undefined : { rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-flex"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key={`${project.id}-panel`}
                  id={`project-panel-${project.id}`}
                  initial={
                    reducedMotion ? false : { height: 0, opacity: 0 }
                  }
                  animate={
                    reducedMotion
                      ? { height: "auto", opacity: 1 }
                      : { height: "auto", opacity: 1 }
                  }
                  exit={
                    reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }
                  }
                  transition={{
                    duration: reducedMotion ? 0.16 : 0.28,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-border/35 bg-surfaceAlt/22 px-5 py-3 md:px-7">
                    <p className="max-w-3xl text-sm leading-6 text-muted md:text-[0.92rem]">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
