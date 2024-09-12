import React, { useState } from "react";
import vector from "../Vector.png";
import vector2 from "../Vector2.png";
import left from "../leftarrow.png"
import right from "../rigtharrow.png"

export default function Gallery() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      const imageURL = URL.createObjectURL(file); // Convert file to a URL
      setImages([...images, imageURL]); // Add the new image URL to the list
    }
  };

  const scrollLeft = () => {
    const gallery = document.getElementById("gallery");
    gallery.scrollBy({ left: -200, behavior: "smooth" }); // Scroll left by 200px
  };

  const scrollRight = () => {
    const gallery = document.getElementById("gallery");
    gallery.scrollBy({ left: 200, behavior: "smooth" }); // Scroll right by 200px
  };

  return (
    <>
      <div className="flex flex-row w-full h-full">
        <div className="w-[10%] h-full">
          <div className="w-[50%] h-[50%] flex flex-col mx-auto justify-between mt-[10px]">
            <img src={vector} className="w-[50px]" alt="Vector 1" />
            <img src={vector2} className="w-[50px]" alt="Vector 2" />
          </div>
        </div>
        <div className="w-[85%] h-full flex flex-col mt-[10px]">
          <div className="w-full h-[40%] flex flex-col lg:flex-row lg:justify-between">
            <button className="w-full mb-[10px] lg-mb-[0px] lg:w-[40%] h-full lg:h-[80%] bg-black text-white rounded-[20px]">
              Gallery
            </button>
            <div className="lg:w-[50%] h-full lg:h-[70%] flex flex-row justify-between">
              <button
                className="w-[50%]  rounded-[104px] text-white"
                style={{
                  boxShadow: `inset 0px 3.26px 3.26px 0px #FFFFFF26,inset 0px 0px 48.91px 0px #FFFFFF0D,9px 10px 7.1px 0px #00000066,-0.5px -0.5px 6.9px 0px #FFFFFF40`,
                }}
              >
                <label htmlFor="upload" className="cursor-pointer   text-[10px] lg:text-[20px]">
                  + Add Image
                </label>
                <input
                  type="file"
                  id="upload"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </button>
              <div className="w-[40%] h-[80%] flex flex-row justify-between">
                <button
                  className="rounded-full w-[45px] h-[45px] "
                  style={{
                    background:
                      "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
                    boxShadow: `4px 5px 30px 5px #101213,-5px -3px 30px -10px #96BEE7`,
                  }}
                  onClick={scrollLeft}
                >
                  <img src={left} alt="" className="mx-auto"></img>
                </button>
                <button
                  className="rounded-full w-[45px] h-[45px] "
                  style={{
                    background:
                      "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
                    boxShadow: `4px 5px 30px 5px #101213,-5px -3px 30px -10px #96BEE7`,
                  }}
                  onClick={scrollRight}
                >
                  <img src={right} alt="" className="mx-auto"></img>
                </button>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div
           id="gallery"
            className="flex  h-[65%]  flex-row overflow-x-auto space-x-4  no-scrollbar w-full lg:h-full"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 ml-[10px]  w-[120px] h-[120px] lg:w-[160px] lg:h-[179px] bg-cover mt-[10px] rounded-[24px] hover:scale-110 hover:shadow-xl hover:shadow-black  aspect-square duration-300 hover:-rotate-2  hover:w-[170px] hover:h-[189px]"
                style={{ 
                    backgroundImage: `url(${image})`,
                    filter: 'grayscale(100%)', // Initial black and white
                    transition: ' transform 0.9s ease' // Smooth transition for color
                  }}
                  onMouseEnter={(e) => (e.target.style.filter = 'grayscale(0%)')} // Show color on hover
                  onMouseLeave={(e) => (e.target.style.filter = 'grayscale(100%)')} // Revert to black and white
              ></div>
            ))}

            
    
          
          </div>
        </div>
      </div>
    </>
  );
}
