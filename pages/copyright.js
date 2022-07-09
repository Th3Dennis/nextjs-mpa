import React from "react";

export default function copyright() {
  return (
    <div className="container border border-2 mt-2 rounded">
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-copyright-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-copyright"
            type="button"
            role="tab"
            aria-controls="pills-copyright"
            aria-selected="true"
          >
            Copyright
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-licenses-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-licenses"
            type="button"
            role="tab"
            aria-controls="pills-licenses"
            aria-selected="false"
          >
            Profile
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-copyright"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
            <h3>Copyright</h3>
        </div>
        <div
          className="tab-pane fade"
          id="pills-licenses"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
            <h3>Licenses</h3>
        </div>
      </div>
    </div>
  );
}
