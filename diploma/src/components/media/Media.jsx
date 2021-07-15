import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Mask } from "../../common/style";
import { ACTIONS } from "../../redux/reducers/constans";
import { Modal } from "./Modal";

export const Media = () => {
  const state = useSelector((state) => state.mediaReducer);
  const dispatch = useDispatch();
  const openModal = (e) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, id: e.target.id });
  };
  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };
  return (
    <Wrapper>
      {state.isModal && (
        <Modal img={state.imgForModal} closeModal={closeModal} />
      )}
      <Images>
        {state.wideImg.map((el, i) => (
          <img
            id={i}
            src={el.link}
            style={el.styleWideImg}
            key={i}
            onClick={openModal}
          />
        ))}
      </Images>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;

const Images = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
