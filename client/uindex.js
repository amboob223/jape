
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
const rarri = document.querySelector(".rari")

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

        const response = await fetch("https://twokeycat.onrender.com/users",
            {
                method: "POST",
                body: body
            })

        alert("your sign up was sucessful")
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


        const data = await fetch("https://twokeycat.onrender.com/travelers");
        const par = await data.json(); // this give us a json object but we got to dod the 
        const info = par.rows

        info.map((info) => {
            //make the elements
            const row = document.createElement("tr");
            row.classList.add("rari")
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

            row.addEventListener("click", async () => {
                row.innerHTML = ""


            }) // so a nested event was the way

            console.log("work")
        })
    } catch (error) {
        console.log(error)
    }
})

//now we want  when you click the tr its lika a link that takes you to an greement page when that we generate a random code and the user gives it to the tukicat and if they input the code the user gives there name is deleted 
// for this to happen they would have had to speak and agree. 

// const rows = document.querySelectorAll("tbody tr")


// rows.forEach((row) => {
//     row.addEventListener("click", () => {
//         console.log("work")
//     })

// })
// delete row by adding class

