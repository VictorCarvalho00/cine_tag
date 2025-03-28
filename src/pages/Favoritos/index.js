import Titulo from 'components/Titulo';
import styles from './Favoritos.module.css';
import Banner from 'components/Banner';
import Card from 'components/Card';
import { useFavoritoContex } from 'Contextos/Favoritos';


const Favoritos = () => {
    const { favorito } = useFavoritoContex();
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id}/>
                })} 
            </section>
        </>
    );
}

export default Favoritos