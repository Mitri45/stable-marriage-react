// function Person(name) {
//   var candidateIndex = 0;

//   this.name = name;
//   this.fiance = null;
//   this.candidates = [];

//   this.rank = function (p) {
//     for (i = 0; i < this.candidates.length; i++)
//       if (this.candidates[i] === p) return i;
//     return this.candidates.length + 1;
//   };

//   this.prefers = function (p) {
//     return this.rank(p) < this.rank(this.fiance);
//   };

//   this.nextCandidate = function () {
//     if (candidateIndex >= this.candidates.length) return null;
//     return this.candidates[candidateIndex++];
//   };

//   this.engageTo = function (p) {
//     if (p.fiance) p.fiance.fiance = null;
//     p.fiance = this;
//     if (this.fiance) this.fiance.fiance = null;
//     this.fiance = p;
//   };

//   this.swapWith = function (p) {
//     console.log("%s & %s swap partners", this.name, p.name);
//     var thisFiance = this.fiance;
//     var pFiance = p.fiance;
//     this.engageTo(pFiance);
//     p.engageTo(thisFiance);
//   };
// }

// function isStable(guys, gals) {
//   for (var i = 0; i < guys.length; i++)
//     for (var j = 0; j < gals.length; j++)
//       if (guys[i].prefers(gals[j]) && gals[j].prefers(guys[i])) return false;
//   return true;
// }

// function engageEveryone(guys) {
//   var done;
//   do {
//     done = true;
//     for (var i = 0; i < guys.length; i++) {
//       var guy = guys[i];
//       if (!guy.fiance) {
//         done = false;
//         var gal = guy.nextCandidate();
//         if (!gal.fiance || gal.prefers(guy)) guy.engageTo(gal);
//       }
//     }
//   } while (!done);
// }

// function doMarriage() {
//   var pete = new Person("pete.russell01@gmail.com");
//   var jules = new Person("jules@planetnz.com");
//   var sf = new Person("sf.tsai1989@gmail.com");
//   var richarda = new Person("richarda@intergen.co.nz");
//   var dmitrii = new Person("dmitrii.website@gmail.com");
//   var kelly1 = new Person("kelly1.cliffe@protonmail.com");
//   var Rachael = new Person("Rachael@crewconsulting.co.nz");
//   var mazharmail = new Person("mazharmail@gmail.com");

//   pete.candidates = [dmitrii, kelly1, mazharmail, Rachael];
//   jules.candidates = [Rachael, dmitrii, kelly1, mazharmail];
//   sf.candidates = [kelly1, dmitrii, mazharmail, Rachael];
//   richarda.candidates = [kelly1, dmitrii, Rachael, mazharmail];
//   dmitrii.candidates = [richarda, jules, pete, sf];
//   kelly1.candidates = [jules, richarda, pete, sf];
//   Rachael.candidates = [richarda, pete, sf, jules];
//   mazharmail.candidates = [richarda, pete, jules, sf];

//   var guys = [pete, jules, sf, richarda];
//   var gals = [dmitrii, kelly1, Rachael, mazharmail];

//   console.log(guys);
//   console.log(gals);

//   engageEveryone(guys);

//   for (var i = 0; i < guys.length; i++) {
//     console.log("%s is engaged to %s", guys[i].name, guys[i].fiance.name);
//   }
//   console.log("Stable = %s", isStable(guys, gals) ? "Yes" : "No");
//   pete.swapWith(sf);
//   console.log("Stable = %s", isStable(guys, gals) ? "Yes" : "No");
// }

// doMarriage();
