import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.card}>
      <div className={css.cardInfo}>
        <img className={css.userAvatar} src={image} alt="User avatar" />
        <p className={css.boldText}>{name}</p>
        <p className={css.grayText}>@{tag}</p>
        <p className={css.grayText}>{location}</p>
      </div>

      <ul className={css.cardStats}>
        <li>
          <span className={css.normalText}>Followers</span>
          <span className={css.boldText}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.normalText}>Views</span>
          <span className={css.boldText}>{stats.views}</span>
        </li>
        <li>
          <span className={css.normalText}>Likes</span>
          <span className={css.boldText}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
