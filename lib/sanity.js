import sanityClient from './sanityClient';
import imageUrlBuilder from '@sanity/image-url'
import groq from 'groq';


//      --------- Image Url Utility -----------
export function urlFor (source) {
    return imageUrlBuilder(sanityClient).image(source)
}

//      --------- Blog Post Data Fetching -----------
export async function getPostPaths(){
    const allPosts = await sanityClient.fetch('*[_type == "post"]')
    const paths = await allPosts.map((post) => ({ params: { slug: post.slug.current } }))

    return paths;
}

export async function getPostData(postSlug){
    const query = groq`*[_type == "post" && slug.current == $postSlug][0]{
        title,
        "slug": slug.current,
        "category": category->title,
        excerpt,
        image,
        publishedAt,
        "authorName": author->name,
        "authorImage": author->image,
        body[]{
            ..., 
            asset->{
              ...,
              "_key": _id
            }
        }
      }`
    const data =  await sanityClient.fetch(query, { postSlug })

    return data;
}

export async function getAllPosts(){
    const query = groq`*[_type == "post"]{
        title,
        "slug": slug.current,
        "category": category->title,
        excerpt,
        image,
        publishedAt,
        "authorName": author->name,
        "authorImage": author->image,
        body[]{
            ..., 
            asset->{
              ...,
              "_key": _id
            }
        },
      }|order(publishedAt desc)`
    const data =  await sanityClient.fetch(query)
    
    return data;
}

//      --------- Project Data Fetching -----------
export async function getProjectPaths(){
    const query = groq`*[_type == "Project"]{
        ..., 
        body[]{
            ..., 
            asset->{
              ...,
              "_key": _id
            }
        },
    }|order(publishDate desc)`
    const projects = await sanityClient.fetch(query)
    const paths = await projects.map((project) => ({ params: { slug: project.slug.current } }))

    return paths;
}

export async function getProjectData(slug){
    const query = groq`*[_type == "Project" && slug.current == $slug][0]{
        ..., 
        "slug" : slug.current, 
        body[]{
            ..., 
            asset->{
              ...,
              "_key": _id
            }
        },
    }`
    const data =  await sanityClient.fetch(query, { slug })
    return data;
}


export async function getAllProjects(){
    const query = groq`*[_type == "Project"]{
        ..., 
        "slug":slug.current,
        body[]{
            ..., 
            asset->{
              ...,
              "_key": _id
            }
        },
    }|order(publishDate desc)`
    const data = await sanityClient.fetch(query)
    return data;
}

//      --------- About Data Fetching -----------
export async function getAboutData(){
    const query = groq`*[_type == "about"][0]`
    const aboutData = await sanityClient.fetch(query)

    return aboutData;
}

//      --------- Home Data Fetching -----------
export async function getHomeData(){
    const query = groq`*[_type == "home"][0]{
        headline,
        subheadline,
        }`
    const homeData = await sanityClient.fetch(query)

    return homeData;
} 