const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const multer = require("multer");
const path = require("path");

//middleware 
app.use(cors());
app.use(express.json())

app.set("view engine", "ejs")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images/")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })

//post

app.get("/", (req, res) => {
    res.send("hello")
})



app.post("/travelers", upload.single("image"), async (req, res) => {
    try {
        const { name, phone, email, origin, destination } = req.body
        const { image } = req.file

        const newData = await pool.query(
            "INSERT INTO travelers(name,phone,email,origin,destination,pic)VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
            [name, phone, email, origin, destination, image]
        )

        res.json(newData.rows[0]) // we got to parse the json from the request 

        console.log("doc")
    } catch (error) {
        console.log(error)
    }
})//it need to be the same as the name in the element in the single() part

app.post("/users", upload.single("uimage"), async (req, res) => {
    try {
        const { uname, uphone, uemail, uorigin, udestination } = req.body //this is object deconstructing which is making varibles from the key objects in the req.body object 
        const { uimage } = req.file// because we did uimage.files[0] to get the first element of files array which gives an array of all the file data in the formData object


        const newData = await pool.query(
            "INSERT INTO users(name,phone,email,origin,destination,pic) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
            [uname, uphone, uemail, uorigin, udestination, uimage] //we got to use the names in the sql query 
        )

        res.json(newData.rows[0])
        console.log("rock")
    } catch (error) {
        console.log(error)
    }
});

//get for travelers an users 
app.get("/travelers", async (req, res) => {

    try {
        const data = await pool.query(
            "SELECT * FROM travelers;"
        );
        res.json(data)
    } catch (error) {
        console.log(error)
    }
});

app.get("/users", async (req, res) => {


    try {
        const data = await pool.query(
            "SELECT * FROM users;"
        )
        res.json(data)//the res is the response from the server to the browser based of the browsers req

    } catch (error) {
        console.log(error)
    }
})

{
    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => {
        console.log("class")
    })
}