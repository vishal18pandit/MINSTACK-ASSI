window.addEventListener("load", () => {


    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://reqres.in/api/users?page=2")

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            let sjson = JSON.parse(xhr.responseText)
            domlogic(sjson.data);
        }
    }

    xhr.send();
})

let domlogic = function (pqr) {
    const parent = document.querySelector("#parentblock");

    for (let i = 0; i < pqr.length; i++) {
        let item = pqr[i];

        const newele = parent.children[0].cloneNode(true)
        newele.style.display = "flex";

        newele.children[0].innerHTML =
            item.first_name + " " + item.last_name;

        parent.insertBefore(newele, parent.firstChild);
    }
}