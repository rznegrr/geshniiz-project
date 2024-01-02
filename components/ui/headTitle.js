import Head from "next/head";

const HeadTitle = (props) => {
    return ( 
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
        </div>
     );
}
 
export default HeadTitle;