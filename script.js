let mainEL = document.querySelector(".main");
let full = document.querySelector("#fullname");
let tel = document.querySelector("#tel");
let verify = document.querySelector("#verify");
let displayR = document.querySelector(".show");
// network icon carriers first 4 numbers
const icon = {
  MTN: "mtn.png",
  AIRTEL: "airtel.png",
  _9MOBILE: "9mobil.png",
  GLO: "glo.png",
};

// network carriers first 4 numbers
const detect = {
  MTN: ["0803", "0806", "0703", "0706", "0810", "0813", "0814", "0816", "0903", "0906", "0916", '0913', '0702'],
  GLO: ["0805", "0807", "0811", "0705", "0815", "0915", "0905"],
  AIRTEL: ["0802", "0808", "0812", "0701", "0708", "0902", "0907", "0901", "0904", "0912", "0907"],
  _9MOBILE: ["0809", "0817", "0818", "0908", "0909"],
};

// this is the button that carries out the event execution
verify.addEventListener("click", () => {
  let telNumber = tel.value;
  let full = fullname.value;
  sliceNumber = telNumber.slice(0, 4);
  displayR.innerHTML = "";
  show = document.createElement("V");
  img = document.createElement("img");
  displayR.appendChild(show);
  displayR.appendChild(img);
  // messageEL.appendChild(fullname);
  mainEL.appendChild(displayR);


  for (const properties in detect) {
    if (full == "") {
      show.innerText = "fullname can't be empty";
      show.style.color = "purple";
      return;

    } else if (telNumber == "") {
      show.innerText = "mobile number can't be empty!";
      show.style.color = "purple";
      return;


      // the digit should not be less< or more > than 11
    } else if (telNumber.length.toString() !== "11") {
      show.innerText = "phone number must be 11 digit";
      show.style.color = "blue";
      return;


      // it display result when all criteria are met
    } else if (detect[properties].includes(sliceNumber) && (full)) {
      show.innerText = ` Dear ${full}, your mobile number is ${properties}.`;
      img.src = `${icon[properties]}`;
      show.style.color = "blue";
      return;

      // when the number format is not found in the detect network carrier it display invalid
      // } else{
      //   show.innerHTML = "invalid number or not registered";
      //   show.style.color = "red";
      //   return;
    }
  }
});