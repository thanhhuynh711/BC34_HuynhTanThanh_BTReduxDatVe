import React, { Component } from "react";
import { connect } from "react-redux";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      // ghế đã được mua
      if (ghe.daDat) {
        cssGheDaDat = "seats-taken";
        disabled = true;
      }

      //ghế đang đặt
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe == ghe.soGhe
      );
      if (indexGheDangDat != -1) {
        cssGheDangDat = "gheDangChon";
      }

      return (
        <button
          onClick={() =>
            this.props.dispatch({
              type: "DAT_GHE",
              payload: ghe,
            })
          }
          key={index}
          disabled={disabled}
          className={`seats ${cssGheDaDat} ${cssGheDangDat}`}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  render() {
    let { hangGhe } = this.props;

    return (
      <div className="row">
        <div className="seats rowname">{hangGhe.hang}</div>

        <div className="d-flex">{this.renderGhe()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.DatVeReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps, null)(HangGhe);
