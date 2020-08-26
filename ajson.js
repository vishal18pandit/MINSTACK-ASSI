
let callAjax = () => {


    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.onload = () => {

        console.log(xhr.responseText);

        const refjson = JSON.parse(xhr.responseText);

        handleDOMOperatoinUsingJSON(refjson);
    };

    xhr.send();
};

let handleDOMOperatoinUsingJSON = (refjson) => {

    for (let i = 0; i < refjson.length; i++) {
        let item = refjson[i];

        const parent = document.querySelector("#parent");
        const newElement = parent.children[0].cloneNode(true);

        newElement.innerHTML = item.FirstName + " " + item.LastName;
        newElement.style.display = "flex";
        parent.insertBefore(newElement, parent.firstChild);
    }
};