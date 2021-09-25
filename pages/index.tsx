import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Haloholic</title>
                <meta name="description" content="Haloholics Art Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>
                    Welcome to{" "}
                    <a href="https://twitter.com/HALOHOLlC">
                        Haloholics&apos;s Portfolio POG
                    </a>
                </h1>
            </main>

            <footer>
                <a
                    href="https://github.com/Abys5"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by Abyss Development
                </a>
            </footer>
        </div>
    );
};

export default Home;
