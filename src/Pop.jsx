import { useState } from "react";

export default function Pop() {
  const [assessmentSubmitted, setAssessmentSubmitted] = useState(false);

  const handleButtonClick = () => {
    setAssessmentSubmitted(true);
  };

  return (
    <div className="md:w-2/5 mt-12 md:mt-0">
      <div className="border border-black md:px-12 px-6 rounded-xl pt-12 bg-gradient-to-r from-[#E2E7EB] to-[#BACDD2] ">
        {assessmentSubmitted ? (
          // Content after the button click
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
            <div className="flex space-x-4 mt-4">
              <input
                type="text"
                name="first"
                id="first"
                placeholder="First Name"
                className="w-full py-2 text-center border-2 border-black rounded-full opacity-65"
              />
              <input
                type="text"
                name="last"
                id="last"
                placeholder="Last Name"
                className="w-full py-2 text-center border-2 border-black rounded-full opacity-65"
              />
            </div>
            <div className="flex items-center justify-center mt-4">
              <select className="w-full py-2 border-2 border-black rounded-full opacity-65 text-center">
                <option value="">Select your age</option>
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center justify-center mt-4">
              <input
                type="number"
                placeholder="Mobile Number"
                className="w-full py-2 border-2 border-black rounded-full opacity-65 text-center no-spinner"
              />
            </div>
            <div className="flex space-x-4 mt-4">
              <input
                type="text"
                name="city"
                id="city"
                placeholder="City"
                className="w-full py-2 text-center border-2 border-black rounded-full opacity-65"
              />
              <input
                type="number"
                placeholder="Pincode"
                className="w-full py-2 border-2 border-black rounded-full opacity-65 text-center no-spinner"
              />
            </div>
            <div className="flex items-center justify-center mt-4">
              <div className="w-full py-2 border-2 bg-white  border-black rounded-full opacity-65 text-center">
                <p>Share your activity goals</p>
              </div>
            </div>

            {/* Radio Button Section */}
            <div className="flex flex-col w-full border-2 border-black rounded-md bg-white mt-4 p-4 opacity-65 text-start ">
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
                className="w-full py-2 text-center border-2 border-black rounded-full opacity-65"
              />
              <input
                type="text"
                placeholder="Where did you hear about MyTwin?"
                className="w-full py-2 text-center border-2 border-black rounded-full opacity-65"
              />
              <input
                type="text"
                placeholder="What actions help you reach your health and fitness goals?"
                className="w-full py-2 text-center border-2 border-black rounded-full opacity-65"
              />
            </div>
            <div className="flex justify-center items-center mt-4">
              <button
                onClick={handleButtonClick}
                className=" bg-[#FF6B00] py-2 text-white font-sans rounded-full text-xl w-full"
              >
                Submit
              </button>
            </div>
            <div className="flex justify-center items-center mt-4">
              <button className=" underline font-bold text-lg">
                No Thanks
              </button>
            </div>
            <div className="items-center justify-center text-gray-600 flex mt-4">
              <p className="text-center text-xs mb-10">
                ©2024 mytwin Privacy Policy,Terms of Service applied
              </p>
            </div>
          </>
        ) : (
          // Initial content
          <>
            <p className="md:text-4xl text-2xl text-center tracking-wide">
              Journey to better health with mytwin
            </p>
            <div className="items-center justify-center flex mt-4">
              <p className="text-center md:w-[80%]">
                Real-time Metabolic Health Monitoring Platform Designed by Experts & Doctors
              </p>
            </div>
            <p className="font-bold text-center mt-6" style={{ fontSize: "1.2em" }} 
                >Join now for </p>
            <div className="flex items-center justify-center">
              <div className="mt-4 space-y-2">
                <div className="flex items-start space-x-5">
                  <img src="kaam.svg" alt="" className="w-4 h-6" />
                  <p className="text-left">
                    Analysis Across 10 Key Health Domains
                  </p>
                </div>
                <div className="flex items-start space-x-5">
                  <img src="kaam.svg" alt="" className="w-4 h-6" />
                  <p className="text-left">
                    Monitoring 100+ Biomarkers</p>
                </div>
                <div className="flex items-start space-x-5">
                  <img src="kaam.svg" alt="" className="w-4 h-6" />
                  <p className="text-left">
                    Daily Tracking: Food, Activity, Sleep, Vitals & Stress
                  </p>
                </div>
                <div className="flex items-start space-x-5">
                  <img src="kaam.svg" alt="" className="w-4 h-6" />
                  <p className="text-left">
                    Early Detection, Warnings & Prevention of Health Risks</p>
                </div>
                <div className="flex items-start space-x-5">
                  <img src="kaam.svg" alt="" className="w-4 h-6" />
                  <p className="text-left">
                    Real-Time Insights & Personalised Guidance
                  </p>
                </div>
                <div className="flex items-start space-x-5">
                  <img src="kaam.svg" alt="" className="w-4 h-6" />
                  <p className="text-left">
                    Tailored Health Interventions</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter e-mail address"
                className="w-full py-2 text-center border-2 border-black rounded-full opacity-65" // Updated to rounded-lg
              />
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                onClick={handleButtonClick}
                className="mx-8 bg-[#FF6B00] py-2 text-white font-sans rounded-full w-full"
              >
                Get free health assessment report
              </button>
            </div>
            <div className="mt-4 text-center mb-4">
              Join The mytwin community today for early access & exclusive
              benefits
            </div>
            <div className="mt-2 text-center mb-8" style={{ fontSize: "0.8em" }}>
            Privacy Policy . Term of service applied
  </div>
          </>
        )}
      </div>
    </div>
  );
}
