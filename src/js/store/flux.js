const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favorites: [],
			characters: [],
			planets: [],
			item:{}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch('https://www.swapi.tech/api/people',{method:"GET"})
				.then(response=>response.json())
				.then(data=>setStore({characters:data.results}))
				.catch(error=>console.log(error))

				fetch('https://www.swapi.tech/api/planets',{method:"GET"})
				.then(response=>response.json())
				.then(data=>setStore({planets:data.results}))
				.catch(error=>console.log(error))
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			addFavorite:(name)=>{
				const store = getStore();

				if(store.favorites.includes(name)){
					console.log("Already in favorites");
				}else{
					setStore({favorites: [...store.favorites,name]})
				}

			},

			deleteFavorite:(index)=>{
				const store = getStore()
				store.favorites.splice(index,1)
				setStore({favorites : store.favorites})
			},

			getPersonaje:(id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`,{method:'GET'})
				.then(response=>response.json())
				.then(data=>setStore({item : data.result.properties}))
				.catch(error=>console.log(error))
			},

			getPlanet:(id) =>{
				fetch(`https://www.swapi.tech/api/planets/${id}`,{method:'GET'})
				.then(response=>response.json())
				.then(data=>setStore({item : data.result.properties}))
				.catch(error=>console.log(error))
			},

			emptyItem: () => {
				setStore({item: {} })
			},
		}
	};
};

export default getState;