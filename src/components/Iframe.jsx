import React from "react";
import { useSelector } from "react-redux";
const Iframe = () => {
  const iframeLink = useSelector((state) => state.cards.iframeLink);

  return (
    <div className=" border-base-200 shadow-base-100 mt-4 border-2 rounded shadow-sm">
      <video className="w-full h-full" src={iframeLink} autoPlay controls />
    </div>
  );
};

export default Iframe;
// file:///Users/aj2000/Movies/2023-03-25%2022-36-20.mkv
// https://assets.mixkit.co/active_storage/sfx/2565/2565.wav
// https://bestvpn.org/html5demos/assets/dizzy.mp4
