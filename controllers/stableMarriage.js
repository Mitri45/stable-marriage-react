class Person {
  constructor(email) {
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
  }
}

function isStable(mentors, mentees) {
  for (let i = 0; i < mentors.length; i++) {
    for (let j = 0; j < mentees.length; j++) {
      if (mentors[i].prefers(mentees[j]) && mentees[j].prefers(mentors[i]))
        return false;
    }
  }
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

function doMarriage() {
  const abe = new Person("Abe");
  const bob = new Person("Bob");
  const col = new Person("Col");
  const bea = new Person("Bea");
  const cath = new Person("Cath");
  const dee = new Person("Dee");

  abe.candidates = [cath, dee, bea];
  bob.candidates = [cath, bea, dee];
  col.candidates = [dee, cath, bea];
  bea.candidates = [bob, abe, col];
  cath.candidates = [col, abe, bob];
  dee.candidates = [col, abe, bob];

  const mentors = [abe, bob, col];
  const mentees = [bea, cath, dee];

  engageEveryone(mentors);

  for (let i = 0; i < mentors.length; i++) {
    console.log(
      "%s is engaged to %s",
      mentors[i].email,
      mentors[i].fiance.email
    );
  }
  console.log("Stable = %s", isStable(mentors, mentees) ? "Yes" : "No");
}

doMarriage();
