import PropTypes from 'prop-types';
import s from './SocialProfile.module.css';

export default function SocialProfile({ name, tag, location, avatar, stats }) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.bold}>{name}</p>
        <p className={s.info}>{`@${tag}`}</p>
        <p className={s.info}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className="label">Followers</span>
          <span className={s.bold}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className="label">Views</span>
          <span className={s.bold}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className="label">Likes</span>
          <span className={s.bold}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

SocialProfile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
