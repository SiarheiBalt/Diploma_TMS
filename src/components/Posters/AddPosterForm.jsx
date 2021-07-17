import { useState } from "react";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/reducers/constans";

export const AddFormPoster = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addPoster = () => {
    dispatch({ type: ACTIONS.PUSH_POSTER, text });
    dispatch({ type: ACTIONS.GET_POSTERS_DB });
    setText("");
  };
  const onChangeInput = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input style={{ width: "500px" }} value={text} onChange={onChangeInput} />
      <button onClick={addPoster}>Добавить событие</button>
    </div>
  );
};
