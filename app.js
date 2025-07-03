const employeeName = document.querySelector("#fullname");
const role = document.querySelector("#role");
const YearsOfExperience = document.querySelector("#experience");
const education = document.querySelector("#education");
const skills = document.querySelector("#skills");
const certifications = document.querySelector("#certification");
const languagesSpoken = document.querySelector("#languages");
const portfolioLink = document.querySelector("#portfolio");
const WillingToRelocate = document.querySelector("#relocate");
const remoteWorkPreferred = document.querySelector("#remote");
const softSkills = document.querySelector("#softskills");
const openToInternship = document.querySelector("#internship");

function Person(name, location, targetRole, YearsOfExperience, education, skills, certifications, languagesSpoken, portfolioLink, WillingToRelocate, remoteWorkPreferred, softSkills, openToInternship) {
    this.name = name;
    this.location = location;
    this.targetRole = targetRole;
    this.YearsOfExperience = YearsOfExperience;
    this.education = education;
    this.skills = skills;
    this.certifications = certifications;
    this.languagesSpoken = languagesSpoken;
    this.portfolioLink = portfolioLink;
    this.WillingToRelocate = WillingToRelocate;
    this.remoteWorkPreferred = remoteWorkPreferred;
    this.softSkills = softSkills;
    this.openToInternship = openToInternship;
}

let priyaNair = new Person(
    "Priya Nair",
    "Mississauga, ON",
    "Data Analyst",
    3,
    "Bcs in Statistics, University of Toronto",
    ["Python", "SQL", "Tableau", "Excel"],
    ["Google data analytics", "IBM data analytics"],
    ["English", "Hindi", "Tamil"],
    "https://priyanairdata.ca",
    false,
    true,
    ["Detail-oriented", "Analytical thinking"],
    false
);

employeeName.textContent = priyaNair.name;
role.textContent = priyaNair.targetRole;
YearsOfExperience.textContent = priyaNair.YearsOfExperience;
education.textContent = priyaNair.education;
skills.textContent = priyaNair.skills.join(", ");
certifications.textContent = priyaNair.certifications.join(", ");
languagesSpoken.textContent = priyaNair.languagesSpoken.join(", ");
portfolioLink.innerHTML = `<a href="${priyaNair.portfolioLink}">${priyaNair.portfolioLink}</a>`;
WillingToRelocate.textContent = priyaNair.WillingToRelocate ? "Yes" : "No";
remoteWorkPreferred.textContent = priyaNair.remoteWorkPreferred ? "Yes" : "No";
softSkills.textContent = priyaNair.softSkills.join(", ");
openToInternship.textContent = priyaNair.openToInternship ? "Yes" : "No";