import React from "react";

const Tasktitle = ({ imgurl, tasktitle, width_img }) => {
  return (
    <div className="text-center pt-3 pb-2">
      <img src={imgurl} alt="tasktitle" width={width_img ? width_img : "60"} />
      <h2 className="my-4">{tasktitle}</h2>
    </div>
  );
};

export default Tasktitle;
