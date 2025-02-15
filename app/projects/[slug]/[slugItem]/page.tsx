// import Image from 'next/image';
import React from 'react';
// import { data } from '@/content/data';
// import ProjectDetailsTabs from '@/components/ProjectDetails';
import { parseContent } from '@/utils/getProjectData';
import Markdown from 'markdown-to-jsx';
import Sidebar from '@/components/Sidebar';


// Generate static paths for all projects
// export async function generateStaticParams() {
//   return data.map((project) => ({
//     slug: project.slug,
//   }));
// }

// Fetch project data based on the slug
// async function getProject(slug: string) {
//   const project = data.find((project) => project.slug === slug);
//   if (!project) {
//     throw new Error('Project not found');
//   }
//   return project;
// }


export default async function ProjectDetails({ params }: { params: { slug: string, slugItem: string } }) {
  const { slug, slugItem } = await params;
  // const project = await getProject(slug);
const slugItemPlain = slugItem.split('-').join('');
  const { fileData, content } = await parseContent(slug, slugItemPlain);

  return (
    <div className="relative z-30 flex">
      <Sidebar slug={slug} slugItem={slugItem} />
      <div className='w-full md:w-3/4 md:mt-12 ml-auto'>
        <div className='w-1/2 mx-auto text-[16px] text-primary'>
          <main className=''>
            <article>
              <Markdown
                options={{
                  overrides: {
                    // Paragraph (<p>) styling
                    p: {
                      component: 'p',
                      props: {
                        style: {
                          marginBottom: '3rem', // Matches the spacing in your component
                          lineHeight: '1.6',
                          fontSize: '16px', // Matches your text size
                          color: '#4D555F', // Matches your text color
                        },
                      },
                    },

                    // Heading 1 (<h1>) styling
                    h1: {
                      component: 'h1',
                      props: {
                        style: {
                          fontSize: '24px', // Matches your heading size
                          fontWeight: 'bold',
                          marginBottom: '1.5rem', // Matches your spacing
                          color: '#2E3741', // Matches your heading color
                        },
                      },
                    },

                    // Heading 2 (<h2>) styling
                    h2: {
                      component: 'h2',
                      props: {
                        style: {
                          fontSize: '20px',
                          fontWeight: 'bold',
                          marginBottom: '1.5rem',
                          color: '#2E3741',
                        },
                      },
                    },

                    // Heading 3 (<h3>) styling
                    h3: {
                      component: 'h3',
                      props: {
                        style: {
                          fontSize: '18px',
                          fontWeight: 'bold',
                          marginBottom: '1.5rem',
                          color: '#2E3741',
                        },
                      },
                    },

                    // Image (<img>) styling
                    img: {
                      component: 'img',
                      props: {
                        style: {
                          maxWidth: '50%', // Matches your image width
                          height: 'auto',
                          borderRadius: '24px', // Matches your rounded-3xl
                          border: '2px solid #ECF2F9', // Matches your border
                          marginTop: '2rem', // Matches your mt-8
                          marginBottom: '0.5rem', // Matches your mb-2
                          marginLeft: 'auto',
                          marginRight: 'auto', // Centers the image
                        },
                      },
                    },

                    // Link (<a>) styling
                    a: {
                      component: 'a',
                      props: {
                        style: {
                          color: '#2E3741', // Matches your text color
                          textDecoration: 'underline',
                        },
                      },
                    },

                    // Blockquote (<blockquote>) styling
                    blockquote: {
                      component: 'blockquote',
                      props: {
                        style: {
                          borderLeft: '4px solid #ECF2F9',
                          paddingLeft: '1rem',
                          marginBottom: '1.5rem',
                          color: '#4D555F',
                          fontStyle: 'italic',
                        },
                      },
                    },

                    // List (<ul> and <ol>) styling
                    ul: {
                      component: 'ul',
                      props: {
                        style: {
                          marginBottom: '1.5rem',
                          paddingLeft: '1.5rem',
                          listStyleType: 'disc',
                          color: '#4D555F',
                        },
                      },
                    },
                    ol: {
                      component: 'ol',
                      props: {
                        style: {
                          marginBottom: '1.5rem',
                          paddingLeft: '1.5rem',
                          listStyleType: 'decimal',
                          color: '#4D555F',
                        },
                      },
                    },

                    // List item (<li>) styling
                    li: {
                      component: 'li',
                      props: {
                        style: {
                          marginBottom: '0.5rem',
                          lineHeight: '1.6',
                        },
                      },
                    },
                  },
                }}
              >
                {content}
              </Markdown>
            </article>
          </main>
        </div>
      </div>

    </div>


  );
}