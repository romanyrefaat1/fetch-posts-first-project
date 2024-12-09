import React from "react";
import "./loadin.css"

export default function loading() {
  return (
    <>
      <div class="loader flex justify-center items-center">
        <span class="loader-text">loading</span>
        <span class="load"></span>
      </div>
    </>
  );
}
