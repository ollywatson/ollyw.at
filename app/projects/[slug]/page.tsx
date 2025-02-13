// import Image from 'next/image';
import React from 'react';
import { data } from '@/content/data';
import ProjectDetailsTabs from '@/components/ProjectDetails';


// Generate static paths for all projects
export async function generateStaticParams() {
  return data.map((project) => ({
    slug: project.slug,
  }));
}

// Fetch project data based on the slug
async function getProject(slug: string) {
  const project = data.find((project) => project.slug === slug);
  if (!project) {
    throw new Error('Project not found');
  }
  return project;
}


export default async function ProjectDetails({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const project = await getProject(slug);


  return (
    <div className='relative z-30 flex'>
      <ProjectDetailsTabs pageData={project.pageData[0]} />
    </div>
  );
}