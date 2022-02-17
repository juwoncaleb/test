import Head from "next/head";
import Header from "../components/Header";
import LandingPage from "../components/landingPage";

export default function Home({ products }) {
  return (
    <article>
     <Header/> 
    <LandingPage/>
     
    </article>
  );
}

