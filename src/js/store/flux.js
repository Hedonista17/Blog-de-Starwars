const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favoritos:[]
		},
		actions: {
		addFavoritos: (elemento) => {
		const store = getStore(); 
        const listado = store.favoritos.includes(elemento); // si incluye el elemento ... pero como no lo incluye..
        if (!listado) {                                //entonces if-- si no lo incluye en el listado -- que siempre es el caso 
          setStore({favoritos: [...store.favoritos, elemento]});   //coges el setStore y se setea de nuevo, ahora será lo que tengas en favoritos + ese elemento que le dimos click ver card.jsx linea 38   
        }
			},
		 deleteFavoritos : (elemento) => {
			const store = getStore();  //obtengo el store en mi variable store por ejemplo se llama asi (me traigo todo lo que exista en store)
			const newList= [...store.favoritos] // nueva variable para trabajar con spread operator --- hago copia del store sobre el que voy a trabajar
			newList.filter((favItem) => favItem !== elemento)  // metodo splice , del indice borrame 1 solo 
			setStore({favoritos:newList})}  // se setea el estado de nuevo , ahora favoritos será newList que elimina el elemento seleccionado del listado 
		}
	};
};

export default getState;

// deleteFav: (data) => {
// 	const store = getStore();
// 	const nuevaLista = store.fav.filter((favItem) => favItem !== data);
// 	setStore({fav: nuevaLista});
//   },
//   const newList= [...store.favoritos]