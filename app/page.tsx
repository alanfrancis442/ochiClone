"use client"
import Nav from "./nave";
import Landing from "./landing";
import Scroller from "./scroller";
import Hero1 from "./hero1";
import Eyes from "./eyes";
import Projects from "./projects";
import LocomotiveScroll from 'locomotive-scroll';

export default function Home() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <Nav />
    <Landing />
    <Scroller />
    <Hero1 />
    <Eyes />
    <Projects />
    </>
  );
}
