import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ comentario, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(comentario)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/gustavohenri316.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gustavo Henrique</strong>
              <time
                title='11 de maio ás 08:13'
                dataTime="2022-05-11 08:13:30"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>
          <p>{comentario}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={24} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
} 