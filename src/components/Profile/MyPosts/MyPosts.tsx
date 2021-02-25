import React from "react";
import {Post} from "./Post/Post";

export function MyPosts(props) {


    return (

        <div>

            <div>
                My posts

            </div>
            <Post message={props.datr} />
            <Post message={props.datr} />
            <Post message={props.datr} />
            <Post message={props.datr} />
            <Post message={props.datr} />
            <Post message={props.datr} />


        </div>
    )
}

