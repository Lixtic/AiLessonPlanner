document.addEventListener('DOMContentLoaded', () => {
    const lessonForm = document.getElementById('lesson-form');
    const lessonsList = document.getElementById('lessons-list');
    let lessons = JSON.parse(localStorage.getItem('lessons')) || [];

    const saveLessons = () => {
        localStorage.setItem('lessons', JSON.stringify(lessons));
    };

    const displayLessons = () => {
        lessonsList.innerHTML = '';
        lessons.forEach((lesson, index) => {
            const lessonElement = document.createElement('div');
            lessonElement.className = 'lesson';
            lessonElement.innerHTML = `
            <h3> ${lesson.week } Ending: ${lesson.date} | Day: ${lesson.day} </h3>
               
               
                <table>
                <tr>
                   <th> Subject: ${lesson.subject}</th>
                   <th> Week: ${lesson.week}</th>
                   <th> Duration: ${lesson.duration}</th>
                   <th> Class: ${lesson.classname}</th>

                </tr>
                <tr>
                    <th> Strand </th><td>${lesson.strand}</td>
                    <th > Sub Strand </th> <td>${lesson.substrand}</td>
                </tr>
                <tr>
                    <th > Coontent Standard </th> <td colspan = "3">${lesson.contentStandard}</td>
                </tr>
                <tr>
                    <th > Learning Outcome </th> <td colspan = "3">${lesson.title}</td>
                </tr>
                <tr>
                    <th > Learning Indicator</th> <td colspan = "3">  ${lesson.indicator}</td>
                </tr>

                <tr>
                    <th>
                    Phase Duration
                     
                     </th>
                     <td>
                     ${lesson.phaseDuration}
                     <td/>
                </tr>
                <tr>
                    <th>
                     Learners Activities
                     </th>
                </tr>
                <tr>
                    <th>
                    Resources
                     
                     </th>
                     <td>  ${lesson.resources}<td/>
                </tr>
                <tr>
                    <th>
                     
                     </th>
                </tr>
                   
                    
                  
                </table>
                
                <p>${lesson.content}</p>
                <button onclick="editLesson(${index})">Edit</button>
                <button onclick="deleteLesson(${index})">Delete</button>
                
            `;
            lessonsList.appendChild(lessonElement);
        });
    };

    lessonForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const week = document.getElementById('weekSelect').value;
        const day = document.getElementById('day').value;
        const subject = document.getElementById('subject').value;
        const title = document.getElementById('learning-outcome').value;
        const date = document.getElementById('lesson-date').value;
        const content = document.getElementById('lesson-content').value;
        const className = document.getElementById('className').value
        const classSize = document.getElementById('classSize').value;
        const duration = document.getElementById('duration').value;
        const strand = document.getElementById('strand').value;
        const substrand = document.getElementById('subStrand').value;
        const contentStandard = document.getElementById('contentStandard').value;
        const indicator = document.getElementById('indicator').value;
        const phaseDuration = document.getElementById('phase-duration').value;
        const learnersActivities = document.getElementById('learners-activities').value;
        const resources = document.getElementById('resources').value;


       


        lessons.push({
            week: week,
            day: day,
            subject: subject,
            title: title,
            date: date,
            content: content,
            classname : className,
            duration: duration,
            classSize: classSize,
            strand: strand,
            substrand: substrand,
            contentStandard: contentStandard,
            indicator : indicator,
            phaseDuration: phaseDuration,
            learnersActivities: learnersActivities,
            resources: resources




        });
        saveLessons();
        displayLessons();

        lessonForm.reset();
    });

    window.deleteLesson = (index) => {
        lessons.splice(index, 1);
        saveLessons();
        displayLessons();
    };
    window.editLesson = (index) => {
        const lessonToEdit = lessons[index];
  

        // Set the form values with the values of the lesson to edit
        document.getElementById('weekSelect').value = lessonToEdit.week;
        document.getElementById('day').value = lessonToEdit.day;
        document.getElementById('subject').value = lessonToEdit.subject;
        document.getElementById('learning-outcome').value = lessonToEdit.title;
        document.getElementById('lesson-date').value = lessonToEdit.date;
        document.getElementById('lesson-content').value = lessonToEdit.content;
        document.getElementById('className').value = lessonToEdit.classname;
        document.getElementById('classSize').value = lessonToEdit.classSize;
        document.getElementById('duration').value = lessonToEdit.duration;
        document.getElementById('strand').value = lessonToEdit.strand;
        document.getElementById('subStrand').value = lessonToEdit.substrand;
        document.getElementById('contentStandard').value = lessonToEdit.contentStandard;
        document.getElementById('indicator').value = lessonToEdit.indicator;
        document.getElementById('phase-duration').value = lessonToEdit.phaseDuration;
        document.getElementById('learners-activities').value = lessonToEdit.learnersActivities;
        document.getElementById('resources').value = lessonToEdit.resources;

        // Delete the original lesson as it will be updated
        lessons.splice(index, 1);
        saveLessons();
        displayLessons();
    };

    displayLessons();
});


document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    // Toggle the nav links when burger icon is clicked
    navLinks.classList.toggle('nav-active');

    // Burger animation
    burger.classList.toggle('toggle');
  });
});
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  // Toggle the nav links when burger icon is clicked
  navLinks.classList.toggle('nav-active');

  // Burger animation
  burger.classList.toggle('toggle');
});

// Function to perform an action when 'Note Creator' link is clicked
document.getElementById('noteCreatorLink').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior (for '#' in href)
  // Add your functionality here for 'Note Creator'
  console.log('Note Creator link clicked!');
  // You can perform actions like showing a section or executing specific code.
});

// Function to perform an action when 'Notes' link is clicked
document.getElementById('notesLink').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior (for '#' in href)
  window.location.href = 'note.html';
  console.log('Notes link clicked!');
});

// Similarly, add functionality for 'User' and 'Sign In' links
document.getElementById('userLink').addEventListener('click', (event) => {
  event.preventDefault();
  console.log('User link clicked!');
});

document.getElementById('signInLink').addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Sign In link clicked!');
});



