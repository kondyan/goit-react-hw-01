import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.cardWrapper}>
      <img className={css.icon} src={avatar} alt="Avatar" width="48" />
      <p className={css.nameText}>{name}</p>
      <p className={clsx(isOnline ? css.isOnline : css.isOfline)}>
        {clsx(isOnline ? "Online" : "Ofline")}
      </p>
    </div>
  );
};

export default FriendListItem;
