let entered = 0;
let buttons = document.querySelectorAll(".btn");
let input = document.getElementById("display");
let del = document.getElementById("del");
let clear = document.getElementById("clear");
let enter = document.getElementById("enter");

window.onload = () => {
    input.value = "";
}

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (entered == 1) {
            input.value = "";
            entered = 0;
        }

        input.value += btn.value;
    })
});

enter.addEventListener("click", () => {
    entered = 1;
    try {
        let solution = eval(input.value);

        if (Number.isInteger(solution)) {
            input.value = solution;
        }
        else {
            input.value = solution.toFixed(2);
        }
    }
    catch(err) {
        alert("Invalid input");
    }
});

clear.addEventListener("click", () => {
    input.value = "";
});

del.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1);
});
