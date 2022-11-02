import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import ThongTinDatGhe from "./ThongTinDatGhe";

export default class BookingTicket extends Component {
  render() {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: 'url("./img/bgmovie.jpg")',
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "100%",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-light display-4">
                  ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                  <div className="mt-3 text-light" style={{ fontSize: "35px" }}>
                    Màn hình
                  </div>
                  <div
                    className="mt-2"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <div className="screen"></div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="text-light display-4">
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
