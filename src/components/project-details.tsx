"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { TracingBeam } from "./ui/tracing-beam";
import Lenis from "lenis";

export function ProjectDetails({ project } : { project : ProjetType }) {
    useEffect( () => {
        const lenis = new Lenis()

        function raf(time:any) {
        lenis.raf(time)
        requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

  return (
    <div className="flex  flex-col-reverse md:flex-row mx-10">
    <TracingBeam className="md:left-20 mt-10">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        <div className="mb-10">
            <h2 className="bg-gradient-to-r from-secondary to-primary text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              Project
            </h2>
            <div className="text-lg  prose prose-sm dark:prose-invert">
                <Image
                  src={`/${project.thumbnail}`}
                  alt="blog thumbnail"
                  height="500"
                  width="1000"
                  className="rounded-lg mb-10 object-cover "
                />
              {project.description}
            </div>
        </div>
        <div className="mb-10">
            <h2 className="bg-gradient-to-r from-secondary to-primary text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              Solution
            </h2>
            <div className="text-lg  prose prose-sm dark:prose-invert">
                <Image
                  src={`/${project.thumbnail}`}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              {project.solution}
            </div>
        </div>
        <div className="mb-10">
            <h2 className="bg-gradient-to-r from-secondary to-primary text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              Impact
            </h2>
            <div className="text-lg  prose prose-sm dark:prose-invert">
                <Image
                  src={`/${project.thumbnail}`}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              {project.impact}
            </div>
        </div>
      </div>
    </TracingBeam>
    <div className="flex flex-row flex-wrap gap-3 md:gap-10 mt-10 h-full md:flex-col border-l px-10 md:px-10 mx-20">
        <div className="flex gap-1 flex-col">
            <h5 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Client</h5>
            <h6>{project.client}</h6>
        </div>
        <div className="flex gap-1 flex-col">
            <h5 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Location</h5>
            <h6>{project.location}</h6>
        </div>
        <div className="flex gap-1 flex-col">
            <h5 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Key Dates</h5>
            <h6>Commenced : {project.commenced}</h6>
            <h6>Completion: {project.completion}</h6>
        </div>
        <div className="flex flex-col gap-1">
            <h5 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Expertise</h5>
            <h6>{project.category}</h6>
        </div>
    </div>
    </div>

  );
}

