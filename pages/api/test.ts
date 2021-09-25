import type { NextApiRequest, NextApiResponse } from "next";
import Twitter from "twitter";

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY || "",
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET || "",
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY || "",
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || "",
});
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    client.get(
        "statuses/user_timeline",
        { screen_name: process.env.TWITTER_SCREEN_NAME },
        function (error, tweets, response) {
            if (error) throw error;
            //console.log(tweets); // The favorites.
            //console.log(response); // Raw response object
            let filtered = tweets.filter(
                (tweet: any) =>
                    !tweet.text.startsWith("RT") &&
                    tweet.text.includes("#portfolio")
            );

            res.status(200).json({
                tweets: filtered,
            });
        }
    );
}
