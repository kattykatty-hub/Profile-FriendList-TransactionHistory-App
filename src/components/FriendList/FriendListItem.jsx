import React from 'react';
import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? styles.online : styles.offline;

  return (
    <div className={styles.friend}>
      <img className={styles.avatar} src={avatar} alt={`${name} avatar`} width="48" />
      <p className={styles.name}>{name}</p>
      <p className={`${styles.status} ${statusClass}`}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
