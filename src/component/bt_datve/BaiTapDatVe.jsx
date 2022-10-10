import React, { Component } from "react";
import { connect } from "react-redux";
import ThongTinDatGhe from "./ThongTinDatGhe";
import HangGhe from "./HangGhe";
import "./BaiTapdatve.css";
import danhSachGhe from "./danhSachGhe.json";

class BaiTapDatVe extends Component {
  renderHangGhe = () => {
    return danhSachGhe.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} />
        </div>
      );
    });
  };

  render() {
    return (
      <div style={{ backgroundColor: "#f9fbfd", height: "100vh" }}>
        <div style={{ paddingTop: "40px" }} className="container">
          <div className="row">
            <div className="col-8 text-center">
              <div className="screen mb-4">Màn Hình</div>
              {this.renderHangGhe()}
            </div>
            <div className="col-4">
              <ThongTinDatGhe />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     datVeReducer: state.DatVeReducer,
//   };
// };

export default connect(null, null)(BaiTapDatVe);
