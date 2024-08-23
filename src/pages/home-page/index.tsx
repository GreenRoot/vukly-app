import { Link } from "react-router-dom";
import home from './index.module.scss';
import profile from '@/shared/img/profile_vukly.png'

export const HomePage = () => {
  return (
    <div className={home.body}>
      <div className={home.title}>vukly</div>
      <div className={home.menu}>
        <Link style={{backgroundImage: `url(${profile})`}} className={`${home.card} ${home.cardGreen} ${home.profile}`} to="/profile">profile</Link>
        <Link className={`${home.card} ${home.cardGreen} ${home.energy}`} to="/energy">energy</Link>
        <Link className={`${home.card} ${home.cardGreen} ${home.coins}`} to="/coins">coins</Link>
        <Link className={`${home.card} ${home.content}`} to="/">content</Link>
        <Link className={`${home.card} ${home.cardBlue} ${home.trainings}`} to="/trainings">trainings</Link>
        <Link className={`${home.card} ${home.cardGreen} ${home.goals}`} to="/goals">goals</Link>
        <Link className={`${home.card} ${home.cardGreen} ${home.rating}`} to="/rating">rating</Link>
        <Link className={`${home.card} ${home.cardGreen} ${home.journal}`} to="/journal">journal</Link>
        <Link className={`${home.card} ${home.cardBlue} ${home.meals}`} to="/meals">meals</Link>
      </div>
    </div>
  );
};

