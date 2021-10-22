const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const input4 = document.querySelector(".input4");
const para = document.querySelector(".para");
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const day = document.getElementById("day");
const week = document.getElementById("week");
const month = document.getElementById("month");
const year = document.getElementById("year");
const year10 = document.getElementById("years10");
const year20 = document.getElementById("years20");

btn.addEventListener("click", getResult);
btn2.addEventListener("click", resetAll);

function getResult() {
   let value1 = Number(input1.value);
   let value2 = Number(input2.value);
   let value3 = Number(input3.value);
   let value4 = Number(input4.value);
   let dollarsperday = (value3 / value2) * value1;
   if (value1 && value1 > 0 && value2 && value2 > 0 && value3 && value3 > 0 && value4 && value4 > 0) {
      day.innerHTML = `$${dollarsperday.toFixed(2)}`;
      week.innerHTML = `$${dollarsperday.toFixed(2) * 7}`;
      month.innerHTML = `$${dollarsperday.toFixed(2) * 30}`;
      year.innerHTML = `$${dollarsperday.toFixed(2) * 365}`;
      year10.innerHTML = `$${dollarsperday.toFixed(2) * 3650}`;
      year20.innerHTML = `$${dollarsperday.toFixed(2) * 3650 * 2}`;
      para.innerHTML = `Cost to Date: $${dollarsperday.toFixed(2) * 365 * value4}`;
   } else {
      alert("Please insert values bigger than 0!");
   }
}

function resetAll() {
   input1.value = "";
   input2.value = "";
   input3.value = "";
   input4.value = "";
   day.innerHTML = "-";
   week.innerHTML = "-";
   month.innerHTML = "-";
   year.innerHTML = "-";
   year10.innerHTML = "-";
   year20.innerHTML = "-";
   para.innerHTML = "";
}
