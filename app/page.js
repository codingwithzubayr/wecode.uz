import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import firebaseConfig from '../firebaseconfig';
import { Footer, Navbar, ContactForm } from '../components';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
} from '../sections';

firebase.initializeApp(firebaseConfig);

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
      <ContactForm />
    </div>
    <Footer />
  </div>
);

export default Page;
