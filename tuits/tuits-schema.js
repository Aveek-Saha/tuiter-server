import mongoose from "mongoose";

const schema = mongoose.Schema(
    {
        userAvatar: String,
        userName: String,
        userHandle: String,
        time: String,
        tweet: String,
        liked: Boolean,
        disliked: Boolean,
        replies: Number,
        retweets: Number,
        likes: Number,
        dislikes: Number,
        topic: String,
        title: String,
        image: String,
    },
    { collection: "tuits" }
);
export default schema;
