const usersData = require("./users.json");

/**
 * @function
 * @returns {Array} 
 */
function getPhoneNumbersOver50(users) {
  if (!users || users.length === 0) {
    return [];
  }

  const phoneNumbers = users
    .filter(user => user.age > 50)
    .map(user => user.phoneNumber);

  return phoneNumbers;
}

module.exports = {
  getPhoneNumbersOver50,
};

