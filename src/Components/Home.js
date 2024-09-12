import react, { useState } from "react";
import vector from "../Vector.png";
import vector2 from "../Vector2.png";
import Gallery from "./Gallery";
export default function Home() {
  const [selected, setSelected] = useState("About Me");

  const toggleButtons = ["About Me", "Experiences", "Recommended"];
  return (
    <>
      <div
        className="w-screen h-screen "
        style={{
          background: "linear-gradient(180deg, #373E44 -100%, #191B1F 100%)",
        }}
      >
        <div className="flex flex-row w-[90%] h-full  mx-auto">
          <div className="hidden  lg:block lg:w-1/2 h-full ">
            <div
              className="w-[80%] h-[90%]   flex mx-auto mt-[40px] rounded-[10px]"
              style={{ background: " rgba(97, 97, 97, 0.82)" }}
            ></div>
          </div>
          <div className=" w-full lg:w-1/2 h-full mx-auto  flex flex-col justify-evenly rounded-[10px]">
            <div className="w-[95%] mx-auto h-[40%]  rounded-[10px] bg-[rgba(54,60,67,1)] shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0,0.4)]">
              <div className="flex flex-row w-full h-full">
                <div className="w-[10%] h-full  ">
                  <div className="w-[50%]  h-[50%]  flex flex-col mx-auto justify-between mt-[10px]">
                    <img src={vector} alt="" className="w-[50px]"></img>
                    <img src={vector2} alt="" className="w-[50px]"></img>
                  </div>
                </div>
                <div className="w-[80%] h-full  flex flex-col mt-[10px]">
                  <div className="w-full h-[20%]  flex flex-row justify-between">
                    <div className="relative w-full p-2 bg-black rounded-[29px] shadow-[0px_4.96px_12.4px_2.48px_#00000040_inset]">
                      {/* Background that moves with the selected button */}
                      <div
                        className={`absolute shadow-xl  shadow-black top-[2px] left-0 w-1/3 rounded-[23px]  h-[90%] bg-[#28292F] rounded-full transition-transform duration-300 ease-in-out transform ${
                          selected === "About Me"
                            ? "translate-x-0"
                            : selected === "Experiences"
                            ? "translate-x-full"
                            : "translate-x-[200%]"
                        }`}
                      ></div>

                      {/* Toggle Buttons */}
                      <div className="relative z-10 flex justify-between w-full ">
                        {toggleButtons.map((button, index) => (
                          <button
                            key={index}
                            className={`relative z-20 w-1/3 py-2 text-[8px]  lg:text-[15px] font-semibold text-sm rounded-full transition-colors duration-300 ${
                              selected === button
                                ? "text-white"
                                : "text-gray-400 hover:text-white"
                            }`}
                            onClick={() => setSelected(button)}
                          >
                            {button}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[70%]  flex flex-row text-[#969696] text-[20px] overflow-y-auto scrollbar-custom">
                    
                      <p className="mt-[20px]">
                      I am a passionate coding and programming enthusiast. 
                      I find joy in unraveling the complexities of algorithms, 
                      solving problems through lines of code, and creating 
                      innovative solutions that bridge the gap between imagination 
                      and technology. I thrive on building dynamic and interactive 
                      web applications, constantly exploring the latest trends and 
                      best practices in the software development landscape.<br></br>
                      </p>
                 
                  </div>
                </div>
              </div>
            </div>
            <div class="w-[80%] mx-auto h-[5px] bg-gradient-to-b from-[rgba(40,40,40,0.1)] to-[rgba(248,248,248,0.1)]"></div>
            <div className="w-[95%] mx-auto h-[40%]   rounded-[10px] bg-[rgba(54,60,67,1)] shadow-[5.67px_5.67px_3.78px_0px_#00000066]">
              <Gallery />
            </div>
            <div class="w-[80%] mx-auto h-[5px] bg-gradient-to-b from-[rgba(40,40,40,0.1)] to-[rgba(248,248,248,0.1)]"></div>

          </div>
        </div>
      </div>
    </>
  );
}
