import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Mask } from "../../common/style";
import { ACTIONS } from "../../redux/reducers/constans";

export const Admin = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const acces = useSelector((state) => state.authReducer.admin);

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

  const getOutAdmin = () => {
    dispatch({ type: ACTIONS.SIGN_OUT_ADMIN });
  };

  return (
    <div>
      <Mask>
        <div>
          {acces.accesForEdit ? (
            <div>
              <h4>Вы вошли как редактор сайта</h4>
              <div>
                <button onClick={getOutAdmin}>Выйти</button>
              </div>
            </div>
          ) : (
            <div>
              <h3>
                Войти на сайт как администратор, с возможностью редактирования.
              </h3>
              <div>
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
            </div>
          )}
        </div>
      </Mask>
    </div>
  );
};
