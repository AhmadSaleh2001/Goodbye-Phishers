import React from "react";
import Swal from "sweetalert2";
function TrainModel() {
  Swal.fire({
    icon: "success",
    title: "Model Trained Successfully !",
    text: "",
  });
  return (
    <form className="text-center d-flex flex-column align-items-center">
      <center className="mb-3">
        <h2>Train Model</h2>
      </center>
      <div className="mb-3">
        <label className="form-label">CSV File</label>
        <input
          type="file"
          className="form-control col-sm-12"
          id="File"
          required
          accept=".csv"
        />
      </div>
      <button type="submit" className="btn btn-primary mb-3" disabled={true}>
        Train
      </button>
    </form>
  );
}

export default TrainModel;
