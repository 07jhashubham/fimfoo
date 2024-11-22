import { useState } from "react";

export default function Pop() {
  const [assessmentSubmitted, setAssessmentSubmitted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInitialButtonClick = () => {
    setAssessmentSubmitted(true);
  };

  const handleFormSubmitClick = () => {
    setFormSubmitted(true);
  };

  const handleNoThanksClick = () => {
    setAssessmentSubmitted(false);
    setFormSubmitted(false);
  };
  return (
    <div className="md:w-2/5 mt-12 md:mt-0">
      <div className="border border-black md:px-12 px-6 rounded-xl pt-12 bg-gradient-to-r from-[#E2E7EB] to-[#BACDD2] "
       style={{
        background: "linear-gradient(to right, rgba(226, 231, 235, 0.8), rgba(186, 205, 210, 0.8))",
      }}>
        {formSubmitted ? (
          // 3rd content after the second submit button click
          <>
  <div className="flex flex-col items-center justify-center">
    <p className="text-4xl md:text-5xl font-serif text-center mb-4 mt-10 md:mt-20">WELCOME TO</p>
    <p className="text-3xl md:text-6xl font-serif text-center mb-10">mytwin</p>
    <p className="text-base md:text-lg text-center mb-10 text-gray-700 sm:mb-5">
      Check your inbox for something special
    </p>
    <div className="flex space-x-6 mb-10 md:mb-40">
      {/* Social Media Icons */}
      <a href="https://Instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/icon1.svg" alt="Instagram" className="w-8 h-8" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="/icon2.svg" alt="Facebook" className="w-8 h-8" />
      </a>
      <a href="https://X.com" target="_blank" rel="noopener noreferrer">
        <img src="/icon3.svg" alt="X" className="w-8 h-8" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="/icon4.svg" alt="Linkedin" className="w-8 h-8" />
      </a>
    </div>
    <p className="text-xs text-gray-500 text-center mb-20 md:mb-10">
      ©2024 mytwin Privacy Policy · Terms of Service Apply
    </p>
  </div>
</>

        ) : assessmentSubmitted ? (
          // 2nd content after the initial button click
          <>
            <p className="md:text-4xl text-2xl text-center tracking-wide">
              Before You Go
            </p>
            <div className="items-center justify-center flex mt-4">
              <p className="text-center">
                Tell us a bit about yourself and your health goals so we can
                provide personalized recommendations that fit your unique needs
              </p>
            </div>
            {/* Input Fields */}
            <div className="flex space-x-4 mt-4">
              <input
                type="text"
                name="first"
                id="first"
                placeholder="First Name"
                className="w-full py-2 text-center border-2 border-black rounded-full opacity-65 sm:placeholder-text-sm"
              />
              <input
                type="text"
                name="last"
                id="last"
                placeholder="Last Name"
                className="w-full py-2 text-center border-2 border-black rounded-full opacity-65 sm:placeholder-text-sm"
              />
            </div>
            <div className="flex items-center justify-center mt-4">
              <select className="w-full py-2 border-2 border-black rounded-full opacity-65 text-center">
                <option value="">Select your age range</option>
                {["20-29", "30-39", "40-49", "50-59", "60-69"].map(
                  (range, index) => (
                    <option key={index} value={range}>
                      {range}
                    </option>
                  )
                )}
              </select>
            </div>

            <div className="flex items-center justify-center mt-4">
              <div className="flex items-center w-full">
                {/* Country code dropdown */}
                <select className="py-2.5 border-2 border-black rounded-l-full opacity-65 text-center">
                  <option value="+1">+1</option>
                  <option value="+91">+91</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                  <option value="+81">+81</option>
                  {/* Add more country codes as needed */}
                </select>

                {/* Mobile number input */}
                <input
                  type="number"
                  placeholder="Mobile Number"
                  className="w-full py-2 border-2 border-l-0 border-black rounded-r-full opacity-65 text-center no-spinner sm:placeholder-text-sm"
                />
              </div>
            </div>

            <div className="flex space-x-4 mt-4">
              <input
                type="text"
                name="city"
                id="city"
                placeholder="City"
                className="w-full py-2 text-center border-2 border-black rounded-full opacity-65 sm:placeholder-text-sm"
              />
              <input
                type="number"
                placeholder="Pincode"
                className="w-full py-2 border-2 border-black rounded-full opacity-65 text-center no-spinner sm:placeholder-text-sm"
              />
            </div>
            <div className="flex items-center justify-center mt-4">
              <div className="w-full py-2 border-2 bg-white  border-black rounded-full opacity-65 text-center">
                <p>Share your activity goals</p>
              </div>
            </div>

            {/* Radio Button Section */}
            <div className="flex flex-col w-full border-2 border-black rounded-md bg-white mt-4 p-4 opacity-65 text-start ">
              <p className="text-sm mb-2">(Select all that apply)</p>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="goals"
                  value="self-care"
                  className="mr-2"
                />
                I like self-care but struggle to keep track of my habits
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="goals"
                  value="homemade-meals"
                  className="mr-2"
                />
                I miss homemade meals and find regular activity challenging
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="goals"
                  value="health-improvement"
                  className="mr-2"
                />
                I want to improve my health and reduce my dependence on
                medications
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="goals"
                  value="stay-healthy"
                  className="mr-2"
                />
                I wish to stay more healthy and fit
              </label>
            </div>

            {/* Checkbox Section for Health Interests */}
            <div className="flex flex-col w-full border-2 border-black rounded-md bg-white mt-4 p-4 opacity-65 text-start ">
              <p className="font-bold">What are your top health interests?</p>
              <p className="text-sm mb-2">(Select all that apply)</p>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="interests"
                  value="energy-health"
                  className="mr-2"
                />
                Improve energy & overall health
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="interests"
                  value="reverse-diabetes"
                  className="mr-2"
                />
                Prevent & reverse diabetes
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="interests"
                  value="obesity-hypertension"
                  className="mr-2"
                />
                Obesity & hypertension
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="interests"
                  value="heart-health"
                  className="mr-2"
                />
                Heart health
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="interests"
                  value="stress-management"
                  className="mr-2"
                />
                Stress management
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="interests"
                  value="healthy-aging"
                  className="mr-2"
                />
                Improve healthy aging
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="interests"
                  value="other"
                  className="mr-2"
                />
                Other
              </label>
            </div>
            {/* Additional Text Fields */}
            <div className="flex flex-col mt-4 space-y-4">
              <input
                type="text"
                placeholder="Other health goals?"
                className="w-full py-2 text-center border-2 border-black rounded-full opacity-65 sm:placeholder-text-sm"
              />
              <input
                type="text"
                placeholder="Where did you hear about mytwin?"
                className="w-full py-2 text-center border-2 border-black rounded-full opacity-65 sm:placeholder-text-sm"
              />
              <input
                type="text"
                placeholder="What actions help you reach your health and fitness goals?"
                className="w-full py-2 text-center border-2 border-black rounded-full opacity-65 sm:placeholder-text-sm"
              />
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                onClick={handleFormSubmitClick}
                className="bg-[#FF6B00] py-2 text-white font-sans rounded-full text-xl w-full"
              >
                Submit
              </button>
            </div>
            <div className="flex justify-center items-center mt-4">
              <button
                onClick={handleNoThanksClick}
                className="underline font-bold text-lg"
              >
                No Thanks
              </button>
            </div>
            <div className="items-center justify-center text-gray-600 flex mt-4">
              <p className="text-center text-xs mb-5">
                * By providing your phone number,you agree to receive recurring
                automated marketing text messages (e.g.cart reminder, health
                program launch) from this platform and third parties acting on
                its behalf. Consent is not a condition to obtain goods or
                services. Msg and data rate may apply. Message frequency varies.
                Reply HELP for help and STOP to cancel.You are also agree to the
                Terms of Services and Privacy Policy.
              </p>
            </div>
            <div className="items-center justify-center text-gray-600 flex mt-4">
              <p className="text-center text-xs mb-10">
                ©2024 mytwin Privacy Policy,Terms of Service Apply
              </p>
            </div>
          </>
        ) : (
          // Initial content
          <>
            <p className="text-center tracking-wide -mt-2 text-[7vw] md:text-[3vw] leading-tight">
              Journey to better <br /> health with mytwin
            </p>

            <div className="items-center justify-center flex mt-6">
              <p className="text-center md:w-[80%]">
                Real-time Metabolic Health Monitoring Platform Designed by
                Experts & Doctors
              </p>
            </div>
            <p
              className="font-bold text-center mt-6"
              style={{ fontSize: "1.2em" }}
            >
              Sign Up Below For:
            </p>
            <div className="flex items-center justify-center">
              <div className="mt-4 space-y-2">
                <div className="flex items-start space-x-5">
                  <img src="kaam.svg" alt="" className="w-3 h-6" />
                  <p className="text-left">
                    Analysis Across 10 Key Health Domains
                  </p>
                </div>
                <div className="flex items-start space-x-5">
                  <img src="kaam.svg" alt="" className="w-3 h-6" />
                  <p className="text-left">Monitoring 100+ Biomarkers</p>
                </div>
                <div className="flex items-start space-x-5">
                  <img src="kaam.svg" alt="" className="w-3 h-6" />
                  <p className="text-left">
                    Daily Tracking: Food, Activity, Sleep, Vitals & Stress
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-4 w-full max-w-md mx-auto">
              {/* Email Input Box */}
              <input
                type="email"
                placeholder="Enter e-mail address"
                className="w-full py-2 text-center border-2 border-black rounded-full opacity-85"
              />
              {/* Button */}
              <button
                onClick={handleInitialButtonClick}
                className="bg-[#FF6B00] py-2 text-white font-sans rounded-full w-full mt-4"
              >
                Get Free Health Assessment Score
              </button>
            </div>
            <div className="mt-4 text-center mb-4">
              Join The mytwin community today for early access & exclusive
              benefits
            </div>
          </>
        )}
      </div>
    </div>
  );
}
