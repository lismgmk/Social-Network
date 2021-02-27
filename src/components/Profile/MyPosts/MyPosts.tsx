import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"

export function MyPosts(props) {



    let postsElements =
        props.posts.map( p => <Post message={p.message} />);

    let newPostElement = React.createRef<HTMLTextAreaElement>();


    debugger

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea  ref={newPostElement}/>
                </div>
                <div>
                    <button>Add post</button>

                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )

    // let textArrVal=React.createRef();
    //
    // let getValue = (text)=>{
    //
    //     let texts = textArrVal.current.value;
    // };
    //
    //
    //
    // let getData =  props.datr.map((i)=>{
    //    return <Post message = {i.message} />
    // })
    // debugger
    // return (
    //
    //     <div>
    //
    //         <div>
    //             My posts
    //         </div>
    //
    //         <textarea  ref={ textArrVal }></textarea>
    //         <button onClick={getValue}>Click</button>
    //
    //
    //
    //
    //         {getData}
    //
    //
    //
    //
    //     </div>
    // )
}

