const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favoritos:[]
		},
		actions: {
		addFavoritos: (elemento) => {
		const store = getStore(); 
        const duplicado = store.favoritos.find((item) => item === elemento); //busca en la lista y devuelve el primer elemento que coincida con item 
        if (!duplicado) {                                // si no encuentra ninguno ...
          setStore({favoritos: [...store.favoritos, elemento]});      // favoritos sera entonces una copia( []) y se le añade el elemento 
        }
			},
		 deleteFavoritos : (elemento) => {
			const store = getStore();
			const nuevaLista = store.favoritos.filter((favItem) => favItem !== elemento);
			setStore({favoritos: nuevaLista});}
		}
	};
};

export default getState;
