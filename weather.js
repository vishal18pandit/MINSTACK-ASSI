let getweather = () => {
    let url = "https://api.openweathermap.org/data/2.5/weather?appid=ed04108faf1ff7aca39c8049ae5db9ad&units=metric&q="
    let city = document.querySelector("#inputid").value || "mumbai"

    url = url + city

    let xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.onload = () => {

        let abc = JSON.parse(xhr.responseText)

        domoperation(abc.main);

    }
    xhr.send()
}
function domoperation(abc) {
    const parent = document.querySelector("#parent");
    const city = document.querySelector("#inputid").value

    let newele = parent.children[0].cloneNode(true)
    newele.innerHTML = city + " " + abc.temp_min
    newele.style.visibility = "visible"

    parent.insertBefore(newele, parent.firstChild)
    document.querySelector("#inputid").value = "";

}