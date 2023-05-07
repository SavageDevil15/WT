function App() {
  return (<>
    <div className="content container-fluid">
      <div className="text-center" style={{ marginBottom: 10 }}>
        <figure>
          <img
            src="images/vit.png"
            alt="Error !!!"
            className="img-fluid"
            width={128}/>
        </figure>
      </div>
      <form
        id="inputData"
        className="needs-validation"
        noValidate>
        <div className="row">
          <div className="col-lg-12">
            {/* Operating System */}
            <h5>Operating System</h5>
            <div id="inputFormRow1">
              <div className="input-group mb-3">
                <input
                  type="text"
                  name="subject1MSE"
                  className="form-control m-input"
                  placeholder="MSE Marks (30)"
                  autoComplete="off"
                  required=""
                  noValidate/>
                <input
                  type="text"
                  name="subject1ESE"
                  className="form-control m-input"
                  placeholder="ESE Marks (70)"
                  autoComplete="off"
                  required=""/>
              </div>
            </div>
            {/* Computer Networks */}
            <br />
            <h5>Computer Networks</h5>
            <div id="inputFormRow2">
              <div className="input-group mb-3">
                <input
                  type="text"
                  name="subject2MSE"
                  className="form-control m-input"
                  placeholder="MSE Marks (30)"
                  autoComplete="off"
                  required=""/>
                <input
                  type="text"
                  name="subject2ESE"
                  className="form-control m-input"
                  placeholder="ESE Marks (70)"
                  autoComplete="off"
                  required=""/>
              </div>
            </div>
            {/* Cyber Security */}
            <br />
            <h5>Cyber Security</h5>
            <div id="inputFormRow3">
              <div className="input-group mb-3">
                <input
                  type="text"
                  name="subject3MSE"
                  className="form-control m-input"
                  placeholder="MSE Marks (30)"
                  autoComplete="off"
                  required=""/>
                <input
                  type="text"
                  name="subject3ESE"
                  className="form-control m-input"
                  placeholder="ESE Marks (70)"
                  autoComplete="off"
                  required=""/>
              </div>
            </div>
            {/* Artifical Intelligence */}
            <br />
            <h5>Artifical Intelligence</h5>
            <div id="inputFormRow4">
              <div className="input-group mb-3">
                <input
                  type="text"
                  name="subject4MSE"
                  className="form-control m-input"
                  placeholder="MSE Marks (30)"
                  autoComplete="off"
                  required=""/>
                <input
                  type="text"
                  name="subject4ESE"
                  className="form-control m-input"
                  placeholder="ESE Marks (70)"
                  autoComplete="off"
                  required=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            className="btn btn-info"
            id="resultButton"
            type="submit"
            style={{ marginTop: 20 }}>
            Show Result
          </button>
        </div>
      </form>
    </div>

  </>);
}

export default App;
