import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Mask } from "../../common/style";
import { ACTIONS } from "../../redux/reducers/constans";

export const Admin = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const acces = useSelector((state) => console.log(state));
  console.log(acces);
  const dispatch = useDispatch();

  const onChangeLogin = (e) => {
    setLogin(e.target.value);
  };
  const onchangePassword = (e) => {
    setPassword(e.target.value);
  };

  const getLoginPassword = () => {
    dispatch({ type: ACTIONS.CHECK_LOGIN_PASSWORD_ADMIN, login, password });
    setPassword("");
    setLogin("");
  };

  return (
    <div>
      <Mask>
        <div>
          <h3>
            Войти на сайт как администратор, с возможностью редактирования.
          </h3>
          <div>
            <div>
              <input
                value={login}
                type={"text"}
                placeholder={"login"}
                onChange={onChangeLogin}
              />
            </div>
            <div>
              <input
                value={password}
                type={"password"}
                placeholder={"password"}
                onChange={onchangePassword}
              />
            </div>
            <div>
              <button onClick={getLoginPassword}>Войти</button>
            </div>
          </div>
        </div>
      </Mask>
    </div>
  );
};
