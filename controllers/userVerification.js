const fs = require("fs");

exports.userVerification = (email) => {
  const rawData = fs.readFileSync("./public/testData.json");
  const usersJsonObject = JSON.parse(rawData);
  const [mentees, mentors] = [usersJsonObject.mentees, usersJsonObject.mentors];
  const result = [];
  for (let i = 0; i < mentors.length; i++) {
    if (mentors[i].Email.toLowerCase() === email) {
      const userInfo = {
        name: mentors[i]["First Name"],
        email: mentors[i].Email,
        role: "mentor",
      };
      result.push(userInfo);
      result.push(mentees);
      return result;
    } else if (mentees[i].Email.toLowerCase() === email) {
      const userInfo = {
        name: mentees[i]["First Name"],
        email: mentees[i].Email,
        role: "mentee",
      };
      result.push(userInfo);
      result.push(mentors);
      return result;
    }
  }
  return false;
};
