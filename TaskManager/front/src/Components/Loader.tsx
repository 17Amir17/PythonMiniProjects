import React from "react";
import ReactLoading from "react-loading";

export default function Loader() {
  return (
    <div className="loader">
      <ReactLoading type={"spin"} color={"black"} height={667} width={375} />
    </div>
  );
}
