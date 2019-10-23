// Axios/DOM challenge
let body = document.body;


let ul = document.createElement('ul');
let li = document.createElement('li');


axios.get("https://sei-api.herokuapp.com/students").then((response) => {
    let data = response.data;
    data.forEach(element => {
        let nameContainer = document.createElement('strong');
        nameContainer.innerText = capitalize(element.name);
        let knownForContainer = document.createElement('em');
        knownForContainer.innerText = element['known-for']
        body.append(nameContainer, knownForContainer);
    });
})

let capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
