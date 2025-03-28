import { createContext, useContext, useState } from "react";

export const FavortiosContext = createContext();
FavortiosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);

    return (
        <FavortiosContext.Provider
            value={{ favorito, setFavorito }} >
            {children}
        </FavortiosContext.Provider>
    );
}

export function useFavoritoContex() {
    const { favorito, setFavorito } = useContext(FavortiosContext);

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)

        let novaLista = [...favorito];

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }

        novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
        return setFavorito(novaLista);
    }

    return {
        favorito,
        adicionarFavorito
    }
}