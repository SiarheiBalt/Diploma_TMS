import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ACTIONS } from "../../redux/reducers/constans";
import { Footer } from "../Main/Footer";

export const MailForAuth = ({ dispatch }) => {
  const [input, setInput] = useState("");
  const [errorInput, setErrorInput] = useState(false);
  const [didRequest, setDidRequest] = useState(
    window.localStorage.getItem("emailForSignIn") ? true : false
  );
  const onChangeNameInput = (e) => {
    setInput(e.target.value);
  };
  const onKeyDown = (e) => {
    e.key === "Backspace" && setErrorInput(false);
  };

  const sendEmail = () => {
    if (input.split("").some((el) => el === "@") && input.length > 7) {
      dispatch({ type: ACTIONS.SEND_EMAIL, email: input });
      setDidRequest(true);
    } else {
      setErrorInput(true);
    }
  };
  return (
    <div>
      <div style={{ padding: "0px 10px 40px 10px" }}>
        {didRequest ? (
          <div>
            <h4>{`Запрос отправлен на ${input}!`}</h4>
          </div>
        ) : (
          <div>
            <h5>Оставить отзыв.</h5>
            <div>
              На ваш email будет отправлено письмо для подверждения что Вы это
              Вы. Пройдите по ссылке указанной в письме, где Вам будет
              предложена форма для заполнения.
            </div>
            {errorInput && (
              <div style={{ color: "red" }}> Неверный формат email </div>
            )}
            <input
              onKeyDown={onKeyDown}
              type="text"
              value={input}
              onChange={onChangeNameInput}
              placeholder={"email"}
            />
            <button onClick={sendEmail}>Отправить</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
