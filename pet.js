function createPet() {
  let nome = document.forms["inputForm"]["petName"].value;
  let proprietario = document.forms["inputForm"]["ownerName"].value;
  let specie = document.forms["inputForm"]["species"].value;
  let razza = document.forms["inputForm"]["breed"].value;
  const pet = new Pet(nome, proprietario, specie, razza);
  lista.push(pet);
  console.log("ho pushato " + nome);
  addToList(pet);
}

class Pet {
  constructor(pN, prop, s, r) {
    this.petName = pN;
    this.ownerName = prop;
    this.species = s;
    this.breed = r;
    this.compareBreed = function (b2) {
      if (this.ownerName === b2.ownerName) {
        console.log(this.petName + " ha lo stesso padrone di " + u2.petName);
        return true;
      } else {
        return false;
      }
    };
  }
}
let lista = [];

function addToList(pet) {
  let petList = document.getElementById("listaPet");
  //for (let i of lista) {
  alert(pet.petName);
  let li = document.createElement("li");
  li.innerHTML = pet.petName;
  petList.appendChild(li);
}
//}
