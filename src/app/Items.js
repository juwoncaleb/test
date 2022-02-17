import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
;
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Items({ id, name, price, size, image1, image2, image3 }) {
  const [active, setActive] = useState("");
  const [itemSize, setItemSize] = useState("");
  const [count, setCount] = useState(0);
  const order = console.log(name, itemSize);

  const router = useRouter();
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    console.log(image1);
    console.log(itemSize);
    console.log(count);

    const product = {
      id,
      image1,
      name,
      size,
      price,
      itemSize,
      count,
    };
    setActive("active");
    dispatch(addToBasket(product));
  };

  return (
    <div className="w-screen">
      <div className=" w-full	 flex-col m-0 md:m-5 bg-white z-30 p-10">
        <div className="relative flex flex-col w-full m-0 md:m-5 bg-white z-30 p-10">
          <div class="sliderrr">
            <div class="slides">
              <div id="slide-1">
                <img src={image1} />
              </div>
              <div id="slide-2">
                <img src={image2} />
              </div>
              <div id="slide-3">
                <img src={image3} />
              </div>
            </div>
          </div>
          <p className=" itemsText  t font-semibold text-center display 	">
            N{price} <br />
            {name} {itemSize} x {count}
          </p>{" "}
          {/* <p className="Quatity t font-semibold display "> QUANTITY : {count}</p> */}
          <p className="itemsText t font-semibold text-center display	"> </p>
          <div>
            <div className="flex-container ">
              <div className="flex-chid ">
                <button
                  className="quantity relative left-32	 md:left-32"
                  onClick={() => {
                    setItemSize("Xtra large");
                  }}
                >
                  {" "}
                  <p className="">XL</p>
                </button>
                <button
                  className="quantity relative left-32	 md:left-32"
                  onClick={() => {
                    setItemSize("Large");
                  }}
                >
                  {" "}
                  <p>L</p>
                </button>
                <button
                  className="quantity relative left-32	 md:left-32"
                  onClick={() => {
                    setItemSize("Meduim");
                  }}
                >
                  {" "}
                  <p>M</p>
                </button>
                <button
                  className="quantity relative left-32	 md:left-32"
                  onClick={() => {
                    setItemSize("Small");
                  }}
                >
                  {" "}
                  <p>S</p>
                </button>
              </div>
              <div className="flex-child ">
              <button
              className="quantity relative left-32	 md:left-32"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              {" "}
              <p>+</p>
            </button>
            <button
              className="quantity relative left-32	 md:left-32"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              {" "}
              <p>-</p>
            </button>
              </div>
            </div>
            
          </div>
          <div className="ml-40  mt-1 incremeant"></div>
          <button
            onClick={addItemToBasket}
            className={`but mb-10 ml-0 md:ml-10 ${active} `}
          >
            <p id="btnText">Add to cart</p>
            <div class="check-box">
              <svg
                style={{
                  style: 3,
                  stroke: "white",
                  strokeDasharray: 34,
                  strokeDashoffset: 34,
                  strokeLinecap: "round",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
              >
                <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Items;
