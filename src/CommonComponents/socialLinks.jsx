import React from "react";

import "bootstrap-icons/font/bootstrap-icons.css";


const SocialLinks=()=>{

  return(
    <>
       <div className="d-flex justify-content-center gap-3 mt-3">
              {["google", "facebook", "linkedin", "twitter"].map((icon) => (
                <button
                  key={icon}
                  className="btn btn-outline-dark rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "45px", height: "45px" }}
                >
                  <i className={`bi bi-${icon}`}></i>
                </button>
              ))}
            </div>
    </>
  )
}

export default SocialLinks