import React, { Component } from "react";
import { connect } from "react-redux";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      //css before clicking
      let cssGheDaDat = "";
      let disabled = false;
      //css after clicking
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }
      //
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat != -1) {
        cssGheDangDat = "gheDangChon";
      }
      return (
        <button
          disabled={disabled}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          key={{ index }}
          onClick={() => {
            this.props.datGhe(ghe);
          }}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <button className="rowNumber">{hang.soGhe}</button>;
    });
  };

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className="ml-3">
          {this.props.hangGhe.hang} {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang}
          {this.renderGhe()}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="text-light text-left ml-4 mt-3">
        {this.renderHangGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.btDatVeReducer.danhSachGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch({
        type: "DAT_GHE",
        ghe,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
