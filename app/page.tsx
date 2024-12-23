"use client"
import Nav from "./nave";
import Landing from "./landing";
import Scroller from "./scroller";
import Hero1 from "./hero1";
import Eyes from "./eyes";
import Projects from "./projects";
import LocomotiveScroll from 'locomotive-scroll';
import Reviews from "./reviews";
import Card from "./card";
import Footer from "./footer";
import { useEffect } from "react";
import { ImPriceTag } from "react-icons/im";
export default function Home() {
  useEffect(()=>{
    const locomotiveScroll = new LocomotiveScroll();

  },[])
  return (
    <>
    <Nav />
    <Landing />
    <Scroller />
    <Hero1 />
    <Eyes />
    <Projects />
    <Reviews />
    <Card />
    <Footer />
    </>
  );
}
