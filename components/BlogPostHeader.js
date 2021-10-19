import { urlFor } from "../lib/sanity"
import { prettyDate } from "../lib/utilities"

export default function BlogPostHeader({postInfo}){
    return(
        <header className="pt-8 lg:pt-12 mb-4">
            <h1 className="text-3xl lg:text-4xl font-bold mb-1">{postInfo.title}</h1>
            <p className="text-xl mb-4">{postInfo.excerpt}</p>

            <section className="flex mb-4">
                <img
                    src={urlFor(postInfo.authorImage).width(50).height(50).url()}
                    alt="Blog Author Profile"
                    className="rounded-full"
                />
                <div className="ml-4">
                    <p>Oliver Gao</p>
                    <p>{prettyDate(postInfo.publishedAt)}</p>
                </div>
            </section>
            
            <section className="max-w-6xl">
                <img src={urlFor(postInfo.image).url()} alt="Blog Post Cover" className="w-full h-auto object-cover"/>
            </section>
        </header>
    )
}