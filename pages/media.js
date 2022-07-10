import React from "react";

export default function media() {
  return (
    <div className="container mt-5">
        <h2>Note: these video formats are not compatible with all browsers.</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
        <div className="col">
          <div className="card h-100">
            <video autoPlay loop muted height="500px">
                <source src="motorcycle.mp4" type="video/mp4" />
            </video>
            <div className="card-body">
              <h5 className="card-title">MP4</h5>
              <p className="card-text">
                MP4: Moving Picture Expert Group-4
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Source: Dennis Miceli</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <video autoPlay loop muted height="500px">
              <source src="motorcycle.MOV" type="video/mp4"/>
            </video>
            <div className="card-body">
              <h5 className="card-title">MOV</h5>
              <p className="card-text">
            Mov is a video format created by Apple Inc. for the Quicktime Player.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Source: Dennis Miceli</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <video autoPlay loop height="500px">
                <src src="motorcycle.avi" type="video/avi" />
            </video>
            <div className="card-body">
              <h5 className="card-title">AVI</h5>
              <p className="card-text">
               AVI: Audio Video Interleaved
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Source: Dennis Miceli</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
