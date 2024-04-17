/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

let errorPara = document.getElementById("error");
let uL = document.getElementById("list");

// TODO: Handle the resolved or rejected states of the promise
getList()
.then((resVal) => {
  console.log(resVal);
  resVal.forEach((hobbit) => {
    let li = document.createElement("li");
    li.textContent = hobbit;
    uL.appendChild(li);
  });
})
.catch((rejVal) => {
  console.log(rejVal);
  errorPara.textContent = rejVal.message;
})