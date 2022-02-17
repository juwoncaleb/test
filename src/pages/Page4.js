import React from "react";

function Page4() {
  return (
    <div>
      <div className="flex   ">
        <div className="flex-1 w-64">
          <h3>
            {" "}
            <span className="header_number1 mr-2">1</span> Personal Details
          </h3>
        </div>
        <div className="flex-1 w-64">
          <h3>
            {" "}
            <span className="header_number2 mr-2">2</span> Identification
            Verification
          </h3>
        </div>
        <div className="flex-1 w-64">
          <h3>
            {" "}
            <span className="header_number3 mr-2">3</span> Education Profile
          </h3>
        </div>
        <div className="flex-1 w-64">
          <h3>
            {" "}
            <span className="header_number4 mr-2">4</span> Professional Profile
          </h3>
        </div>
      </div>
      <form action="">
        <section class="left">
          <div class="input-container">
            <label for="name">Full name</label>
            <input type="text" />
          </div>
          <div class="input-container">
            <label for="age" required>
              Mobile Number
            </label>
            <input type="text" />
          </div>
          <div class="input-container">
            <label for="phone">Choose password</label>
            <input type="text" />
          </div>
          <div class="input-container">
            <label for="email">Confirm password</label>
            <input type="text" />
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
            <input type="radio" />
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
              <input type="text" />
            </div>
            <div class="input-container">
              <label for="age" required>
                Email
              </label>
              <input type="text" />
            </div>
          </div>
        </section>
        <div class="send-container">
          <input type="submit" value="Send" onclick="return true" />
        </div>
      </form>
    </div>
  );
}

export default Page4;
