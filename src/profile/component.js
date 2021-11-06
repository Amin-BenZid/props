import React from "react";

function Profile({ fullName, bio, profession, handleName, children }) {
  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        height: "400px",
        width: "300px",
        marginLeft: "40px",
        marginTop: "30px",
        borderRadius: "10px",
        boxShadow: "3px 4px gray",
      }}
    >
      <div style={{ display: "flex" }}>
        <h4 style={{ display: "flex", marginTop: "16px", marginLeft: "35px" }}>
          Full name : <p style={{ color: "yellow" }}>{fullName}</p>
        </h4>
        <div style={{ display: "flex", width: "80px" }}>{children}</div>
      </div>
      <h4 style={{ display: "flex", marginTop: "16px", marginLeft: "35px" }}>
        Bio :<p style={{ color: "yellow" }}>{bio}</p>
      </h4>
      <h4 style={{ display: "flex", marginTop: "16px", marginLeft: "35px" }}>
        Profession :<p style={{ color: "yellow" }}>{profession}</p>
      </h4>
      {/* {handleName()} */}
    </div>
  );
}
Profile.defaultProps = {
  fullName: "default name",
  bio: "default bio",
  profession: "default profession",
};
export default Profile;
