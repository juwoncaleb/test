import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Page2() {
  const router = useRouter();

  const [idn, setIdn] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  useEffect(() => {
    //you need to call this for nextjs, so this is performed only on client side.
    if (typeof window !== "undefined") {
      const storedIdn = localStorage.getItem("idn");
      const storedAddress = localStorage.getItem("address");
      const storedCountry = localStorage.getItem("country");
      const storedState = localStorage.getItem("state");
      const storedCity = localStorage.getItem("city");
      const storedZip = localStorage.getItem("zip");


      //restore value from localStorage
      setIdn(storedIdn);
      setAddress(storedAddress);
      setCountry(storedCountry);
      setState(storedState)
      setCity(storedCity)
setZip(storedZip)
    }
  }, []);

  useEffect(
    () => {
      localStorage.setItem("idn", idn);
      localStorage.setItem("address", address);
      localStorage.setItem("country", country);
      localStorage.setItem("state", state);
      localStorage.setItem("city", city);
      localStorage.setItem("zip", zip);



    },
    [idn],
    [address],
    [country], 
    [state],
    [city],
    [zip]
  );

  return (
    <div>
      <div className="flex   ">
        <div className="flex-1 w-64">
          <h3 id='text2_1'>
            {" "}
            <span className="header_number2_form1 mr-2">1</span> Personal Details
          </h3>
        </div>
        <div className="flex-1 w-64">
          <h3 id="text2_1" >
            {" "}
            <span className="header_number1 mr-2">2</span> Identification
            Verification
          </h3>
        </div>
        <div className="flex-1 w-64">
          <h3 id="text2_1">
            {" "}
            <span className="header_number2_form1 mr-2">3</span> Education Profile
          </h3>
        </div>
        <div className="flex-1 w-64">
          <h3 id="text2_1">
            {" "}
            <span className="header_number2_form1 mr-2">4</span> Professional Profile
          </h3>
        </div>
      </div>
      <form action="">
        <section class="left">
          <div class="input-container">
            <p className="font-bold text-2xl mb-6">
              Identification Verification
            </p>

            <label for="age" required>
              Identification type
            </label>
            <select className="identification" name="cars" id="cars">
              <option value="volvo">Select</option>
              <option value="saab">Passport</option>
              <option value="opel">Driver's License</option>
              <option value="audi">State ID</option>
            </select>
          </div>
          <div class="input-container">
            <label for="age" required>
              Identity Verification Number
            </label>
            <input
              type="text"
              value={idn}
              onChange={(e) => {
                setIdn(e.target.value);
                localStorage.setItem("name", e.target.value); //save input to localstorage
              }}
            />
          </div>
          <div class="input-container">
            <label for="phone">Upload your ID file</label>
            <input type="text" />
          </div>
        </section>
        <section class="right">
          <p className="font-bold text-2xl mb-4">Address</p>

          <div class="input-container">
            <label for="address">Stress Address</label>

            <input
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                localStorage.setItem("address", e.target.value); //save input to localstorage
              }}
            />
          </div>
          <div className="mt-2"> </div>
          <div class=" ">
            <div class="input-container">
              <label for="age" required>
                Country{" "}
              </label>
              <input type="text"
               value={country}
               onChange={(e) => {
                 setCountry(e.target.value);
                 localStorage.setItem("country", e.target.value); //save input to localstorage
               }}
              />
            </div>

            <div class="input-container">
              <label for="age" required>
                State{" "}
              </label>
              <input type="text"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
                localStorage.setItem("state", e.target.value); //save input to localstorage
              }}
              />
            </div>

            <div class="input-container">
              <label for="age" required>
                City{" "}
              </label>
              <input type="text"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                localStorage.setItem("city", e.target.value); //save input to localstorage
              }}
              />
            </div>
            <div class="input-container">
              <label for="age" required>
                Zip Code{" "}
              </label>
              <input type="text"
              value={zip}
              onChange={(e) => {
                setZip(e.target.value);
                localStorage.setItem("zip", e.target.value); //save input to localstorage
              }}
              />
            </div>
          </div>
        </section>
      </form>
      <div className="flex justify-around	">
        <button className="btn1 " onClick={() => router.push("/Page3")}>Prev</button>
        <button className="btn1" onClick={() => router.push("/Page3")}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Page2;
