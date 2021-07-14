import styled from "styled-components";

export const Reviewe = ({ name, time, text }) => {
  return (
    <div>
      <h5>
        <div style={{ backgroundColor: "rgb(157 190 248)" }}>{name}</div>
        <div style={{ backgroundColor: "rgb(157 190 248)" }}>{time}</div>
        <div>{text}</div>
      </h5>
    </div>
  );
};
