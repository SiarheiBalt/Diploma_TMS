import styled from "styled-components";

export const Poster = ({ poster, acces, id, removePoster }) => {
  const onClick = () => {
    removePoster(id);
  };
  return (
    <Li>
      {poster} {acces && <button onClick={onClick}>Удалить</button>}
    </Li>
  );
};

const Li = styled.li`
  @media (max-width: 550px) {
    font-size: 0.8em;
  }
`;
