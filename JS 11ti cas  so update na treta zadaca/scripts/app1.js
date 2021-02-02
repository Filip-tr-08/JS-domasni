const sub = document.querySelector(".submit");
const reg = document.querySelector(".reg-form");
const hello = document.querySelector(".hello");
const bal = document.querySelector(".balance");
const btns = document.querySelector(".btns");
const number = document.querySelector(".number");
const buttons = document.querySelectorAll(".btn");
const box1 = document.querySelector(".box1");
const sub1 = document.querySelector(".submit1");
const box2 = document.querySelector(".box2");
const sub2 = document.querySelector(".submit2");
const exit = document.querySelector(".log-out");

function ATM(balance) {
  this.balance = balance;
  this.makeDeposit = function (x) {
    return (this.balance = this.balance + x);
  };
  this.makeWithdrawal = function (x) {
    return (this.balance = this.balance - x);
  };
  this.getBalance = function () {
    return this.balance;
  };
}
let atm = new ATM(10000);
exit.addEventListener("click", function () {
  reg.classList.add("reg-form-hide");
  box1.classList.remove("box1-show");
  box2.classList.remove("box2-show");
  btns.classList.remove("btns-show");
  hello.classList.remove("hello-show");
  number.classList.remove("number-show");
  const text = document.createElement("div");
  text.innerHTML = `<h1 class="heading">Goodbye have a good day!!!</h1>`;
  document.body.append(text);
});
sub.addEventListener("click", function () {
  const val = document.getElementById("name").value.toUpperCase();
  hello.classList.add("hello-show");
  btns.classList.add("btns-show");
  reg.classList.add("reg-form-hide");
  hello.textContent = `Hello ${val} what do you want to do?`;
});
buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("balance")) {
      hello.textContent = `Your balance is:`;
      number.classList.add("number-show");
      number.textContent = `${atm.getBalance()}$`;
      box1.classList.remove("box1-show");
      box2.classList.remove("box2-show");
    }
    if (styles.contains("take")) {
      hello.textContent = `How much money you want to take?`;
      box1.classList.add("box1-show");
      box2.classList.remove("box2-show");
      number.classList.remove("number-show");
      sub1.addEventListener("click", function () {
        let val1 = document.getElementById("money").value;
        if (atm.balance < parseInt(val1)) {
          reg.classList.add("reg-form-hide");
          box1.classList.remove("box1-show");
          box2.classList.remove("box2-show");
          btns.classList.remove("btns-show");
          hello.classList.remove("hello-show");
          number.classList.remove("number-show");
          const text1 = document.createElement("div");
          text1.innerHTML = `<h1 class="heading1">Not enough money..sorry :(</h1>`;
          document.body.append(text1);
        } else {
          atm.makeWithdrawal(parseInt(val1));
          console.log(atm.balance);
          val1 = document.getElementById("money").value = 0;
        }
      });
    }
    if (styles.contains("insert")) {
      hello.textContent = `How much money you want to insert?`;
      box2.classList.add("box2-show");
      box1.classList.remove("box1-show");
      number.classList.remove("number-show");
      sub2.addEventListener("click", function () {
        let val2 = document.getElementById("money2").value;
        atm.makeDeposit(parseInt(val2));
        console.log(atm.balance);
        val2 = document.getElementById("money2").value = 0;
      });
    }
  });
});
