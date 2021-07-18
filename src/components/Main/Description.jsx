import styled from "styled-components";

export const Description = () => {
  return (
    <Wrapper>
      <span>
        <p>{"  "} «Навигатор» — путь к хорошему настроению!</p>
        <p>
          Коллектив профессиональных музыкантов, за плечами у которых не один
          год работы в музыкальной сфере и большой опыт концертной деятельности.
        </p>
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: whitesmoke;
  width: 220px;
  box-shadow: 10 10 25px rgb(0 0 0 / 70%);
  padding: 5px;
  font-weight: 700;
  font-size: 0.9em;
  border-radius: 20px;
  border: solid 1px mediumspringgreen;
`;
