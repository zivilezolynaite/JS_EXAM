/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(firstnumber, secondnumber) {
  this.firstnumber = firstnumber;
  this.secondnumber = secondnumber;

  this.sum = function () {
    console.log(this.firstnumber + this.secondnumber);
  };

  this.subtraction = function () {
    console.log(this.firstnumber - this.secondnumber);
  };

  this.multiplication = function () {
    console.log(this.firstnumber * this.secondnumber);
  };

  this.division = function () {
    console.log(this.firstnumber / this.secondnumber);
  };

  this.print = function () {
    this.sum();
    this.subtraction();
    this.multiplication();
    this.division();
  };
}

const answer = new Calculator(100, 4);
answer.print();
