// Form elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const addExperienceBtn= document.getElementById('add-experience-btn') as HTMLButtonElement;
const addEducationBtn= document.getElementById('add-education-btn') as HTMLButtonElement;
const experienceSection = document.getElementById('experience-section') as HTMLElement;
const educationSection = document.getElementById('education-section') as HTMLElement;
const resumeOutput = document.getElementById('resume-output') as HTMLElement;

let experienceCount = 0;
let educationCount = 0;

addExperienceBtn.addEventListener('click', () => {
    experienceCount++;
    const experienceDiv = document.createElement('div');
    experienceDiv.classList.add('experience-entry');
    experienceDiv.innerHTML = `
        <label for="company-${experienceCount}">Company:</label>
        <input type="text" id="company-${experienceCount}" required>

        <label for="role-${experienceCount}">Role:</label>
        <input type="text" id="role-${experienceCount}" required>

        <label for="duration-${experienceCount}">Duration:</label>
        <input type="text" id="duration-${experienceCount}" required>
        
        <label for="description-${experienceCount}">Description:</label>
        <textarea id="description-${experienceCount}" rows="4" required></textarea>
    `;
    experienceSection.appendChild(experienceDiv);
});

addEducationBtn.addEventListener('click', () => {
    educationCount++;
    const educationDiv = document.createElement('div');
    educationDiv.classList.add('education-entry');
    educationDiv.innerHTML = `
        <label for="school-${educationCount}">School/University:</label>
        <input type="text" id="school-${educationCount}" required>

        <label for="grade-${educationCount}">Grade:</label>
        <input type="text" id="grade-${educationCount}" required>

        <label for="passing-year-${educationCount}">Passing Year:</label>
        <input type="date" id="passing-year-${educationCount}" required>
        
    `;
    educationSection.appendChild(educationDiv);
});

form.addEventListener('submit', (event:Event) => {
    event.preventDefault();

    // Collect data from the form
    const profilePicture = (document.getElementById("profile-pic") as HTMLInputElement).files?.[0];
    const profilePictureUrl = profilePicture? URL.createObjectURL(profilePicture):"";
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Create a section for the resume output
    let resumeHTML = `
        <h1>Editable resume builder</h1> <br/>   
       <h3>personal infomation:</h3>
        <img src=${profilePictureUrl} alt="profile-picture" />
        <p><b>Name: </b> <span contenteditable="true">${name}</span> </p>
        <p><b>Email:</b>  <span contenteditable="true">${email}</span> | <b>Phone: </b>  <span contenteditable="true">${phone}</span></p>
        <p><b>Address: </b>  <span contenteditable="true">${address}</span></p>
       
        
    `;


    
 

    // Loop through all the experience entries
    const experienceEntries = document.querySelectorAll('.experience-entry');
    experienceEntries.forEach((entry, index) => {
        const company = (document.getElementById(`company-${index + 1}`) as HTMLInputElement).value;
        const role = (document.getElementById(`role-${index + 1}`) as HTMLInputElement).value;
        const duration = (document.getElementById(`duration-${index + 1}`) as HTMLInputElement).value;
        const description = (document.getElementById(`description-${index + 1}`) as HTMLTextAreaElement).value;

        resumeHTML += `
          <h3>Experience:</h3>
            <p><b>Campany: </b>  <span contenteditable="true">${company}</span></p>
            <p><b>Role: </b>  <span contenteditable="true">${role}</span> </p>
            <p><b>Duration:</b>  <span contenteditable="true">${duration}</span></p>
            <p> <span contenteditable="true">${description}</span></p>
        `;
        
    });

     // Loop through all the education entries
     const educationEntries = document.querySelectorAll('.education-entry');
     educationEntries.forEach((entry, index) => {
         const school = (document.getElementById(`school-${index + 1}`) as HTMLInputElement).value;
         const grade = (document.getElementById(`grade-${index + 1}`) as HTMLInputElement).value;
         const passing_year = (document.getElementById(`passing-year-${index + 1}`) as HTMLInputElement).value;
 
         resumeHTML += `
            <h3>Education:</h3>
             <p><b>School/University:</b>  <span contenteditable="true">${school}</span></p>
             <p><b>Grade:</b>  <span contenteditable="true">${grade}</span> | <b>Passing year:</b>  <span contenteditable="true">${passing_year}</span></p>
     
         `;
     });

   

    resumeHTML += `<h3>Skills:</h3><p> <span contenteditable="true">${skills}</span></p>`;

    // Output the resume
    resumeOutput.innerHTML = resumeHTML;
});
