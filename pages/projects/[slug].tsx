import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

// This is the React component that renders the page for each project.
const ProjectPage: NextPage<{ project: any; content: string }> = ({ project, content }) => {
    return (
        <div>
            <p className="text-primary text-base md:text-base-md font-bold">{project.name}</p>
            <p>{project.timeline}</p>
            <ul>
                {project.cases.map((caseName) => (
                    <li key={caseName}>{caseName}</li>
                ))}
            </ul>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const files = fs.readdirSync(path.join(process.cwd(), 'content'));
    const paths = await Promise.all(files.map(async (filename) => {
        const filePath = path.join(process.cwd(), 'content', filename, 'index.md');
        const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(markdownWithMeta);
        return {
            params: { slug: data.name.toLowerCase() }, // Use the lowercased "name" value as the slug
        };
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug;
    let project = {};
    let content = '';

    if (slug) {
        const files = fs.readdirSync(path.join(process.cwd(), 'content'));
        for (const filename of files) {
            const filePath = path.join(process.cwd(), 'content', filename, 'index.md');
            if (fs.existsSync(filePath)) {
                const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
                const { data, content: fileContent } = matter(markdownWithMeta);
                if (data.name.toLowerCase() === slug) { // Match the slug with the lowercased "name" value
                    project = {
                        ...data,
                        name: data.name,
                        timeline: data.timeline,
                        cases: data.cases,
                    };
                    content = fileContent;
                    break;
                }
            }
        }
    }

    return {
        props: {
            project,
            content,
        },
    };
};

export default ProjectPage;