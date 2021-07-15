import { Field, Formik } from "formik";
import * as yup from "yup";
import styled from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/reducers/constans";

registerLocale("ru", ru);

export const CostForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [distance, setDistance] = useState("");
  const [hasEquip, setHasEquip] = useState(false);
  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    setDistance(e.target.value);
  };
  const onClickCheckbox = () => {
    setHasEquip(!hasEquip);
  };

  const getData = () => {
    const costData = {};
    let getDayOfWeek = startDate.getDay();
    dispatch({
      type: ACTIONS.PAYMENT_BAND_COST,
      costData: { ...costData, dayOfWeek: getDayOfWeek, distance, hasEquip },
    });
    setStartDate(new Date());
    setHasEquip(false);
    setDistance("");
  };

  return (
    <Form>
      <div>
        <h3 style={{ textAlign: `center` }}>Расчет стоимости</h3>
        <h4 style={{ textAlign: `center` }}>Выберите дату</h4>
        <DatePicker
          locale="ru"
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
          }}
        />
      </div>
      <div>
        <h4>Примерное расстояние от Минска, км</h4>
        <div style={{ textAlign: `center` }}>
          <input
            type="text"
            placeholder={`0`}
            onChange={onChangeInput}
            value={distance}
          />
        </div>
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={hasEquip}
            onChange={onClickCheckbox}
            style={{ width: "30px" }}
          />
          <h5>Имеется ли звуковая аппаратура на площадке?</h5>
        </div>
      </div>
      <div>
        <button onClick={getData}>Рассчитать</button>
      </div>
    </Form>
  );
};

const Form = styled.div`
  background-color: cornflowerblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
  padding: 20px 0;
  border-radius: 3px;
`;
