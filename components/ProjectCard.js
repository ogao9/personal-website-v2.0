import Link from 'next/link'
import { urlFor } from '../lib/sanity';


export default function ProjectCard({projectInfo}) {
    return (
        <Link href={`/projects/${projectInfo.slug}`}>
        <a>
            <article className="project-card border dark:border-gray-800 shadow-sm hover:opacity-80 dark:bg-black-surface dark:border-black-surface">
                <section className="relative mb-3 overflow-hidden">
                    <img
                        src={urlFor(projectInfo.image).url()}
                        alt="Project Cover Photo"
                        className="object-cover"
                    />
                </section>
                <section className="mb-1 px-3">
                    <h2 className="text-2xl font-bold mb-1">{projectInfo.title}</h2>
                    <p className="leading-snug">{projectInfo.excerpt}</p>
                </section>
            </article>
        </a>
        </Link>
    );
}