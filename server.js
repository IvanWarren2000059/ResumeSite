const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Shared data every page can use in its title block / nav
const site = {
  name: "Ivan Warren R. Lontoc",
  role: "Junior Software Developer",
  email: "lontocivanwarren59@email.com",
  location: "Calabarzon, PH",
  github: "https://github.com/IvanWarren2000059",
  linkedin: "https://www.linkedin.com/in/ivan-warren-lontoc-aab413443/",
  cvDownloadUrl: "http://localhost:3000/assets/files/CV.pdf",
};

app.get("/", (req, res) => {
  res.render("index", { site, active: "home", sheet: "01", title: "Home" });
});

app.get("/systems", (req, res) => {
  res.render("systems", { site, active: "systems", sheet: "02", title: "Systems Developed" });
});

app.get("/hardware", (req, res) => {
  res.render("hardware", { site, active: "hardware", sheet: "03", title: "Home Service" });
});

app.get("/cv", (req, res) => {
  res.render("cv", { site, active: "cv", sheet: "04", title: "CV" });
});

// Stub route for the mock payroll system demo.
// Replace this render (or redirect to a separately hosted app) with your real project.
app.get("/payroll", (req, res) => {
  res.render("payroll", { site, active: "systems", title: "Mock Payroll System" });
});

// Run locally; Vercel imports the app as a serverless function instead of calling listen().
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
}

module.exports = app;
