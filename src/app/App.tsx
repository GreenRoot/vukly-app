import styles from './App.module.scss';
import MainPage from "../pages/main-page/main-page.tsx";

function App() {
  return (
    <div className={styles.container}>
      <MainPage />
    </div>
  );
}

export default App;
