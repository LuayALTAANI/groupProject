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