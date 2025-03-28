import Favoritos from 'pages/Favoritos';
import Inicio from './pages/Inicio';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from 'components/Cabecalho';
import Rodape from 'components/Rodape';
import Container from 'components/Container';
import FavoritosProvider from 'Contextos/Favoritos';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container >
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/favoritos" element={<Favoritos />} />
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Rodape />
        </BrowserRouter>
    );
}

export default AppRoutes