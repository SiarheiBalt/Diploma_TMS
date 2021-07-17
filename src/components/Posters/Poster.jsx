export const Poster = ({ poster, acces, id, removePoster }) => {
  const onClick = () => {
    removePoster(id);
  };
  return (
    <li>
      {poster} {acces && <button onClick={onClick}>Удалить</button>}
    </li>
  );
};
