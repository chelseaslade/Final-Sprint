//Finail Sprint: Javascript
//Author: Chelsea Slade (Mayne)
//Date: April 3, 2024

//Test
console.log("This is my test!");

//Functions
function printFullName(patient) {
  return `${patient.fName} ${patient.lName}`;
}

function printfamDoc(patient) {
  return `${patient.familyDoc}`;
}

function contactInformation(patient) {
  return `Email: ${patient.phoneNum} Phone Number: ${patient.email}`;
}

//Fetch JSON Data
fetch("patients.json")
  .then((myObject) => myObject.json())
  .then((data) => {
    //Container for Patient Data
    const container = document.createElement("div");
    container.id = "patientContainer";

    //Loop through patients in JSON
    data.forEach((patient) => {
      const patientDiv = document.createElement("div");
      patientDiv.className = "patient";

      //Add data to div
      patientDiv.innerHTML = `
        <h3>${printFullName(patient)}</h3>
        <p>Family Doctor: ${printfamDoc(patient)}</br>
        ${contactInformation(patient)}</p>
        `;

      //Add div to container
      container.appendChild(patientDiv);

      //Print functions to console
      console.log(printFullName(patient));
      console.log(printfamDoc(patient));
      console.log(contactInformation(patient));
    });

    //Add container to HTML
    document.body.appendChild(container);
  })

  //Error Handling
  .catch((error) => {
    console.error(error);
  });
