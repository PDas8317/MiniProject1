// let btn = document.querySelector("button");
// let inp = document.querySelector("input");
// let uList = document.querySelector("ul");
// let list = document.querySelector("li");


// btn.addEventListener("click", () => {
//     let item = document.createElement("li");
//     item.innerText = inp.value;

//     let delBtn = document.createElement("button");
//     delBtn.innerText = "Remove";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);
//     uList.appendChild(item);
//     inp.value = "";
// });

// uList.addEventListener("click", function (event) {
//     if (event.target.nodeName == "BUTTON") {
//         let listItem = event.target.parentElement;
//         listItem.remove();
//         console.log("Deleted");

//     }

// }
// );

let btn = document.querySelector("button");
let inp = document.querySelector("input");
let uList = document.querySelector("ul");

btn.addEventListener("click", function () {

    // // Create a list first to add tasks
    let items = document.createElement("li");
    items.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerHTML = '<i class="fa-solid fa-trash dlt"></i>';
    delBtn.classList.add("dlt");
    items.append(delBtn);

    // // Then append with the list item
    uList.appendChild(items);
    inp.value = "";
});


uList.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        // let listItem = event.target.parentElement;
        // listItem.remove();
        event.target.parentElement.remove();
    }
});

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    setInterval(() => {
        h1.style.color = color;
    }, delay);

}
changeColor("blue", 1000);
changeColor("rgb(233, 61, 90)", 2000);


