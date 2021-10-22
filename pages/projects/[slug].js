import MetaHead from '../../components/MetaHead';
import BlockContent from '@sanity/block-content-to-react'
import { getProjectPaths, getProjectData, urlFor } from "../../lib/sanity";


export default function SingleProjectDetails({projectDetails}) {
    return (
        <>
            <MetaHead title="Oliver Gao | " description="Add a good description later"/>

            <main className="px-8 md:pl-16 lg:pl-48 pt-16">
                    <section className="flex flex-wrap justify-between items-end mb-12 max-w-4xl">
                        <div>
                            <h1 className="text-5xl font-semibold mb-3">{projectDetails.title}</h1>
                            <h3 className="text-base text-gray-800">Front-end / Back-end / Web Design </h3>
                            <h3 className="text-base text-gray-800">Python / Pandas / CSS </h3>
                        </div>
                        <div>
                            <h3 className="text-gray-700 mb-4">Exhibit</h3>
                            <p>Visit Website</p>
                            <p>Github Repository</p>
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