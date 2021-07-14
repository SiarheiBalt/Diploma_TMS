import { useState } from "react";
import styled from "styled-components";
import { ACTIONS } from "../../redux/reducers/constans";

export const MailForAuth = ({ dispatch }) => {
  const [input, setInput] = useState("");
  const [didRequest, setDidRequest] = useState(
    window.localStorage.getItem("emailForSignIn") ? true : false
  );
  const onChangeNameInput = (e) => {
    setInput(e.target.value);
  };

  const sendEmail = () => {
    dispatch({ type: ACTIONS.SEND_EMAIL, email: input });
    setInput("");
    setDidRequest(true);
  };
  return (
    <div>
      {didRequest ? (
        <div>
          <h4>Запрос отправлен!</h4>
        </div>
      ) : (
        <div>
          <h5>Оставить отзыв.</h5>
          <div>
            На ваш email будет отправлено письмо для подверждения что Вы это Вы.
            Пройдите по ссылке указанной в письме, где Вам будет предложена
            форма для заполнения.
          </div>
          <input
            type="text"
            value={input}
            onChange={onChangeNameInput}
            placeholder={"email"}
          />
          <button onClick={sendEmail}>Отправить</button>
        </div>
      )}
    </div>
  );
};
