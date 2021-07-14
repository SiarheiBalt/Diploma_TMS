import { useState } from "react";
import { ACTIONS } from "../../redux/reducers/constans";

export const AddSongForm = ({ dispatch }) => {
  const [select, setSelect] = useState("eng");
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setSelect(e.target.value);
  };
  const onchangeInput = (e) => {
    setInput(e.target.value);
  };
  const addSong = () => {
    let song = {
      selected: select,
      song: input,
    };
    dispatch({ type: ACTIONS.PUSH_SONG, song });
    dispatch({ type: ACTIONS.GET_DATA_DB_SONGS });
    setInput("");
  };

  return (
    <div>
      <input onChange={onchangeInput} value={input} />
      <select onChange={handleChange} name={"selected"}>
        <option value={"eng"}>eng</option>
        <option value={"ru"}>ru</option>
        <option value={"byUk"}>by/Uk</option>
      </select>
      <button onClick={addSong}>Добавить</button>
    </div>
  );
};
