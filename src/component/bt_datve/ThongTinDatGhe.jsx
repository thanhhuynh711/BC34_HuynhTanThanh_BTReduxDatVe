import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="row align-items-center ml-3">
            <button className="seats seats-taken"></button>
            <p style={{ marginBottom: "0", fontWeight: "500" }}>
              Ghế đã được mua
            </p>
          </div>
          <div className="row align-items-center ml-3">
            <button className="seats gheDangChon"></button>
            <p style={{ marginBottom: "0", fontWeight: "500" }}>
              Ghế bạn đang chọn
            </p>
          </div>
          <div className="row align-items-center ml-3">
            <button className="seats"></button>
            <p style={{ marginBottom: "0", fontWeight: "500" }}>
              Ghế chưa được mua
            </p>
          </div>
        </div>

        <div className="card-info mt-3">
          <p class="text-truncate mb-0">Phim: Bỗng Dưng Trúng Số</p>
          <p class="text-truncate mb-0">
            <strong>Rạp: Mega GS Cao Thắng</strong>
          </p>
          <p class="text-truncate mb-0">
            Suất
            <strong> 23:30</strong> - Hôm nay,
            <strong> 10/10</strong>
          </p>
          <p class="text-truncate mb-0">
            Phòng chiếu <strong>2</strong>- Ghế:
            <span class="font-weight-bold ticketing-seats">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return <span key={index}> {gheDangDat.soGhe}</span>;
              })}
            </span>
          </p>
        </div>
        <div className="card-info">
          <h6 class="text-uppercase text-muted mb-2">Tổng đơn hàng</h6>
          <span class="h2 mb-0 ticketing-total-amount">
            {this.props.danhSachGheDangDat
              .reduce((tongTien, gheDangDat) => {
                return (tongTien += gheDangDat.gia);
              }, 0)
              .toLocaleString()}
          </span>
        </div>
        <button
          style={{ width: "100%", fontSize: "20px" }}
          className="btn btn-success"
        >
          Thanh Toán
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.DatVeReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps, null)(ThongTinDatGhe);
