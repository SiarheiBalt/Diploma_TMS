import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ACTIONS } from "../../redux/reducers/constans";

export const CostOut = ({ cost }) => {
  const dispatch = useDispatch();
  return (
    <Background>
      <div>
        <div>
          Примерная стоимость состовляет <span>{cost}</span> BYN
        </div>
        <div>
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

const Background = styled.div``;
