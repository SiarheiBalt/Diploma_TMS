import styled from "styled-components";

export const Reviewe = ({ name, time, text }) => {
  return (
    <div>
      <h5>
        <div style={{ backgroundColor: "rgb(186 211 255)" }}>{name}</div>
        <div style={{ backgroundColor: "rgb(186 211 255)" }}>{time}</div>

        <div>{text}</div>
      </h5>
    </div>
  );
};
