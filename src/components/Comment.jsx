import styles from './Comment.module.css';

export function Comment () {
    return (
        <div className={styles.comment}>
            <img src="https://i.pinimg.com/736x/66/98/e7/6698e71cf38dec084911892d46d31a8a.jpg"  />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>

                        </div>
                    </header>

                    <p>Muito bom Devon, parabéns!</p>
                </div>

                <footer>
                    Aplaudir
                </footer>
            </div>
        </div>
    )
}