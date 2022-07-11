import React from "react";

export default function copyright() {
  return (
    <>
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
            Licenses
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
            <p>
            Copyright is the legal term used to declare and prove who owns the intellectual property (the code, text, etc.).<br/>
            Abstract example with physical property: You buy a house, you own the house.
            </p>
        </div>
        <div
          className="tab-pane fade"
          id="pills-licenses"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
            <h3>Licenses</h3>
            <p>Licensing is the legal term used to describe the terms under which people are allowed to use the copyrighted material.<br/>
            Abstract example with physical property: You rent the house and the rental agreement is like a license.
            </p>
        </div>
      </div>
    </div>
    <div className="container mt-5">
    <form>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="firstName">Firstname</label>
                    <input id="firstName" type="text" className="form-control" placeholder="Ihr Vorname" autoComplete="true"/>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="lastName">Lastname</label>
                    <input id="lastName" type="text" className="form-control" placeholder="Ihr Nachname" autoComplete="true"/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="email">email</label>
                    <input id="email" type="email" className="form-control" placeholder="info@example.com" autoComplete="true"/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" className="form-control" placeholder="Ihre Nachricht" rows="5"></textarea>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12">
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">Send</button>
                  </div>
                </div>
              </div>
            </form>
    </div>
    </>
  );
}
