import argon2 from "argon2";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const ReturnHash = async (password: string) => {
    return argon2.hash(password);
};

const GenerateHash: NextPage = () => {
    const [password, setPassword] = useState("");

    return (
        <div>
            <Head>
                <title>Haloholic</title>
                <meta name="description" content="Haloholics Art Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main
                className={`flex justify-center items-center w-screen h-screen flex-col`}
            >
                <h1 className={`text-3xl font-bold`}>Hash Generator</h1>
                <span>Paste into ENV</span>
                <form onSubmit={() => {}}>
                    <input
                        type="text"
                        onChange={(event) => {
                            setPassword(event.currentTarget.innerText);
                        }}
                    />
                    <input
                        type="submit"
                        className={`px-4 py-2 bg-green-400 rounded-md font-semibold`}
                    >
                        Generate
                    </input>
                </form>
            </main>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    if (process.env.PASSWORD_HASH) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }
    return { props: {} };
};

export default GenerateHash;
