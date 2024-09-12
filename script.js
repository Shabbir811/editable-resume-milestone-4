// Form elements
var form = document.getElementById('resume-form');
var addExperienceBtn = document.getElementById('add-experience-btn');
var addEducationBtn = document.getElementById('add-education-btn');
var experienceSection = document.getElementById('experience-section');
var educationSection = document.getElementById('education-section');
var resumeOutput = document.getElementById('resume-output');
var experienceCount = 0;
var educationCount = 0;
addExperienceBtn.addEventListener('click', function () {
    experienceCount++;
    var experienceDiv = document.createElement('div');
    experienceDiv.classList.add('experience-entry');
    experienceDiv.innerHTML = "\n        <label for=\"company-".concat(experienceCount, "\">Company:</label>\n        <input type=\"text\" id=\"company-").concat(experienceCount, "\" required>\n\n        <label for=\"role-").concat(experienceCount, "\">Role:</label>\n        <input type=\"text\" id=\"role-").concat(experienceCount, "\" required>\n\n        <label for=\"duration-").concat(experienceCount, "\">Duration:</label>\n        <input type=\"text\" id=\"duration-").concat(experienceCount, "\" required>\n        \n        <label for=\"description-").concat(experienceCount, "\">Description:</label>\n        <textarea id=\"description-").concat(experienceCount, "\" rows=\"4\" required></textarea>\n    ");
    experienceSection.appendChild(experienceDiv);
});
addEducationBtn.addEventListener('click', function () {
    educationCount++;
    var educationDiv = document.createElement('div');
    educationDiv.classList.add('education-entry');
    educationDiv.innerHTML = "\n        <label for=\"school-".concat(educationCount, "\">School/University:</label>\n        <input type=\"text\" id=\"school-").concat(educationCount, "\" required>\n\n        <label for=\"grade-").concat(educationCount, "\">Grade:</label>\n        <input type=\"text\" id=\"grade-").concat(educationCount, "\" required>\n\n        <label for=\"passing-year-").concat(educationCount, "\">Passing Year:</label>\n        <input type=\"date\" id=\"passing-year-").concat(educationCount, "\" required>\n        \n    ");
    educationSection.appendChild(educationDiv);
});
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Collect data from the form
    var profilePicture = (_a = document.getElementById("profile-pic").files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureUrl = profilePicture ? URL.createObjectURL(profilePicture) : "";
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var skills = document.getElementById('skills').value;
    // Create a section for the resume output
    var resumeHTML = "\n        <h1>Editable resume builder</h1> <br/>   \n       <h3>personal infomation:</h3>\n        <img src=".concat(profilePictureUrl, " alt=\"profile-picture\" />\n        <p><b>Name: </b> <span contenteditable=\"true\">").concat(name, "</span> </p>\n        <p><b>Email:</b>  <span contenteditable=\"true\">").concat(email, "</span> | <b>Phone: </b>  <span contenteditable=\"true\">").concat(phone, "</span></p>\n        <p><b>Address: </b>  <span contenteditable=\"true\">").concat(address, "</span></p>\n       \n        \n    ");
    // Loop through all the experience entries
    var experienceEntries = document.querySelectorAll('.experience-entry');
    experienceEntries.forEach(function (entry, index) {
        var company = document.getElementById("company-".concat(index + 1)).value;
        var role = document.getElementById("role-".concat(index + 1)).value;
        var duration = document.getElementById("duration-".concat(index + 1)).value;
        var description = document.getElementById("description-".concat(index + 1)).value;
        resumeHTML += "\n          <h3>Experience:</h3>\n            <p><b>Campany: </b>  <span contenteditable=\"true\">".concat(company, "</span></p>\n            <p><b>Role: </b>  <span contenteditable=\"true\">").concat(role, "</span> </p>\n            <p><b>Duration:</b>  <span contenteditable=\"true\">").concat(duration, "</span></p>\n            <p> <span contenteditable=\"true\">").concat(description, "</span></p>\n        ");
    });
    // Loop through all the education entries
    var educationEntries = document.querySelectorAll('.education-entry');
    educationEntries.forEach(function (entry, index) {
        var school = document.getElementById("school-".concat(index + 1)).value;
        var grade = document.getElementById("grade-".concat(index + 1)).value;
        var passing_year = document.getElementById("passing-year-".concat(index + 1)).value;
        resumeHTML += "\n            <h3>Education:</h3>\n             <p><b>School/University:</b>  <span contenteditable=\"true\">".concat(school, "</span></p>\n             <p><b>Grade:</b>  <span contenteditable=\"true\">").concat(grade, "</span> | <b>Passing year:</b>  <span contenteditable=\"true\">").concat(passing_year, "</span></p>\n     \n         ");
    });
    resumeHTML += "<h3>Skills:</h3><p> <span contenteditable=\"true\">".concat(skills, "</span></p>");
    // Output the resume
    resumeOutput.innerHTML = resumeHTML;
});
