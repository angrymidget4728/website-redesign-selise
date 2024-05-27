import express from "express";

const app = express();
const port = 3000;
const navlinksMain = {
    "/": "Home",
    "/who-we-are": "Who We Are",
    "/contact-us": "Contact Us",
    whatWeDo: {
        "/our-services": "Our Services",
        "/business-functions": "Business Functions",
    }
}

app.use(express.static("public"));

// Homepage
app.get("/", (req, res) => {
    res.render("index.ejs", { navlinksMain: navlinksMain, currentUrl: req.url });
})

// Who we are
app.get("/who-we-are", (req, res) => {
    res.render("who-we-are.ejs", { navlinksMain: navlinksMain, currentUrl: req.url });
})

// Contact Us
app.get("/contact-us", (req, res) => {
    res.render("contact-us.ejs", { navlinksMain: navlinksMain, currentUrl: req.url });
})

// What we do
app.get("/our-services", (req, res) => {
    res.render("our-services.ejs", { navlinksMain: navlinksMain.whatWeDo, currentUrl: req.url });
})

app.get("/business-functions", (req, res) => {
    res.render("business-functions.ejs", { navlinksMain: navlinksMain.whatWeDo, currentUrl: req.url });
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

app.listen(port, () => {
    console.log(`Server started in ${port}.`);
});