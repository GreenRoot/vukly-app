import {HomePage} from '@/pages/home-page';
import {ProfilePage} from '@/pages/profile-page';
import {EnergyPage} from "@/pages/energy-page";
import {CoinsPage} from "@/pages/coins-page";
import {TrainingsPage} from "@/pages/trainings-page";
import {GoalsPage} from "@/pages/goals-page";
import {RatingPage} from "@/pages/rating-page";
import {JournalPage} from "@/pages/journal-page";
import {MealsPage} from "@/pages/meals-page";
import {TrainingPage} from "@/pages/training-page";
import {CoolPage} from "@/pages/cool-page";

export const routesConfig = [
  { path: '/', component: HomePage },
  { path: '/profile', component: ProfilePage },
  { path: '/energy', component: EnergyPage },
  { path: '/coins', component: CoinsPage },
  { path: '/trainings', component: TrainingsPage },
  { path: '/goals', component: GoalsPage },
  { path: '/rating', component: RatingPage },
  { path: '/journal', component: JournalPage },
  { path: '/meals', component: MealsPage },
  { path: '/trainings/:id', component: TrainingPage },
  { path: '/cool', component: CoolPage },
];
