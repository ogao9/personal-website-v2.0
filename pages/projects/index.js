import Image from "next/image"
import MetaHead from "../../components/MetaHead"
import ProjectCard from "../../components/ProjectCard"
import { getAllProjects } from "../../lib/sanity"

export default function Projects({projectInfo}) {
    return (
        <>
            <MetaHead title="Oliver Gao | Projects" description="A small collection of my projects"/>

            <section className="px-8 md:pl-16 lg:pl-48 py-24">
                <h1 className="text-7xl font-semibold mb-3">Projects.</h1>
                <p className="text-lg">A collection of my personal, research, and work projects. Click on each project to learn more!</p>
            </section>

            <section className="px-12 lg:pl-32">
                <ProjectCardGrid projectInfo={projectInfo}/>
            </section>
        </>
    )
}

function ProjectCardGrid({projectInfo}){
    return(
        <section className="project-card-container max-w-7xl">
            {
                projectInfo.map((project, idx)=>(
                    <ProjectCard key={idx} projectInfo={project}/>
                ))
            }
        </section> 
    )
}

export async function getStaticProps(){
    const projectInfo = await getAllProjects();

    return{
        props:{
            projectInfo
        }
    }
}