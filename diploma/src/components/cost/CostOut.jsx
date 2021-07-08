import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ACTIONS } from "../../redux/reducers/constans";

export const CostOut = ({ cost }) => {
  const dispatch = useDispatch();
  return (
    <Background>
      <div>
        <div style={{ paddingTop: "20px" }}>
          <h3 style={{ width: "450px", margin: " auto" }}>
            Примерная стоимость состовляет <span>{cost}</span> BYN
          </h3>
        </div>
        <div style={{ width: "55px", margin: "20px auto" }}>
          <button
            onClick={() => dispatch({ type: ACTIONS.CHANGE_WAS_PAYMENT })}
          >
            Назад
          </button>
        </div>
      </div>
    </Background>
  );
};

const Background = styled.div`
  background-color: cornflowerblue;
  border-radius: 5px 5px 0 0;
  height: 100px;
`;
