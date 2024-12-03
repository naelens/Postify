import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://i.pinimg.com/736x/66/98/e7/6698e71cf38dec084911892d46d31a8a.jpg" />
                
                    <div className={styles.authorInfo}>
                        <strong>Emily thomas</strong>
                        <span>Front-end Developer</span>
                    </div>
                </div>

                <time title="03 de Dezembro de 2024" datetime="2024-12-03 11:21">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="#">👉 jane.design/doctorcare</a></p>

                <p>
                    <a href="#">#novoprojeto</a> {''}
                    <a href="#">#postify</a> {''}
                    <a href="#">#frontend</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário"></textarea>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}