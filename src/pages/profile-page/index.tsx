import { useState } from "react";
import { Link } from "react-router-dom";
import BackArrow from "@/shared/icons/back-arrow.svg";
import styles from "./index.module.scss";
import { GainTab } from "./gain-tab";
import { KeepTab } from "./keep-tab";
import { LossTab } from "./loss-tab";

type TabName = keyof typeof tabComponents;

const tabComponents = {
  Gain: GainTab,
  Keep: KeepTab,
  Loss: LossTab,
};

export const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState<TabName>("Gain");

  const ActiveTabComponent = tabComponents[activeTab];

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backButton}>
        <img src={BackArrow} alt="Back" />
      </Link>
      <h1 className={styles.title}>Advice for weight</h1>
      <div className={styles.tabs}>
        {Object.keys(tabComponents).map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ""}`}
            onClick={() => setActiveTab(tab as TabName)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        <ActiveTabComponent />
      </div>
    </div>
  );
};
