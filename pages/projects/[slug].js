import MetaHead from '../../components/MetaHead';
import BlockContent from '@sanity/block-content-to-react'
import { getProjectPaths, getProjectData, urlFor } from "../../lib/sanity";


export default function SingleProjectDetails({projectDetails}) {
    return (
        <>
            <MetaHead title="Oliver Gao | " description="Add a good description later"/>

            <section className="px-12 lg:pl-48 pt-16 mb-12 flex flex-wrap max-w-6xl justify-between align-baseline">
                    <div>
                        <h1 className="text-5xl font-semibold mb-3">{projectDetails.title}</h1>
                        <h3 className="text-base text-gray-800">Front-end / Back-end / Web Design </h3>
                        <h3 className="text-base text-gray-800">Python / Pandas / CSS </h3>
                    </div>

                    <div>
                        <h3 className="text-gray-700 mb-4 ">Exhibit</h3>
                        <p>Visit Website</p>
                        <p>Github Repository</p>
                    </div>
            </section>

            <section className="px-8 lg:pl-28 max-w-6xl">
                <img
                    src={urlFor(projectDetails.image).url()}
                    alt="project cover"
                    className="w-full h-auto object-cover"
                />
            </section>

            <section className="px-12 lg:pl-48 max-w-6xl">
                <article className="prose prose-lg dark:prose-dark max-w-full">
                    <BlockContent
                        blocks={projectDetails.body}
                        imageOptions={{ w: 800, h: 450, fit: "max" }}
                    />
                </article>
            </section>
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