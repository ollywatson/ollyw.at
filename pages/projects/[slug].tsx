import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { useRouter } from 'next/router';

interface ProjectProps {
  projectData: {
    name: string;
    description: string;
  };
}

const Project: NextPage<ProjectProps> = ({ projectData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{projectData.name}</h1>
      <p>{projectData.description}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch or compute paths based on project slugs
  return {
    paths: [{ params: { slug: 'project-slug-1' } }, { params: { slug: 'project-slug-2' } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Assume you fetch project data based on the slug
  const projectData = { name: "Project Name", description: "Project Description" }; // This should be fetched dynamically based on 'params.slug'
  return {
    props: { projectData },
  };
};

export default Project;