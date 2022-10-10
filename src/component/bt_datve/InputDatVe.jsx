import React, { Component } from "react";
import { connect } from "react-redux";

class InputDatVe extends Component {
  render() {
    return (
      <div style={{ padding: "40px" }} className="row justify-center">
        <div className="mr-5">
          <h3>Nhập số điện thoại của bạn</h3>
          <input className="form-control" />
        </div>
        <div>
          <h3>Số lượng vé muốn mua</h3>
          <input className="form-control" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    datVeReducer: state.DatVeReducer,
  };
};

export default connect(mapStateToProps, null)(InputDatVe);
