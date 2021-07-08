import { useState } from "react";
import styled from "styled-components";
import { Mask } from "../../common/style";
import { CostForm } from "./CostForm";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import { CostOut } from "./CostOut";
import { useSelector } from "react-redux";
registerLocale("ru", ru);

export const Cost = () => {
  const cost = useSelector((state) => state.costReducer.dataForPayment);
  return (
    <CostDiv>
      <Mask>
        {cost.wasPayment ? <CostOut cost={cost.finallyCost} /> : <CostForm />}
      </Mask>
    </CostDiv>
  );
};

const CostDiv = styled.div`
  color: black;
`;
