import React from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";
import Footer from "../components/Footer";


function Shop() {
  const router = useRouter();

  return (
    <div>
      <Header />
      <h1 className="text t text-2xl text-center font-bold  md:font-extrabold	">
        {" "}
        SALES : EXTRA 20% OFF{" "}
      </h1>
      <br />
      <h1 className="text t text-2xl text-center font-bold  md:font-extrabold	">
        (ALREADY UP TO 80% OFF)
      </h1>
      <div class="container mt-10">
        <div class="item">
          <img
            onClick={() => router.push("/Caps")}
            src="/img/l7.jpg"
            alt="unsplash"
          />
          <h4 className="text-center t font-bold 	">KAKI</h4>
        </div>
        <div class="item">
          <img
            onClick={() => router.push("/Jacket")}
            src="/img/model.png"
            alt="unsplash"
          />
          <h4 className="text-center t font-bold	">GYM WEAR</h4>
        </div>
        <div class="item">
          <img
           onClick={() => router.push("/Jacket")}
            src="/img/l10.jpg"
            alt="unsplash"
          />
          <h4 className="text-center t	 font-bold">TOPS</h4>
        </div>
        <div class="item">
          <img
           onClick={() => router.push("/Jacket")}
            src="/img/l2.jpg"
            alt="unsplash"
          />
          <h4 className="text-center t	 font-bold">ACCESSORIES</h4>
        </div>
        <div class="item">
          <img
           onClick={() => router.push("/Jacket")}
            src="/img/l3.jpg"
            alt="unsplash"
          />
          <h4 className="text-center t font-bold	">SWEATER</h4>
        </div>
        <div class="item">
          <img
            onClick={() => router.push("/Jacket")}
            src="/img/l4.jpg"
            alt="unsplash"
          />
          <h4 className="text-center t font-bold	">BAGS</h4>
        </div>
        <div class="item">
          <img
            onClick={() => router.push("/Jacket")}
            src="/img/l9.jpg"
            alt="unsplash"
          />
          <h4 className="text-center t font-bold	">SHOES</h4>
        </div>
        <div class="item">
          <img
           onClick={() => router.push("/Jacket")}
            src="/img/l6.jpg"
            alt="unsplash"
          />
          <h4 className="text-center t font-bold	"> JERSEY</h4>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Shop;
