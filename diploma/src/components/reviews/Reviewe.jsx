import styled from "styled-components";

export const Reviewe = ({ name, time, text }) => {
  return (
    <div>
      <h5>
        <div
          style={{ backgroundColor: "rgb(186 211 255)", paddingLeft: "10px" }}
        >
          {name}
        </div>
        <div
          style={{ backgroundColor: "rgb(186 211 255)", paddingLeft: "10px" }}
        >
          {time}
        </div>

        <div style={{ paddingLeft: "10px" }}>{text}</div>
      </h5>
    </div>
  );
};
