import React, { useEffect } from 'react';
import moment from 'moment';
import './index.scss';


const Timer = ({ initialTimer, setTimers, onToggle, onDelete }) => {
  const { id, value, isActive, title, lastUpdatedDate } = initialTimer;

  useEffect(() => {
    if (!isActive) return;

    const passedTime = moment().diff(moment(lastUpdatedDate), 'seconds');
    if (passedTime > 0) {
      setTimers((prev) =>
        prev.map((timer) =>
          timer.id === id
            ? { ...timer, value: timer.value + passedTime }
            : timer
        )
      );
    }

    const intervalId = setInterval(() => {
      setTimers((prev) =>
        prev.map((timer) =>
          timer.id === id ? { ...timer, value: timer.value + 1 } : timer
        )
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isActive, lastUpdatedDate, id, setTimers]);

  return (
    <li className="track">
      <p className="track__name-text">{title}</p>
      <span
        className={
          !isActive
            ? 'track__time   track__active'
            : 'track__time  track__passive'
        }
      >
        {moment.utc(value * 1000).format('HH:mm:ss')}
      </span>
      <button
        className={
          !isActive ? 'track__button play_button' : 'track__button pause_button'
        }
        onClick={() => {
          onToggle(id);
        }}
      ></button>
      <button
        className="track__button delete"
        onClick={() => {
          onDelete(id);
        }}
      >
        <img
          className="button-control"
          src="/images/control_buttons/deleteIcon.png"
          alt=""
        />
      </button>
    </li>
  );
};

export default Timer;
