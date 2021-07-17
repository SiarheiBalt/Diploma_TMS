export const getObjFromArray = (el) => {
  let arr = Object.entries(el);
  let data = arr.map(([id, el]) => {
    return { id, el };
  });
  return data;
};

export const sortDataSong = (arr) => {
  let sortDataSong = arr.sort((a, b) => {
    if (a.el.toLowerCase() < b.el.toLowerCase()) return -1;
    if (a.el.toLowerCase() > b.el.toLowerCase()) return 1;
    return 0;
  });
  return sortDataSong;
};
export const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = checkLength(date.getMonth() + 1);
  const day = checkLength(date.getDate());
  const hours = checkLength(date.getHours());
  const min = checkLength(date.getMinutes());
  return `${hours}:${min}, ${day}.${month}.${year}`;
};

const checkLength = (date) => {
  let value = `${date}`;
  if (value.length === 1) {
    value = `0${value}`;
  }

  return value;
};
