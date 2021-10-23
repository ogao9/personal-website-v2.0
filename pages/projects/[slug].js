import MetaHead from '../../components/MetaHead';
import BlockContent from '@sanity/block-content-to-react'
import { getProjectPaths, getProjectData, urlFor } from "../../lib/sanity";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function SingleProjectDetails({projectDetails}) {
    return (
        <>
            <MetaHead title={`Oliver Gao | ${projectDetails.title}`} description="An overview and analysis of my project"/>

            <main className="px-8 md:pl-16 lg:pl-48 py-16">
                <section className="flex flex-wrap justify-between items-end mb-12 max-w-4xl">
                    <div>
                        <h1 className="text-5xl font-semibold mb-4 mr-4">{projectDetails.title}</h1>
                        <h3 className="text-base">
                            {projectDetails.technologies.join(' / ')}
                        </h3>
                    </div>
                    <div>
                        <h3 className="mt-2 mb-4 font-semibold">Exhibit</h3>
                        {projectDetails.externalLink &&
                            <a href={projectDetails.externalLink} target="_blank" rel="noreferrer">
                                <p className="projectLink">Live Demo <FontAwesomeIcon icon={faArrowRight} className="inline w-2 ml-1 arrow"/></p>
                            </a>
                        }
                        
                        {projectDetails.githubLink &&
                            <a href={projectDetails.githubLink} target="_blank" rel="noreferrer">
                                <p className="projectLink">Github Repository<FontAwesomeIcon icon={faArrowRight} className="inline w-2 ml-1 arrow"/></p>
                            </a>
                        }
                    </div>
                </section>

                <section className="max-w-4xl">
                    <img
                        src={urlFor(projectDetails.image).url()}
                        alt="project cover"
                        className="w-full h-auto object-cover"
                    />
                </section>

                <section className="max-w-4xl">
                    <article className="prose prose-lg dark:prose-dark max-w-full">
                        <BlockContent
                            blocks={projectDetails.body}
                            imageOptions={{ w: 800, h: 450, fit: "max" }}
                        />
                    </article>
                </section>
            </main>
        </>
    );
}

export async function getStaticPaths(){
    const paths = await getProjectPaths();

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context){
    const projectSlug = context.params.slug;
    const projectDetails = await getProjectData(projectSlug);

    return{
        props:{
            projectDetails
        }
    }
}