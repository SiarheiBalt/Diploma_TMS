import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getDate } from "../../common/functions";
import { Mask } from "../../common/style";
import { ACTIONS } from "../../redux/reducers/constans";
import { Reviews } from "./Reviews";

export const RevieweForm = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reviewsReducer);

  useEffect(() => {
    dispatch({ type: ACTIONS.SIGN_USER });
  }, []);

  const onChangeArea = (e) => {
    setText(e.target.value);
  };
  const onchangeInput = (e) => {
    setName(e.target.value);
  };
  const send = () => {
    let date = getDate();
    dispatch({ type: ACTIONS.SEND_REVIEWE, text, name, date });
    setText("");
    setName("");
    setRedirect(true);
    dispatch({ type: ACTIONS.GET_REVIEWS });
  };

  return !redirect ? (
    <div>
      {!state.acces ? (
        // <Mask>
        <div>
          <h3 style={{ color: "white" }}>
            Вы не авторизованы. Пройдите по вкладке отзывы и введите email чтоб
            оставить отзыв.
          </h3>
        </div>
      ) : (
        // {/* </Mask> */}
        <div>
          <Mask>
            <h5>Напишите свой отзыв и нажмите кнопку добавить!</h5>
            <input
              type="text"
              placeholder={"Имя"}
              onChange={onchangeInput}
              value={name}
            />
            <textarea
              placeholder={"Ваш отзыв"}
              value={text}
              onChange={onChangeArea}
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button onClick={send}>Добавить</button>
          </Mask>
        </div>
      )}
    </div>
  ) : (
    <div>
      <h2 style={{ color: "white" }}>Ваш отзыв добавлен.</h2>
      <h2 style={{ color: "white" }}>Спасибо за рецезию!</h2>
    </div>
  );
};
