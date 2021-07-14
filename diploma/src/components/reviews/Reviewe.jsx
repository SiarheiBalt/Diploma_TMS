import styled from "styled-components";

export const Reviewe = ({ name, time, text }) => {
  return (
    <div>
      <h5>
        <div style={{ backgroundColor: "gray" }}>{name}</div>
        <div style={{ backgroundColor: "gray" }}>{time}</div>
        <div>{text}</div>
      </h5>
    </div>
  );
};
