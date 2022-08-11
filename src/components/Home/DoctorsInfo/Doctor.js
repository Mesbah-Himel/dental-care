import React from "react";

const Doctor = ({ doctor }) => {
  return (
    <div>
      <img style={{ height: "250px",width:'180px' }} src={doctor.img} alt="" />
      <div>
        <h3 className="mt-3 mb-3">{doctor.name}</h3>
        <p className="mt-3 mb-3">{doctor.contact}</p>
        <p className="mt-3 mx-1 mb-3">{doctor.from}</p>
      </div>
    </div>
  );
};

export default Doctor;
