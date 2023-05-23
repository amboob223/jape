//travelers
const namee = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const originn = document.getElementById("origin");
const destination = document.getElementById("destination");
const image = document.getElementById("image");
const button = document.getElementById("btn");


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
        console.log("work")
    } catch (error) {
        console.log(error)
    }

})
