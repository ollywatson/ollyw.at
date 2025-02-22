import React from 'react';
import Markdown from 'markdown-to-jsx';
import Sidebar from '@/components/Sidebar';
import { parseContent } from '@/utils/parseContent'
import { getProjectData } from '@/utils/getProjectData';
import MobileNav from '@/components/MobileNav';
import { getProjectCases } from '@/utils/getProjectCases';
import TopNav from '@/components/topnav';
import Footer from '@/components/footer';


interface PageProps {
  params: Promise<{ slug: string[], slugItem: string[] }>;
}

export default async function ProjectDetails({ params }: PageProps) {
  const { slug, slugItem } = await params;

  const projects = await parseContent();

  const slugItemPlain = slugItem.split('-').join('');
  const { data, content } = await getProjectData(slug, slugItemPlain);

  const projectData = projects.filter((project) => project?.slug === slug);

  const cases = await getProjectCases();
  const currentProjectCases: string[] = cases
    .filter((project: any) => project?.slug === slug) // Filter by slug
    .flatMap((project: any) => project.cases); // Extract and flatten the cases array

  return (
    <div className="relative z-30">
      <TopNav slug={slug} slugItem={slugItem} projectData={projectData} currentProjectCases={currentProjectCases} fileData={data} />
      {
        content ?
          <div className='w-full mt-20'>
            <div className='px-6 md:px-[48px] lg:px-[120px] text-base text-primary'>
              <main>
                <article className="flex">
                  <Markdown
                    options={{
                      overrides: {
                        // Paragraph (<p>) styling
                        p: {
                          component: 'p',
                          props: {
                            className: 'flex-1 text-sm md:text-base text-secondary mb-6 leading-relaxed', // Tailwind classes
                          },
                        },

                        // Heading 1 (<h1>) styling
                        h1: {
                          component: 'h1',
                          props: {
                            className: 'text-headline font-serif italic text-primary xl:ml-[740px] 2xl:ml-[912px] pb-2 xl:pr10 2xl:pr-20', // Tailwind classes
                          },
                        },

                        // Heading 2 (<h2>) styling
                        h2: {
                          component: 'h2',
                          props: {
                            className: 'text-xl font-bold mb-6 text-primary', // Tailwind classes
                          },
                        },

                        // Heading 3 (<h3>) styling
                        h3: {
                          component: 'h3',
                          props: {
                            className: 'text-lg font-bold mb-6 text-[#2E3741]', // Tailwind classes
                          },
                        },

                        h6: {
                          component: 'p',
                          props: {
                            className: 'text-serif-adjust font-serif italic text-tertiary mb-6'
                          },
                        },

                        // Video (<video>) styling
                        video: {
                          component: 'video',
                          props: {
                            className: 'h-auto flex-row mb-6 bg-subtleBg rounded-lg w-full lg:max-w-[300px] 2xl:max-w-[460px] float-left md:mr-6', // Tailwind classes
                            autoPlay: true,
                            loop: true,
                            muted: true,
                            playsInline: true,
                          },
                        },

                        img: {
                          component: ({ src, alt }) => {
                            return (
                              <span className="flex flex-col gap-2 xl:flex-row xl:space-x-8 lg:max-w-[700px] xl:max-w-none">
                                <img src={src} alt={alt} className="w-full h-auto mb-2 bg-subtleBg rounded-lg lg:w-[700px] 2xl:w-[872px]" />
                                {alt && <span className="text-sm-reading mb-10 md:text-base text-secondary xl:pr10 2xl:pr-20">{alt}</span>}
                              </span>
                            );
                          },
                        },

                        // Link (<a>) styling
                        a: {
                          component: 'a',
                          props: {
                            className: 'text-[#2E3741] underline', // Tailwind classes
                          },
                        },

                        // Blockquote (<blockquote>) styling
                        blockquote: {
                          component: 'blockquote',
                          props: {
                            className: 'border-l-4 border-[#ECF2F9] pl-4 mb-6 text-[#4D555F] italic', // Tailwind classes
                          },
                        },

                        // Unordered List (<ul>) styling
                        ul: {
                          component: 'ul',
                          props: {
                            className: 'mb-6 pl-6 list-disc', // Tailwind classes
                          },
                        },

                        // Ordered List (<ol>) styling
                        ol: {
                          component: 'ol',
                          props: {
                            className: 'mb-6 pl-6 list-decimal text-[#4D555F]', // Tailwind classes
                          },
                        },

                        // List Item (<li>) styling
                        li: {
                          component: 'li',
                          props: {
                            className: 'mb-2 leading-relaxed', // Tailwind classes
                          },
                        },
                        label: {
                          component: 'label',
                          props: {
                            className: 'text-sm text-tertiary mb-6 xl:pr10 2xl:pr-20', // Tailwind classes
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
            <Footer isFullWidth={true} />
          </div>
          :
            <div className="w-full lg:w-3/4 md:w-3/5 md:mt-12 ml-auto mt-6">
              <div className="lg:w-1/2 md:w-10/12 mx-auto text-[16px] text-primary">
                <p>Content Not Found!</p>
              </div>
            </div>
      }


    </div>
  );
}