import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Mask } from "../../common/style";
import { ACTIONS } from "../../redux/reducers/constans";
import { Reviewe } from "./Reviewe";
import { MailForAuth } from "./MailForAuth";
import { Preloader } from "../Preloader/Preloader";

export const Reviews = () => {
  const reviewes = useSelector((state) => state.reviewsReducer.reviewes);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ACTIONS.GET_REVIEWS });
  }, []);

  return (
    <div>
      <Mask>
        <img
          src="/pictures/images/Reviewes.jpg"
          style={{ maxWidth: "1000px" }}
          alt=""
        />
        <div>
          {reviewes === null ? (
            <Preloader picture="/pictures/preloaders/preloaderWhiteSmoke.png" />
          ) : (
            <div>
              {reviewes.map((reviewe, i) => (
                <Reviewe
                  key={i}
                  name={reviewe.el.name}
                  time={reviewe.el.time}
                  text={reviewe.el.text}
                />
              ))}
            </div>
          )}
          <hr />
          <MailForAuth dispatch={dispatch} />
        </div>
      </Mask>
    </div>
  );
};
