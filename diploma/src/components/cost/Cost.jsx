import { useState } from "react";
import styled from "styled-components";
import { Mask } from "../../common/style";
import { CostForm } from "./CostForm";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import { CostOut } from "./CostOut";
import { useSelector } from "react-redux";
import title from "./../../img/background/title.jpg";

registerLocale("ru", ru);

export const Cost = () => {
  const cost = useSelector((state) => state.costReducer.dataForPayment);
  return (
    <BackGround background={title}>
      <CostDiv>
        <Mask>
          {cost.wasPayment ? <CostOut cost={cost.finallyCost} /> : <CostForm />}
        </Mask>
      </CostDiv>
    </BackGround>
  );
};

const CostDiv = styled.div`
  color: black;
`;

const BackGround = styled.div`
  background-image: url(${({ background }) => background});
  background-size: cover;
  padding: 20px 0;
`;
