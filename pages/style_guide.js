import React from "react";

export default function style_guide() {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-6">
            <h1 className="display-1">Display 1</h1>
            <h1 className="display-2">Display 2</h1>
            <h1 className="display-3">Display 3</h1>
            <h1 className="display-4">Display 4</h1>

            <p className="h1 mt-5">h1. Website heading</p>
            <p className="h2">h2. Website heading</p>
            <p className="h3">h3. Website heading</p>
            <p className="h4">h4. Website heading</p>
            <p className="h5">h5. Website heading</p>
            <p className="h6">h6. Website heading</p>
          </div>
          <div className="col-6">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>

            <table className="table mt-5">
              <thead>
                <tr className="table-primary">
                  <th scope="row">1</th>
                  <td>Primary</td>
                </tr>
              </thead>
              <tbody>
                <tr className="table-secondary">
                  <th scope="row">1</th>
                  <td>Secondary</td>
                </tr>
                <tr className="table-success">
                  <th scope="row">2</th>
                  <td>Success</td>
                </tr>
                <tr className="table-danger">
                  <th scope="row">3</th>
                  <td>Danger</td>
                </tr>
                <tr className="table-warning">
                  <th scope="row">4</th>
                  <td>Warning</td>
                </tr>
                <tr className="table-info">
                  <th scope="row">5</th>
                  <td>Info</td>
                </tr>
                <tr className="table-light">
                  <th scope="row">6</th>
                  <td>Light</td>
                </tr>
                <tr className="table-dark">
                  <th scope="row">7</th>
                  <td>Dark</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr />
        <div className="row my-5">
          <div className="col-12">
            <div className="alert alert-primary" role="alert">
              A simple primary alert—check it out!
            </div>
            <div className="alert alert-secondary" role="alert">
              A simple secondary alert—check it out!
            </div>
            <div className="alert alert-success" role="alert">
              A simple success alert—check it out!
            </div>
            <div className="alert alert-danger" role="alert">
              A simple danger alert—check it out!
            </div>
            <div className="alert alert-warning" role="alert">
              A simple warning alert—check it out!
            </div>
            <div className="alert alert-info" role="alert">
              A simple info alert—check it out!
            </div>
            <div className="alert alert-light" role="alert">
              A simple light alert—check it out!
            </div>
            <div className="alert alert-dark" role="alert">
              A simple dark alert—check it out!
            </div>
          </div>
        </div>
        <hr />
        <div className="row my-5">
          <div className="col-6">
            <h1>
              Example heading <span className="badge bg-primary">New</span>
            </h1>
            <h2>
              Example heading <span className="badge bg-secondary">New</span>
            </h2>
            <h3>
              Example heading <span className="badge bg-success">New</span>
            </h3>
            <h4>
              Example heading <span className="badge bg-danger">New</span>
            </h4>
            <h5>
              Example heading <span className="badge bg-warning">New</span>
            </h5>
            <h6>
              Example heading <span className="badge bg-info">New</span>
            </h6>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-12">
                <button type="button" className="btn btn-primary">
                  Primary
                </button>
                <button type="button" className="btn btn-secondary">
                  Secondary
                </button>
                <button type="button" className="btn btn-success">
                  Success
                </button>
                <button type="button" className="btn btn-danger">
                  Danger
                </button>
                <button type="button" className="btn btn-warning">
                  Warning
                </button>
                <button type="button" className="btn btn-info">
                  Info
                </button>
                <button type="button" className="btn btn-light">
                  Light
                </button>
                <button type="button" className="btn btn-dark">
                  Dark
                </button>
              </div>
              <div className="col-12 mt-5 ">
                <button type="button" className="btn btn-outline-primary">
                  Primary
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  Secondary
                </button>
                <button type="button" className="btn btn-outline-success">
                  Success
                </button>
                <button type="button" className="btn btn-outline-danger">
                  Danger
                </button>
                <button type="button" className="btn btn-outline-warning">
                  Warning
                </button>
                <button type="button" className="btn btn-outline-info">
                  Info
                </button>
                <button type="button" className="btn btn-outline-light">
                  Light
                </button>
                <button type="button" className="btn btn-outline-dark">
                  Dark
                </button>
              </div>
              <div className="col-12 mt-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-secondary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-success" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-danger" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-warning" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-info" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-dark" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
              <div className="col-12 mt-2">
                <div className="spinner-grow text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-secondary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-success" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-danger" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-warning" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-info" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-dark" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
