import { Header } from "./components/Header";
import { Post } from "./Post";
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          sidebar
        </aside>
        <main>
        <Post>

        </Post>
        </main>
      </div>
    </div>
  )
}


