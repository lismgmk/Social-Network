import React from "react";
import s from "./Photo.module.css"
import {NavLink} from "react-router-dom";




function Photo(props) {

    let getGallery = props.photoPage.images.map((i) => {
        return(
            <div className={s.image} >
                <img src = {i.src}/>
            </div>
        )
    })

    let getSocialNet = props.photoPage.socialNet.map((i) => {
        return(

            <div className={s.socialNet}>

                <NavLink to='/#' activeClassName={s.activeLink}>
                    <img src = {(i.path)}/>
                    <h5>{i.name}</h5>
                </NavLink>
            </div>
        )
    })
    return (

            <div className={s.photo}>
                {getGallery}
                {getSocialNet}

            </div>

    )
}

export default Photo;