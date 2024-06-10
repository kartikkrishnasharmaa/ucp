import CheatLayout from "../../../components/cheatLayout";
import Head from "next/head";
import Link from 'next/link';

export default function Home() {
    return (
        <CheatLayout>
            <Head>
                <title>Computer Science Cheat Sheet - Home | Unstop Computer</title>
                <meta name="description" content="An Online place where you can write code and test your code in real time without installing any additional softwares." />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="website template" />
            </Head>
            <section id="content-wrapper">
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    <div className="container text-center mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
                            <div className="relative xl:container">
                                <h2 className=" text-blue-700 text-4xl text-center sm:text-xl md:text-6xl lg:text-left xl:text-5xl dark:text-blue">VLC Media Cheat Sheet </h2> <br className="lg:block hidden" />
                            </div>
                        </div>
                    </div>
                  

                </div>
            </section>
        </CheatLayout>
    );
}
