let output = document.getElementById("output");

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
    ["GOOGLE data analytics", "IBM data analytics"],
    ["English", "Hindi", "Tamil"],
    "https://priyanairdata.ca",
    false,
    true,
    ["Detail-oriented", "Analytical thinking"],
    false
);

function YesOrNo(value) {
    if (value == true) return "Yes";
    else return "No";
}

let fullname = document.getElementById("fullname");
fullname.textContent = priyaNair.name;

let role = document.getElementById("role");
role.textContent = priyaNair.targetRole;

let experience = document.getElementById("experience");
experience.textContent = priyaNair.YearsOfExperience;

let education = document.getElementById("education");
education.textContent = priyaNair.education;

let skills = document.getElementById("skills");
skills.textContent = priyaNair.skills.join(", ");

let certification = document.getElementById("certification");
certification.textContent = priyaNair.certifications.join(", ");

let languagesSpoken = document.getElementById("languages");
languagesSpoken.textContent = priyaNair.languagesSpoken.join(", ");

let portfolioLink = document.getElementById("portfolio");
portfolioLink.textContent = priyaNair.portfolioLink;

let WillingToRelocate = document.getElementById("relocate");
WillingToRelocate.textContent = priyaNair.WillingToRelocate;

let remoteWorkPreferred = document.getElementById("remote");
remoteWorkPreferred.textContent = priyaNair.remoteWorkPreferred;

let softSkills = document.getElementById("softskills");
softSkills.textContent = priyaNair.softSkills.join(", ");

let openToInternship = document.getElementById("internship");
openToInternship.textContent = priyaNair.openToInternship;