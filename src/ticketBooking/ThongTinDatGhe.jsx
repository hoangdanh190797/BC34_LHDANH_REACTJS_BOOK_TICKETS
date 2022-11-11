import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-3">
          <button className="gheDuocChon"></button>{" "}
          <span className="text-light" style={{ fontSize: "35px" }}>
            Ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon"></button>{" "}
          <span className="text-light" style={{ fontSize: "35px" }}>
            Ghế đang đặt
          </span>
          <br />
          <button className="ghe" style={{ marginLeft: "0" }}></button>{" "}
          <span className="text-light" style={{ fontSize: "35px" }}>
            Ghế chưa đặt
          </span>
        </div>

        <div className="mt-5">
          <table className="table" border="3">
            <thead>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Huỷ</th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.dispatch({
                            type: "HUY_GHE",
                            soGhe: gheDangDat.soGhe,
                          });
                        }}
                      >
                        Huỷ
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-warning">
                <td></td>
                <td>Tổng tiền</td>
                <td>{this.props.danhSachGheDangDat
                    .reduce((tongTien, gheDangDat, index) => {
                      return tongTien += gheDangDat.gia;
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.btDatVeReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinDatGhe);
