import React, { Component , useContext, useState} from "react";
import propTypes from "prop-types";
import rigoBaby from "../../img/rigo-baby.jpg"
import { Context } from "../store/appContext"
import { useNavigate } from "react-router";

export const Card = (props) => {
    const {store,actions} = useContext(Context)
    const navigate = useNavigate()

    return(
        <div className="card" style={{"width": 18+"rem"}}>
            <img src={rigoBaby} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-start">{props.nombre}</h5>
                <p className="card-text text-start">UID: {props.uid}</p>
                <div className="d-flex">
                    <button type="button" onClick={()=>{
                        if(props.type==="Character"){
                            navigate(`/details/${props.uid}`)
                        }else if(props.type==="Planet"){
                            navigate(`/planet_details/${props.uid}`)
                        }
                        }} className="btn btn-primary">More info</button>
                    <span className="col-5"></span>
                    <button type="button" className="btn btn-outline-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    uid:propTypes.string,
    nombre:propTypes.string,
    url: propTypes.string,
    type: propTypes.string
}