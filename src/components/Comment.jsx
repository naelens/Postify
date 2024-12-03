import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment () {
    return (
        <div className={styles.comment}>
            <img className={styles.avatar} src="https://i.pinimg.com/736x/66/98/e7/6698e71cf38dec084911892d46d31a8a.jpg"  />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Emily thomas</strong>
                            <time title="03 de Dezembro de 2024" datetime="2024-12-03 11:21">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}