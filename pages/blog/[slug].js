import BlockContent from '@sanity/block-content-to-react'
import BlogPostHeader from '../../components/BlogPostHeader';
import MetaHead from '../../components/MetaHead'
import { getPostData, getPostPaths } from "../../lib/sanity";

export default function SinglePost({postInfo}) {
    return (
        <>
            <MetaHead title={`${postInfo.title} | Oliver Gao`} description="Write a good description"/>

            <main className="px-12 lg:pl-48 pt-12">
                <BlogPostHeader postInfo={postInfo}/>


                <div className="max-w-6xl pb-8">
                
                <article className="prose prose-lg dark:prose-dark max-w-full">
                    <BlockContent
                        blocks={postInfo.body}
                        imageOptions={{ w: 480, h: 360, fit: "max" }}
                    />
                </article>
            </div>
            
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