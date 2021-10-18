import Head from "next/head";

export default function MetaHead({ title, description }){
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="author" content="Oliver Gao" />
            <meta
                name="description"
                content={description}
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

MetaHead.defaultProps = {
    title: "Oliver Gao",
    description: "Oliver Gao is a student at the University of Michigan. Visit my website to learn more about me, my projects, and read my blog"
};