const faker = require('faker');

let userName, userDetail

userName = JSON.parse(window.localStorage.getItem('userName'));
userDetail = JSON.parse(window.localStorage.getItem('userDetail'));

if(!userName || !userDetail){
  userName = new Array(20).fill('').map(_=> faker.helpers.userCard().name);
  window.localStorage.getItem('userName', JSON.stringify(userName));

  userDetail = userName.reduce((acc, userName) => {
    acc[userName] = new Array(20).fill('-').map(_=> faker.helpers.userCard());
    return acc;
  }, {});
  window.localStorage.getItem('userDetail', JSON.stringify(userDetail));
};

module.exports = {
  userName,
  userDetail
}
