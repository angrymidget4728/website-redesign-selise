import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

// Homepage
app.get("/", (req, res) => {
    res.render("index.ejs", { title: "Home" });
})

// What we do
app.get("/our-services", (req, res) => {
    res.render("our-services.ejs", { title: "Our Services" });
})

app.get("/business-functions", (req, res) => {
    res.render("business-functions.ejs", { title: "Business Functions" });
})

app.get("/industry-expertise", (req, res) => {
    res.render("industry-expertise.ejs", { title: "Industry Expertise" });
})

app.get("/technology", (req, res) => {
    res.render("technology.ejs", { title: "Technology" });
})

app.get("/saas", (req, res) => {
    res.render("saas.ejs", { title: "SaaS" });
})

// Contact Us
app.get("/contact-us", (req, res) => {
    res.render("contact-us.ejs", { title: "Contact Us" });
})

app.listen(port, () => {
    console.log(`Server started in ${port}.`);
});