import Link from 'next/link'
import MetaHead from "../../components/MetaHead"
import BlogHomeStrip from "../../components/BlogHomeStrip";
import { getAllPosts } from "../../lib/sanity";

export default function Blog({blogPostsInfo}) {
    return (
        <>
            <MetaHead title="Oliver Gao | Blog" description="Oliver's Blog - A place where I share a small collection of my thoughts and ideas"/>

            <main className="px-12 lg:pl-48 pt-24">
                <section className="mb-20">
                    <h1 className="text-7xl font-semibold mb-3">Oliver's Blog.</h1>
                    <h3 className="text-lg">A small collection of my thoughts and ideas.</h3>
                </section>

                <section className="">
                    <div>
                        {blogPostsInfo.map((obj, idx) => (
                            <Link href={`/blog/${obj.slug}`} key={idx}>
                                <a><BlogHomeStrip postInfo={obj}/></a>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}

export async function getStaticProps(){
    const data = await getAllPosts();

    return {
        props: {
            blogPostsInfo: data,
        },
    };
}