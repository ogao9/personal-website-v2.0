import BlockContent from '@sanity/block-content-to-react'
import BlogPostHeader from '../../components/BlogPostHeader';
import MetaHead from '../../components/MetaHead'
import { getPostData, getPostPaths, urlFor } from "../../lib/sanity";

export default function SinglePost({postInfo}) {
    return (
        <>
            <MetaHead title={`${postInfo.title}`} description={`${postInfo.excerpt}`}/>

            <main className="px-8 md:pl-16 lg:pl-48 pt-24 pb-12">
                <BlogPostHeader postInfo={postInfo}/>

                <section className="max-w-3xl">
                    <img
                        src={urlFor(postInfo.image).url()}
                        alt="Blog post cover"
                        className="w-full h-auto object-cover overflow-hidden "
                    />
                </section>

                <section className="max-w-3xl pb-8">
                    <article className="prose prose-lg dark:prose-dark max-w-full">
                        <BlockContent
                            blocks={postInfo.body}
                            imageOptions={{ w: 480, h: 360, fit: "max" }}
                        />
                    </article>
                </section>
            </main>
        </>
    );
}

export async function getStaticPaths(){
    const paths = await getPostPaths();

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context){
    const postSlug = context.params.slug;
    const data = await getPostData(postSlug);

    return{
        props:{
            postInfo: data,
        }
    }
}