import React , {useEffect,useContext,useState} from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import img800x600 from "../../img/800x600.png";

export const Modal = (props) => {
    const {store,actions} = useContext(Context)


    function emptyCharacter(){
        actions.emptyCharacter()
    }

    function emptyPlanet(){
        actions.emptyPlanet()
    }
 
    return(
        <div>
            {/* CHARACTER */}
            <div className="modal fade w-100" id="moreInfoCharacter" style={{width:1500+"px"}}>
                <div className="modal-dialog modal-dialog-centered modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header row">
                            <span className="col-4"></span>
                            <h1 className="modal-title fs-5 col-4" id="moreInfoLabel">Información de {store.character.name}</h1>
                            <span className="col-3"></span>
                            <button type="button" onClick={emptyCharacter} className="btn-close col-1 me-5" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <span className="col-1"></span>
                                <img className="col-7" src={img800x600} style={{maxHeight:50+"%",maxWidth:50+"%"}} alt="..."/>
                                <span className="col-2"></span>
                                <div className="col-2"><h1>{store.character.name}</h1><p>THE MOST RANDOM TEXT EVER</p></div>
                            </div>
                            <hr className="bg-danger border-2 border-top border-danger"></hr>
                            <div className="row">
                                <div className="d-block col-2"><h3 className="text-danger">Name</h3><p className="text-danger">{store.character.name}</p></div>
                                <div className="d-block col-2"><h3 className="text-danger">Birth Year</h3><p className="text-danger">{store.character.birth_year}</p></div>
                                <div className="d-block col-2"><h3 className="text-danger">Gender</h3><p className="text-danger">{store.character.gender}</p></div>
                                <div className="d-block col-2"><h3 className="text-danger">Height</h3><p className="text-danger">{store.character.height}</p></div>
                                <div className="d-block col-2"><h3 className="text-danger">Skin color</h3><p className="text-danger">{store.character.skin_color}</p></div>
                                <div className="d-block col-2"><h3 className="text-danger">Eye color</h3><p className="text-danger">{store.character.eye_color}</p></div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={emptyCharacter}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* PLANET */}
            <div className="modal fade w-100" id="moreInfoPlanet" style={{width:1500+"px"}}>
                <div className="modal-dialog modal-dialog-centered modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header row">
                            <span className="col-4"></span>
                            <h1 className="modal-title fs-5 col-4" id="moreInfoLabel">Información de {store.planet.name}</h1>
                            <span className="col-3"></span>
                            <button type="button" onClick={emptyPlanet} className="btn-close col-1 me-5" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <span className="col-1"></span>
                                <img className="col-7" src={img800x600} style={{maxHeight:50+"%",maxWidth:50+"%"}} alt="..."/>
                                <span className="col-2"></span>
                                <div className="col-2"><h1>{store.planet.name}</h1><p>THE MOST RANDOM TEXT EVER</p></div>
                            </div>
                            <hr className="bg-danger border-2 border-top border-danger"></hr>
                            <div className="row">
                                <div className="d-block col-2"><h3 className="text-danger">Name</h3><p className="text-danger">{store.planet.name}</p></div>
                                <div className="d-block col-2"><h3 className="text-danger">Climate</h3><p className="text-danger">{store.planet.climate}</p></div>
                                <div className="d-block col-2"><h3 className="text-danger">Population</h3><p className="text-danger">{store.planet.population}</p></div>
                                <div className="d-block col-2"><h3 className="text-danger">Orbital Period</h3><p className="text-danger">{store.planet.orbital_period}</p></div>
                                <div className="d-block col-2"><h3 className="text-danger">Rotation Period</h3><p className="text-danger">{store.planet.rotation_period}</p></div>
                                <div className="d-block col-2"><h3 className="text-danger">Diameter</h3><p className="text-danger">{store.planet.diameter}</p></div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={emptyPlanet}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
    
    
}

Modal.propTypes = {
    url: propTypes.string,
    tipo: propTypes.string
}