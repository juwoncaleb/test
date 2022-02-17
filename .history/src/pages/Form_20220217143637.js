import React, {
  useState,
  useEffect,
  useLayoutEffect,
  createContext,
  useContext,
} from "react";
import { useRouter } from "next/router";

function Form() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [changePassword, setChangePassword] = useState("");
  const [email , setEmail] = useState("")
const [male , setMale] = useState("")
  useEffect(() => {
    //you need to call this for nextjs, so this is performed only on client side.
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("name");
      const storedNumber = localStorage.getItem("number");
      const storedPassword = localStorage.getItem("password");
      const storedChangePassword = localStorage.getItem("changePassword");
      const storedMale = localStorage.getItem("male");
      const storedEmail = localStorage.getItem("email");

      
      //restore value from localStorage
      setNumber(storedNumber);
      setName(storedValue); 
      setPassword(storedPassword);
      setChangePassword(storedChangePassword);
      setMale(storedMale)
      setEmail(storedEmail)

    }
  }, []);

  useEffect(
    () => {
      localStorage.setItem("name", name);
      localStorage.setItem("number", number);
      localStorage.setItem("password", password);
      localStorage.setItem("changePassword", changePassword);
      localStorage.setItem("male", male);
      localStorage.setItem("emaikl", email);


    },
    [name],
    [number],
    [password],
    [changePassword],
    [male],
    [email]
  );

  return (
    <div>
      <div className="flex  mt-10 ">
        <div className="flex-1 w-64 ">
          <h3>
            {" "}
            <span className="header_number1 mr-2">1</span> Personal Details
          </h3>
        </div>
        <div className="flex-1 w-64">
          <h3 id="text2_1">
            {" "}
            <span className="header_number2_form1 mr-2">2</span> Identification
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
            <label for="name">Full name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                localStorage.setItem("name", e.target.value); //save input to localstorage
              }}
            />
          </div>
          <div class="input-container">
            <label for="age" required>
              Mobile Number
            </label>
            <input
              type="text"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
                localStorage.setItem("number", e.target.value); //save input to localstorage
              }}
            />
          </div>
          <div class="input-container">
            <label for="phone">Choose password</label>
            <input
              type="text"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                localStorage.setItem("password", e.target.value); //save input to localstorage
              }}
            />
          </div>
          <div class="input-container">
            <label for="email">Confirm password</label>
            <input
              type="text"
              value={changePassword}
              onChange={(e) => {
                setChangePassword(e.target.value);
                localStorage.setItem("changePassword", e.target.value); //save input to localstorage
              }}
            />
          </div>
        </section>
        <section class="right">
          <div class="input-container">
            <label for="address">Profile Photo</label>
            <input type="text" />
          </div>
          <div className="mt-2">
            {" "}
            <label for="address">Gender</label>
          </div>
          <div class=" mt-4">
            <input
              type="radio"
              value={male}
              onChange={(e) => {
                setMale(e.target.value);
                localStorage.setItem("male", e.target.value); //save input to localstorage
              }}
            />
            <label for="address">Male</label>

            <input type="radio" />
            <label for="address">Female </label>

            <input type="radio" />
            <label for="address">Other</label>

            <input type="radio" />
            <label for="address">Prefer not to say</label>

            <div class="input-container">
              <label for="age" required>
                Date of Birth
              </label>
              <input type="text"
              
              />
            </div>
            <div class="input-container">
              <label for="age" required>
                Email
              </label>
              <input type="text" 
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                localStorage.setItem("email", e.target.value); //save input to localstorage
              }} />
            </div>
          </div>
        </section>
      </form>
      <div className="flex justify-around	">
        <button className="btn11 ">Prev</button>
        <button className="btn1" onClick={() => router.push("/Page2")}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Form;
