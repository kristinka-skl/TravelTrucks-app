'use client';
import CamperDetails from '@/app/components/CamperDetails/CamperDetails';
import css from './camperDetails.module.css';
import { Camper } from '@/app/types/camper';

import Booking from '@/app/components/Booking/Booking';
import { useState } from 'react';
import CamperFeatures from '@/app/components/CamperFeatures/CamperFeatures';
import Reviews from '@/app/components/Reviews/Reviews';

interface CamperDetailsClientPageProps {
  camper: Camper;
}
export default function CamperDetailsClientPage({
  camper,
}: CamperDetailsClientPageProps) {
  const [activeTab, setActiveTab] = useState('feature');

  return (
    <section className={css.sectionCamperDetailsPage}>
      <h1 className={css.hidden}>Camper details</h1>
      <section className={css.sectionCamperDescrAndGallery}>
        <h2 className={css.hidden}>Camper Description and gallery</h2>
        <CamperDetails camper={camper} />
      </section>
      <nav className={css.sectionNav}>
        <ul className={css.navList}>
          <li>
            <button
              className={`${css.tabBtn} ${activeTab === 'feature' ? css.activeTabBtn : ''}`}
              type="button"
              onClick={() => setActiveTab('feature')}
            >
              Features
            </button>
          </li>
          <li>
            <button
              className={`${css.tabBtn} ${activeTab === 'reviews' ? css.activeTabBtn : ''}`}
              type="button"
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
          </li>
        </ul>
      </nav>
      <div className={css.tabsAndBooking}>
        <section className={css.sectionCamperFeaturesAndReviews}>
          <h2 className={css.hidden}>Camper features and reviews</h2>

          {activeTab === 'feature' && <CamperFeatures camper={camper} />}
          {activeTab === 'reviews' && <Reviews camper={camper} />}
        </section>
        <section className={css.sectionBooking}>
          <Booking />
        </section>
      </div>
    </section>
  );
}
