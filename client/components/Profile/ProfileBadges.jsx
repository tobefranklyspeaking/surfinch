import React from 'react';
import Badge from './Badge.jsx';

const ProfileBadges = ({ badges, currentUser, profile }) => {

  if (!badges) {
    return (
      <div className='profile-badges'></div>
    );
  } else {
    var logColor;
    var entColor;
    var migColor;
    var coopColor;
    switch (badges.login_rank) {
      case 1:
        logColor = 'bg-dark';
        break;
      case 2:
        logColor = 'bg-warning text-dark';
        break;
      case 3:
        logColor = 'bg-secondary';
        break;
      default:
        logColor = 'bg-primary';
        break;
    }
    // for entries
    switch (badges.entry_rank) {
      case 1:
        entColor = 'bg-dark';
        break;
      case 2:
        entColor = 'bg-warning text-dark';
        break;
      case 3:
        entColor = 'bg-secondary';
        break;
      default:
        entColor = 'bg-primary';
        break;
    }
    // other colors
    if (currentUser.logins < 5) {
      migColor = 'bg-secondary';
    } else if (currentUser.logins > 5 && currentUser.logins < 10) {
      migColor = 'bg-primary';
    } else {
      migColor = 'bg-success'
    }
    // coop color
    if (currentUser.entries < 5) {
      coopColor = 'bg-secondary';
    } else if (currentUser.entries > 5 && currentUser.entries < 10) {
      coopColor = 'bg-primary';
    } else {
      coopColor = 'bg-danger';
    }
    return (
      <div className='profile-badges'>
        <Badge title={'Frequent Flyer'} color={logColor} />
        <Badge title={'Most Entries'} color={entColor} />
        <Badge title={'Migrant'} color={migColor} />
        <Badge title={'Coop collection'} color={coopColor} />
        <Badge title={'Little birdie'} color={'bg-info text-dark'} />
      </div>
    );
  }

}

export default ProfileBadges;