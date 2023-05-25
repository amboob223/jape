
//users
const uname = document.getElementById("uname");
const uphone = document.getElementById("uphone");
const uemail = document.getElementById("uemail");
const uorigin = document.getElementById("uorigin");
const udestinaton = document.getElementById("udestination");
const uimage = document.getElementById("uimage");
const ubutton = document.getElementById("ubtn");
const gettrav = document.getElementById("gettrav")
const tbody = document.querySelector(".tbody")

ubutton.addEventListener("click", async (event) => {
    try {
        event.preventDefault()//because the page will restart itself 

        const body = new FormData();

        body.append("uname", uname.value)// this makes an object with name as the key and the value is the 2nd parmeter
        body.append("uphone", uphone.value)
        body.append("uemail", uemail.value)
        body.append("uorigin", uorigin.value)
        body.append("udestination", udestinaton.value)
        body.append("uimage", uimage.files[0])//the files . zero is from formdata is gives us an arry of the file elements in the form and [0[ is yhe first one]]

        const response = await fetch("http://localhost:5000/users",
            {
                method: "POST",
                body: body
            })

        uname.value = ""
        uphone.value = ""
        uemail.value = ""
        uorigin.value = ""
        udestinaton.value = ""


        console.log("workk")
    } catch (error) {
        console.log(error)
    }

});

gettrav.addEventListener("click", async (event) => {

    try {
        event.preventDefault();
        const table = document.querySelector("table")
        table.style.display = "table-row-group"
        //wipe up the row 
        tbody.innerHTML = ""

        //this pops up the column infor when the button is clicked 


        const data = await fetch("http://localhost:5000/travelers");
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



