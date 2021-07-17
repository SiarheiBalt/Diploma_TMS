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
            Примерная стоимость составляет <span>{cost}</span> BYN
          </h3>
        </div>
        <div style={{ width: "55px", margin: "20px auto" }}>
          <button
            onClick={() => dispatch({ type: ACTIONS.CHANGE_WAS_PAYMENT })}
          >
            Назад
          </button>
        </div>
        <div style={{ padding: "25px" }}>
          <h4>
            Цена явлется примерной. Звоните и я Вас проконсультирую по вопросу
            ценообразования +375-44-779-48-15.{" "}
          </h4>
        </div>
      </div>
    </Background>
  );
};

const Background = styled.div`
  background-color: cornflowerblue;
  margin-top: 55px;
  & h4 {
    max-width: 750px;
    margin: auto;
  }
`;
