import picture from "./../../img/preloaders/preloaderWhiteSmoke.png";

export const Preloader = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img style={{ margin: "25px" }} src={picture} />
    </div>
  );
};
