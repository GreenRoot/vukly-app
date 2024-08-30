import {RouterProvider} from './providers/router/router-provider';
import style from './App.module.scss'

export function App() {
  return (
    <div className={style.container}>
      <RouterProvider />
    </div>
  );
}
