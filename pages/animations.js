import React from "react";

export default function animations() {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col">
            <h2>CSS animation </h2>
            <div className="animationDiv"></div>
          </div>
          <div className="col">
            <h2>SVG animation </h2>
            <svg viewBox="0 0 50 50">
              <rect width="10" height="10" fill="green">
                <animate
                  attributeName="rx"
                  values="0;20;0"
                  dur="4s"
                  repeatCount="10"
                />
              </rect>
            </svg>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
