import type { NextPage } from "next";
import Head from "next/head";

const Admin: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Portfolio Admin</title>
                <meta name="description" content="Haloholics Art Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <form>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" name="username" />
                    <label htmlFor="password">Password: </label>
                    <input type="text" id="password" name="password" />
                    <input type="submit" value="Submit" />
                </form>
            </main>
        </div>
    );
};

export default Admin;
