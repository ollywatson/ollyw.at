import React from 'react';
import Markdown from 'markdown-to-jsx';
import Sidebar from '@/components/Sidebar';
import { parseContent } from '@/utils/parseContent'
import { getProjectData } from '@/utils/getProjectData';
import MobileNav from '@/components/MobileNav';


interface PageProps {
  params: Promise<{ slug: string[], slugItem: string[] }>;
}

export default async function ProjectDetails({ params }: PageProps) {
  const { slug, slugItem } = await params;

  const projects = await parseContent();

  const slugItemPlain = slugItem.split('-').join('');
  const { fileData, content } = await getProjectData(slug, slugItemPlain);

  const projectData = projects.filter((project) => project?.slug === slug);

  return (
    <div className="relative z-30 flex flex-col md:flex-row md:p-0 p-6">
      <div className='md:hidden'>
        <MobileNav slug={slug} slugItem={slugItem} projectData={projectData} />
      </div>
      <div className='hidden md:block'>
        <Sidebar slug={slug} slugItem={slugItem} projectData={projectData} />
      </div>
      <div className='w-full lg:w-3/4 md:w-3/5 md:mt-12 ml-auto mt-6'>
        <div className='lg:w-1/2 md:w-10/12 mx-auto text-[16px] text-primary'>
          <main className=''>
            <article>
              <Markdown
                options={{
                  overrides: {
                    // Paragraph (<p>) styling
                    p: {
                      component: 'p',
                      props: {
                        className: 'text-base text-secondary mb-[26px] leading-relaxed text-base text-[#4D555F]', // Tailwind classes
                      },
                    },

                    // Heading 1 (<h1>) styling
                    h1: {
                      component: 'h1',
                      props: {
                        className: 'text-2xl font-bold mb-6 text-[#2E3741]', // Tailwind classes
                      },
                    },

                    // Heading 2 (<h2>) styling
                    h2: {
                      component: 'h2',
                      props: {
                        className: 'text-xl font-bold mb-6 text-[#2E3741]', // Tailwind classes
                      },
                    },

                    // Heading 3 (<h3>) styling
                    h3: {
                      component: 'h3',
                      props: {
                        className: 'text-lg font-bold mb-6 text-[#2E3741]', // Tailwind classes
                      },
                    },

                    // Video (<video>) styling
                    video: {
                      component: 'video',
                      props: {
                        className: 'w-1/2 h-auto mt-8 mb-2 mx-auto rounded-3xl border-2 border-[#ECF2F9]', // Tailwind classes
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true,
                      },
                    },

                    // Image (<img>) styling
                    img: {
                      component: 'img',
                      props: {
                        className: 'max-w-[50%] h-auto mt-8 mb-2 mx-auto rounded-3xl border-2 border-[#ECF2F9]', // Tailwind classes
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
                        className: 'mb-6 pl-6 list-disc text-[#4D555F]', // Tailwind classes
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
                        className: 'text-sm text-tertiary mb-[26px]', // Tailwind classes
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