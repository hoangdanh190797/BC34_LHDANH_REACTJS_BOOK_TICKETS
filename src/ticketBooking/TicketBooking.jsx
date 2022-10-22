//rfc
import React from "react";
import { useState, useDispatch } from "react";
import data from "./danhSachGhe.json"

export default function TicketBooking() {
  console.log(data);
  return (
    <div className="bg-ticket-book bg-no-repeat bg-center bg-cover ">
      <h1 className="text-3xl font-bold text-center py-3">MOVIE SEAT SELECTION</h1>
      <div style={{}} className="px-4 mx-auto bg-gray-200 t h-[800px] w-7/12">
        <p className="text-center py-3">
          Fill The Required Details Below And Select Your Seats
        </p>
        Name* <input></input> Number of Seats* <input></input>
        <br />
        <button
          style={{ color: "" }}
          className="rounded-full bg-white my-3 text-2xl"
        >
          Start Selecting
        </button>
        <br />
        <div
          style={{ display: "inline-block" }}
          className="box-border mr-2 bg-green-500 h-[35px] w-[35px]"
        ></div>
        <div style={{ display: "inline" }}>Selected Seat</div>
        <br />
        <div
          style={{ display: "inline-block" }}
          className="box-border mr-2 bg-red-500 h-[35px] w-[35px]"
        ></div>
        <div style={{ display: "inline" }}>Reserved Seat</div>
        <br />
        <div
          style={{ display: "inline-block" }}
          className="box-border mr-2 bg-white h-[35px] w-[35px]"
        ></div>
        <div style={{ display: "inline" }}>Empty Seat</div>
        {/* -------------------------------------------------- */}
        <div id="content"></div>
        {/* -------------------------------------------------- */}
        <br />
        <p
          style={{ display: "block", width: "700px" }}
          className="text-center bg-orange-500 text-4xl mx-auto"
        >
          SCREEN THIS WAY
        </p>
        <br />
        <button
          style={{ color: "" }}
          className="rounded-full bg-white my-3 text-2xl"
        >
          Confirm Selection
        </button>
        <table className="border-separate border-spacing-6 border border-slate-800 mx-auto">
          <thead>
            <tr>
              <th style={{}} className="border border-slate-800 px-16">
                Name
              </th>
              <th className="border border-slate-800 px-16">Number of Seats</th>
              <th className="border border-slate-800 px-16">Seats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="">---Demo</td>
              <td className="">---Demo</td>
              <td className="">---Demo</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={{ color: "white" }} className="text-center py-3">
        © 2018 Movie Seat Selection . All Rights Reserved | Design by W3layouts
      </p>
    </div>
  );
}
