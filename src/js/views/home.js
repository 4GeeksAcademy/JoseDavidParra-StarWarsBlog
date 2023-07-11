import React,{useEffect,useState,useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { Modal } from "../component/modal";

export const Home = () => {
	const [favorites,setFavorite] = useState([])
	const {store,actions} = useContext(Context)

	useEffect(()=>actions.loadSomeData(),[])
	return(	
	<div className="text-center mt-5">
		<div className="container-fluid w-75">
			<h1 className="text-danger text-start ps-4">Characters</h1>
			<div className="overflow-auto">
				<ul className="d-flex list-unstyled">
					{store.characters.map((item)=>
					<li className="mx-4 my-2" key={item.uid}>
						<Card type="Character" uid={item.uid} nombre={item.name} url={item.url} key={item.uid}></Card>
						<Modal></Modal>
					</li>
					)}
				</ul>
			</div>
		</div>
		<div className="container-fluid w-75">
			<h1 className="w-75 text-danger text-start ps-4">Planets</h1>
			<div className="overflow-auto">
				<ul className="d-flex list-unstyled">
					{store.planets.map((item)=>
					<li className="mx-4 my-2" key={item.uid}>
						<Card type="Planet" uid={item.uid} nombre={item.name} url={item.url} key={item.uid}></Card>
						<Modal></Modal>
					</li>
					)}
				</ul>
			</div>
		</div>
	</div>
	)
}