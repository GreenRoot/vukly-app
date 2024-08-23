import {RouterProvider} from './providers/router/router-provider';
import style from './App.module.scss'

function App() {
  return (
    <div className={style.container}>
      <RouterProvider />
    </div>
  );
}

export default App;
