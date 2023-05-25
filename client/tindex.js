//travelers
const namee = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const originn = document.getElementById("origin");
const destination = document.getElementById("destination");
const image = document.getElementById("image");
const button = document.getElementById("btn");
const tbody = document.querySelector("tbody")
const getusers = document.getElementById("getusers")

//travlerbtn
button.addEventListener("click", async (event) => {
    try {
        event.preventDefault()//because the page will restart itself 
        const body = new FormData();

        body.append("name", namee.value)// this makes an object with name as the key and the value is the 2nd parmeter
        body.append("phone", phone.value)
        body.append("email", email.value)
        body.append("origin", originn.value)
        body.append("destination", destination.value)
        body.append("image", image.files[0])//the files . zero is from formdata is gives us an arry of the file elements in the form and [0[ is yhe first one]]

        const response = await fetch("http://localhost:5000/travelers", {
            method: "POST",
            body: body
        })

        //now we wipe the form clean
        namee.value = ""
        phone.value = ""
        email.value = ""
        originn.value = ""
        destination.value = ""

        console.log("work")
    } catch (error) {
        console.log(error)
    }

})

// the get
getusers.addEventListener("click", async (event) => {

    try {
        event.preventDefault();
        //this is so nothing displays till i say 
        const table = document.querySelector("table")
        table.style.display = "table-row-group" // style and display node 

        tbody.innerHTML = ""
        const data = await fetch("http://localhost:5000/users");
        const par = await data.json(); // this give us a json object but we got to dod the 
        const info = par.rows

        info.map((info) => {
            //make the elements
            const row = document.createElement("tr");
            const name = document.createElement("td");
            const phone = document.createElement("td");
            const email = document.createElement("td");
            const origin = document.createElement("td");
            const destination = document.createElement("td");

            //populate the elements
            name.innerHTML = info.name
            phone.innerHTML = info.phone
            email.innerHTML = info.email
            origin.innerHTML = info.origin
            destination.innerHTML = info.destination

            //append to the rows
            row.appendChild(name)
            row.appendChild(phone)
            row.appendChild(email)
            row.appendChild(origin)
            row.appendChild(destination)

            // then the tbody is populated with the row wwe pop above
            tbody.appendChild(row)
            //
            console.log("work")
        })
    } catch (error) {
        console.log(error)
    }
})