"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Web Application Portal",
    description: "IOS application web portal",
    image: '/images/projects/1.svg',
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://stories.thesimpleai.com/",
  },
  {
    id: 2,
    title: "Simple AI Powered",
    description: "Company's website",
    image: "/images/projects/2.svg",
    tag: ["All", "Web",, "Mobile"],
    gitUrl: "https://github.com/prathyusha-9896/simple",
    previewUrl: "https://thesimpleai.com/",
  },
  {
    id: 3,
    title: "Neet-AI-Tutor ",
    description: "Web Application",
    image: "/images/projects/3.svg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://neetaitutor.thesimpleai.com/",
  },
  {
    id: 4,
    title: "React Portfolio",
    description: "Personal Portfolio",
    image: "/images/projects/4.svg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/prathyusha-9896/portfolio-new",
    previewUrl: "https://prathyusha-webdev.vercel.app/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Habot",
    description: "The website I developed as part of my React Developer role assignment for HABOT",
    image: "/images/projects/7.svg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/prathyusha-9896/habot_project",
    previewUrl: "https://prathyusha-habot-project.vercel.app/",
  },
  {
    id: 7,
    title: "Figma Design",
    description: "Designed this beautiful project on figma",
    image: "/images/projects/8.svg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/prathyusha-9896/Figma-design-ecommerce-website?tab=readme-ov-file",
    previewUrl: "https://www.figma.com/proto/5wj9hFLgaSKeNJHYiuQZfD/Illustrations?node-id=44-26&starting-point-node-id=44%3A26&t=bMYroDPxxnifIw8F-1",
  },
  {
    id: 8,
    title: "React Flow Builder",
    description: "Developed this React flow builder",
    image: "/images/projects/9.svg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/prathyusha-9896/chatbot-flow-builder",
    previewUrl: "https://reactflow-chatbot-builder.vercel.app/",
  },
  {
    id: 9,
    title: "Nasa API",
    description: "Developed this Using Nasa API",
    image: "/images/projects/10.svg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/prathyusha-9896/NASAAPI",
    previewUrl: "https://prathyusha-9896.github.io/NASAAPI/index.html",
  },
  {
    id: 10,
    title: "Keep Notes",
    description: "Keep Notes app inspired by Google Keep!",
    image: "/images/projects/11.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/prathyusha-9896/KeepNotes",
    previewUrl: "https://keep-notes-navy-two.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-[#c1272d] mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className=" grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
