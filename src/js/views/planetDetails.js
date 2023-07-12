import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import img800x600 from "../../img/800x600.png";
import { useNavigate, useParams } from "react-router";

export const PlanetDetails = () => {
    const {store,actions} = useContext(Context)
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect((()=>actions.getPlanet(id)),[])

    return(
        <div>
            <div className="modal-header row">
                <span className="col-4"></span>
                <h1 className="modal-title fs-5 col-4" id="moreInfoLabel">Información de {store.item.name}</h1>
                <span className="col-3"></span>
            </div>
            <div className="modal-body">
                <div className="row">
                    <span className="col-1"></span>
                    <img className="col-7" src={img800x600} style={{maxHeight:50+"%",maxWidth:50+"%"}} alt="..."/>
                    <span className="col-2"></span>
                    <div className="col-2"><h1>{store.item.name}</h1><p>THE MOST RANDOM TEXT EVER</p></div>
                </div>
                <hr className="bg-danger border-2 border-top border-danger"></hr>
                <div className="row">
                    <div className="d-block col-2"><h3 className="text-danger">Name</h3><p className="text-danger">{store.item.name}</p></div>
                    <div className="d-block col-2"><h3 className="text-danger">Climate</h3><p className="text-danger">{store.item.climate}</p></div>
                    <div className="d-block col-2"><h3 className="text-danger">Population</h3><p className="text-danger">{store.item.population}</p></div>
                    <div className="d-block col-2"><h3 className="text-danger">Orbital Period</h3><p className="text-danger">{store.item.orbital_period}</p></div>
                    <div className="d-block col-2"><h3 className="text-danger">Rotation Period</h3><p className="text-danger">{store.item.rotation_period}</p></div>
                    <div className="d-block col-2"><h3 className="text-danger">Diameter</h3><p className="text-danger">{store.item.diameter}</p></div>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={()=>{
                    actions.emptyItem();
                    navigate("/");
                    }}>Back</button>
            </div>
        </div>
    )
}