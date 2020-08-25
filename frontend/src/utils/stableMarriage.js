function Person(email) {
  let candidateIndex = 0;

  this.email = email;
  this.fiance = null;
  this.candidates = [];

  this.rank = function (p) {
    for (let i = 0; i < this.candidates.length; i++)
      if (this.candidates[i] === p) return i;
    return this.candidates.length + 1;
  };

  this.prefers = function (p) {
    return this.rank(p) < this.rank(this.fiance);
  };

  this.nextCandidate = function () {
    if (candidateIndex >= this.candidates.length) return null;
    return this.candidates[candidateIndex++];
  };

  this.engageTo = function (p) {
    if (p.fiance) p.fiance.fiance = null;
    p.fiance = this;
    if (this.fiance) this.fiance.fiance = null;
    this.fiance = p;
  };

  this.swapWith = function (p) {
    console.log("%s & %s swap partners", this.email, p.email);
    let thisFiance = this.fiance;
    let pFiance = p.fiance;
    this.engageTo(pFiance);
    p.engageTo(thisFiance);
  };
}

function isStable(mentors, mentees) {
  for (let i = 0; i < mentors.length; i++)
    for (let j = 0; j < mentees.length; j++)
      if (mentors[i].prefers(mentees[j]) && mentees[j].prefers(mentors[i]))
        return false;
  return true;
}

function engageEveryone(mentors) {
  let done;
  do {
    done = true;
    for (let i = 0; i < mentors.length; i++) {
      let mentor = mentors[i];
      if (!mentor.fiance) {
        done = false;
        let mentee = mentor.nextCandidate();
        if (!mentee.fiance || mentee.prefers(mentor)) mentor.engageTo(mentee);
      }
    }
  } while (!done);
}

export function doMarriage(mentorsRankedList, menteesRankedList) {
  const menteesPersons = mentorsRankedList.map(
    (el) => new Person(el.userEmail)
  );
  const mentorsPersons = menteesRankedList.map(
    (el) => new Person(el.userEmail)
  );
  mentorsRankedList.forEach((el, index) => {
    let i;
    let menteesCandidates = [];
    el.rankedList.forEach((element) => {
      i = mentorsPersons.findIndex(
        ({ email }) => email === element.rankedUserEmail
      );
      menteesCandidates.push(mentorsPersons[i]);
    });
    menteesPersons[index].candidates = menteesCandidates;
  });

  menteesRankedList.forEach((el, index) => {
    let i;
    let mentorsCandidates = [];
    el.rankedList.forEach((element) => {
      i = menteesPersons.findIndex(
        ({ email }) => email === element.rankedUserEmail
      );
      mentorsCandidates.push(menteesPersons[i]);
    });
    mentorsPersons[index].candidates = mentorsCandidates;
  });

  console.log(menteesPersons);
  console.log(mentorsPersons);

  engageEveryone(menteesPersons);

  for (let i = 0; i < mentorsPersons.length; i++) {
    console.log(
      "%s is engaged to %s",
      mentorsPersons[i].email,
      mentorsPersons[i].fiance.email
    );
  }
  for (let i = 0; i < menteesPersons.length; i++) {
    console.log(
      "%s is engaged to %s",
      menteesPersons[i].email,
      menteesPersons[i].fiance.email
    );
  }
  console.log(
    "Stable = %s",
    isStable(menteesPersons, mentorsPersons) ? "Yes" : "No"
  );

  return [mentorsPersons, menteesPersons];
}
