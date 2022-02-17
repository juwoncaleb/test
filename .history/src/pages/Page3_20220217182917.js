import React, { useState , useEffect } from "react";
import { useRouter } from "next/router";

function Page2() {



  const [fname, setFname] = useState("");
  const [numbermob, setNumbermob] = useState("");
  const [passwordd, setPasswordd] = useState("");
  const [confirmPasswordd, setConfirmPasswordd] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  useEffect(() => {
    //you need to call this for nextjs, so this is performed only on client side.
    if (typeof window !== "undefined") {
      const storedFname = localStorage.getItem("fname");
      const storedNumbermob = localStorage.getItem("numbermob");
      const storedPasswordd = localStorage.getItem("passwordd");
      const storedConfirmPasswordd = localStorage.getItem("confirmPasswordd");
      const storedCity = localStorage.getItem("city");
      const storedZip = localStorage.getItem("zip");


      //restore value from localStorage
      setFname(storedFname);
      setNumbermob(storedNumbermob);
      setPasswordd(storedPasswordd);
      setConfirmPasswordd(storedConfirmPasswordd)
      setCity(storedCity)
setZip(storedZip)
    }
  }, []);

  useEffect(
    () => {
      localStorage.setItem("fname", fname);
      localStorage.setItem("numbermob", numbermob);
      localStorage.setItem("passwordd", passwordd);
      localStorage.setItem("confirmPasswordd", confirmPasswordd);
      localStorage.setItem("city", city);
      localStorage.setItem("zip", zip);



    },
    [fname],
    [numbermob],
    [passwordd], 
    [confirmPasswordd],
    [city],
    [zip]
  );

  const [Profile, setProfile] = useState(false);
  const [Save, setSave] = useState(false);
const [Count , setCount] = useState("")
const education_count = ()=>{
  setCount(Count + 1 )
}
console.log(Count);
  return (
    <div>
      <div className="flex   ">
        <div className="flex-1 w-64">
          <h3 >
            {" "}
            <span className="header_number2_form1 mr-2">1</span> Personal Details
          </h3>
        </div>
        <div className="flex-1 w-64">
          <h3>
            {" "}
            <span className="header_number2_form1 mr-2">2</span> Identification
            Verification
          </h3>
        </div>
        <div className="flex-1 w-64">
          <h3>
            {" "}
            <span className="header_number2_form1 mr-2">3</span> Education Profile
          </h3>
        </div>
        <div className="flex-1 w-64">
          <h3>
            {" "}
            <span className="header_number4 mr-2">4</span> Professional Profile
          </h3>
        </div>
      </div>
      <p className="ml-5">Languages</p>

      <div className="p-5">
        <input className="ml-1 mr-2" type="checkbox" />
        <label>English</label>
        <input className="ml-5  mr-2" type="checkbox" />
        <label>Spanish</label>

        <input className="ml-5  mr-2" type="checkbox" />
        <label>French</label>
        <p className="feild_text">This Feild is required</p>
      </div>
      <p className="education">Education Profile</p>
      <p
        className="education_Add"
        onClick={() => {
          setProfile(true);
        }}
      >
        Add Eduction Profile +
      </p>
      {Profile ? (
        <form>
          <section class="left">
            <div class="input-container">
              <label for="name">Full name</label>
              <input type="text" 
              value={fname}
              onChange={(e) => {
                setFname(e.target.value);
                localStorage.setItem("fname", e.target.value); //save input to localstorage
              }}
              />
            </div>
            <div class="input-container">
              <label for="age" required>
                Mobile Number
              </label>
              <input type="text"
              value={numbermob}
              onChange={(e) => {
                setNumbermob(e.target.value);
                localStorage.setItem("numbermob", e.target.value); //save input to localstorage
              }}
              />
            </div>
            <div class="input-container">
              <label for="phone">Choose password</label>
              <input type="text"
              value={passwordd}
              onChange={(e) => {
                setPasswordd(e.target.value);
                localStorage.setItem("passwordd", e.target.value); //save input to localstorage
              }}
              />
            </div>
            <div class="input-container">
              <label for="email">Confirm password</label>
              <input type="text" 
              value={confirmPasswordd}
              onChange={(e) => {
                setConfirmPasswordd(e.target.value);
                localStorage.setItem("confirmPasswordd", e.target.value); //save input to localstorage
              }}
              />
            </div>

            <button className="cancel">Cancel</button>
            <button className="save" onClick={ education_count}>
              Save
            </button>
          </section>
        </form>
      ) : null}

      {/* {Save  ? 
      
         : null}  */}
      <div className="savedIten">

        <p> {Count} </p>
      </div>

      <div className="flex justify-around	">
        <button className="btn1 " onClick={() => router.push("/Page3")}>Prev</button>
        <button className="btn1" onClick={() => router.push("/Page4")}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Page2;
