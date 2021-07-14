import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Mask } from "../../common/style";
import {
  singInAfterGetMail,
  checkOutOf,
  sendSignInLinkToEmail,
  createUser,
  delleteUser,
  setArrayInDatabase,
} from "../../redux/fireBaseFunctions";
import { ACTIONS } from "../../redux/reducers/constans";
import { Reviewe } from "./Reviewe";
import { MailForAuth } from "./MailForAuth";

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
          style={{ width: "inherit" }}
          alt=""
        />
        <div>
          {reviewes === null ? (
            <div>Preloader</div>
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
          <div>
            <MailForAuth dispatch={dispatch} />
          </div>
        </div>
      </Mask>
    </div>
  );
};
