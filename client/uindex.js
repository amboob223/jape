
//users
const uname = document.getElementById("uname");
const uphone = document.getElementById("uphone");
const uemail = document.getElementById("uemail");
const uorigin = document.getElementById("uorigin");
const udestinaton = document.getElementById("udestination");
const uimage = document.getElementById("uimage");
const ubutton = document.getElementById("ubtn");


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

        console.log("workk")
    } catch (error) {
        console.log(error)
    }

})
