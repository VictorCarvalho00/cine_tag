import styles from './Titulo.module.css';

const Titulo = ({ children }) => {
    return (
        <section className={styles.titulo}>
            {children}
        </section>
    );
}

export default Titulo