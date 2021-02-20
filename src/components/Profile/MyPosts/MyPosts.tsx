import React from "react";
import {Post} from "./Post/Post";

export function MyPosts() {
    return (
        <div>
            <div>
                My posts
            </div>
            <Post message={'Hi, how are your?'} />
            <Post message={"I'am ok"} />

        </div>
    )
}

