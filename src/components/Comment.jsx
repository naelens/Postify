import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment (props) {

    function handleDeleteComment() {
        props.onDeleteComment(props.content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://i.pinimg.com/736x/4d/5b/9c/4d5b9cf5e418c64c1cc53790fef1c766.jpg"  />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Emily thomas</strong>
                            <time title="03 de Dezembro de 2024" dateTime="2024-12-03 11:21">Há cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{props.content}</p>
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