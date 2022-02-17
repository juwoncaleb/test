import { useRouter } from "next/router";
import Cookie from "js-cookie";
import { parseCookies } from "../helpers/index";
import { reduxForm } from "redux-form";

function P() {
    const handleParam = () => (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuery((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };
      // F

  return (
    
    <div>
     
      <form action="">
        <section class="left">
          <div class="input-container">
            <label for="name">Full name</label>
            <input
            name = 'name'
            value={query.name}
              type="text"
              onChange={handleParam()}
             
            />
            </div>
            <div class="input-container">
            <label for="name">cab</label>
            <input
              type="text"
              value={cab}
              onChange={(e) => setCab(e.target.value)}
             
            />
            </div>
          </section>
      </form>
     
    </div>
  );
}

export default P;
