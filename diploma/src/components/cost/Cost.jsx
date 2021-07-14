import styled from "styled-components";
import { CostForm } from "./CostForm";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import { CostOut } from "./CostOut";
import { useSelector } from "react-redux";
import title from "./../../img/background/title.jpg";
import { Footer } from "../main/Foter";

registerLocale("ru", ru);

export const Cost = () => {
  const cost = useSelector((state) => state.costReducer.dataForPayment);
  return (
    <div>
      <BackGround background={title}>
        {cost.wasPayment ? <CostOut cost={cost.finallyCost} /> : <CostForm />}
      </BackGround>
      <Footer />
    </div>
  );
};

const BackGround = styled.div`
  background-image: url(${({ background }) => background});
  background-size: cover;
  padding: 20px 0;
  color: black;
  height: 100vh;
`;
