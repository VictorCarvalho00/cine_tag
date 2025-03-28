import Card from "components/Card";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import videos from "json/db.json";
import styles from "./Inicio.module.css";

const Inicio = () => {
    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para gurdar seus videos e filmes</h1>
            </Titulo>
            <section className={styles.container} >
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    );
}

export default Inicio;