import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import styled from "styled-components";
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
        <div>
          <h3
            style={{
              color: "black",
              backgroundColor: "#ff998d",
              height: "70px",
            }}
          >
            Вы не авторизованы. Пройдите по вкладке отзывы и введите email чтоб
            оставить отзыв.
          </h3>
        </div>
      ) : (
        <Mask>
          <Wrapper>
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
          </Wrapper>
        </Mask>
      )}
    </div>
  ) : (
    <Flex>
      <h3>Ваш отзыв добавлен.</h3>
      <h3>Спасибо за рецезию!</h3>
    </Flex>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  height: 350px;
  padding: 20px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: cornflowerblue;
`;
