import McqLayout from "../../components/McqLayout";
import Head from "next/head";
import Link from 'next/link';

export default function Home() {

    const mcqsubjects = [
        { id: 1, name: 'Artificial Intelligence', link: '/mcq/artificial-intelligence' },
        { id: 2, name: 'Angular Js', link: '/mcq/angularjs-mcq' },
        { id: 3, name: 'Blockchain', link: '/mcq/blockchain' },
        { id: 4, name: 'C Language', link: '/mcq/c-language' },
        { id: 5, name: 'Computer Fundamental', link: '/mcq/computer-fundamental' },
        { id: 6, name: 'Computer Memory', link: '/mcq/computer-memory' },
        { id: 7, name: 'Cloud Computing', link: '/mcq/cloud-mcq' },
        { id: 8, name: 'C++', link: '/mcq/cpp-language' },
        { id: 8, name: 'CSS',link: '/mcq/css-mcq' },
        { id: 9, name: 'Computer Networking', link: '/mcq/networking-mcq' },
        { id: 10, name: 'Data Structure', link: '/mcq/data-structure-mcq' },
        { id: 11, name: 'DBMS', link: '/mcq/dbms-mcq' },
        { id: 12, name: 'Ethical Hacking ', link: '/mcq/ethical-hacking-mcq' },
        { id: 13, name: 'HTML', link: '/mcq/html-mcq' },
        { id: 14, name: 'I/O Devices', link: '/mcq/io-device' },
        { id: 15, name: 'Information & Network Security', link: '/mcq/information-and-network-mcq' },
        { id: 16, name: 'Java', link: '/mcq/java-mcq' },
        { id: 17, name: 'JavaScript', link: '/mcq/javascript-mcq' },
        { id: 18, name: 'Machine Learning', link: '/mcq/machine-learning-mcq' },
        { id: 19, name: 'MongoDB', link: '/mcq/mongodb-mcq' },
        { id: 20, name: 'Mobile Communication', link: '/mcq/mobile-communication-mcq' },
        { id: 21, name: 'Multimedia', link: '/mcq/multimedia-mcq' },
        { id: 22, name: 'Node Js', link: '/mcq/node-mcq' },
        { id: 23, name: 'Operating System', link: '/mcq/operating-system' },
        { id: 24, name: 'Python', link: '/mcq/python-mcq' },
        { id: 25, name: 'ReactJs', link: '/mcq/react-mcq' },
        { id: 26, name: 'System Analysis & Design', link: '/mcq/system-design-analysis-mcq' },

        // Add more subjects here as needed
    ];

    return (
        <McqLayout>
            <Head>
                <title>Free Multiple Choice Question | Unstop Computer</title>
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
                                <h2 className=" text-blue-700 text-4xl text-center sm:text-xl md:text-6xl lg:text-left xl:text-5xl dark:text-blue">Multiple Choice Question</h2> <br className="lg:block hidden" />
                            </div>
                            <p className="mt-2">Here you can test your knowledge and skills on various topics related to computer science, such as programming languages, data structures, algorithms, operating systems, databases, and more. </p>
                        </div>
                    </div>
                    { mcqsubjects.map( ( subject ) => (
                        <div key={ subject.id } className="p-2 sm:w-1/2 w-full">
                            <Link href={ subject.link }>
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center cursor-pointer">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-700 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">{ subject.name } MCQ</span>
                                </div>
                            </Link>
                        </div>
                    ) ) }
                </div>
            </section>
        </McqLayout>
    );
}
