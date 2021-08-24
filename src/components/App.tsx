import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Routes } from './pages/Routes';

gsap.registerPlugin(ScrollTrigger);

export default function App(): JSX.Element {
  return (
    <>
      <Routes />
    </>
  );
}
