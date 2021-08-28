import firebase from '../config/firebase-config';

const socialMediaAuth = (provider) => {
  return firebase
    .auth()
    .signInWithPopup(provder)
    .then(res => {
      return res.user;
    })
    .catch(err => {
      return err;
    })
};

export default socialMediaAuth;