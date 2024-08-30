import { Link } from "react-router-dom";
import home from './index.module.scss';
import profile from '@/shared/img/profile_vukly.webp'
import energy from '@/shared/img/energy_vukly.webp'
import coins from '@/shared/img/coins_vukly.webp'
import trainings from "@/shared/img/trainings_vukly.webp";
import goals from '@/shared/img/goals_vukly.webp'
import rating from "@/shared/img/rating_vukly.webp";
import journal from "@/shared/img/journal_vukly.webp";
import meals from '@/shared/img/meals_vukly.webp'

export const HomePage = () => {
  return (
    <div className={home.body}>
      <div className={home.title}>vukly</div>
      <div className={home.menu}>
        <Link style={{backgroundImage: `url(${profile})`}} className={`${home.card} ${home.cardGreen} ${home.profile}`} to="/profile">profile</Link>
        <Link style={{backgroundImage: `url(${energy})`}} className={`${home.card} ${home.cardGreen} ${home.energy}`} to="/energy">
          <div className={`${home.energy_count}`}>8000</div>
          <div>energy</div>
        </Link>
        <Link style={{backgroundImage: `url(${coins})`}} className={`${home.card} ${home.cardGreen} ${home.coins}`} to="/coins">
          <div className={`${home.coins_count}`}>0</div>
          <div>coins</div>
        </Link>
        <Link className={`${home.card} ${home.content}`} to="/">content</Link>
        <Link style={{backgroundImage: `url(${trainings})`}} className={`${home.card} ${home.cardBlue} ${home.trainings}`} to="/trainings">trainings</Link>
        <Link className={`${home.card} ${home.cardGreen} ${home.goals}`} to="/goals">
          <div style={{backgroundImage: `url(${goals})`}} className={`${home.goals_img}`}></div>
          <div>goals</div>
        </Link>
        <Link style={{backgroundImage: `url(${rating})`}} className={`${home.card} ${home.cardGreen} ${home.rating}`} to="/rating">rating</Link>
        <Link style={{backgroundImage: `url(${journal})`}} className={`${home.card} ${home.cardGreen} ${home.journal}`} to="/journal">journal</Link>
        <Link style={{backgroundImage: `url(${meals})`}} className={`${home.card} ${home.cardBlue} ${home.meals}`} to="/meals">meals</Link>
      </div>
    </div>
  );
};

