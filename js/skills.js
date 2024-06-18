const courses = [
    {
      course: "Front-end developer",
      companyName: "Alura Course",
      country: "BR",
      startDate: "2022-01-05",
      endDate: "Currently",
      site: "https://www.alura.com.br",
      skills: [
        "Recruitment and selection",
        "Personal Department",
        "Quality",
        "Math",
        "Psychology",
        "Occupational hygiene and safety"
      ]
    },
    {
        course: "People Management",
        companyName: "FASAM - Faculdade Sul Americana",
        country: "BR",
        startDate: "2011-01-02",
        endDate: "2011-12-20",
        site: "https://fasam.edu.br/",
        skills: [
          "HTML",
          "CSS",
          "Javascript",
          "Programming logic",
          "Git",
          "GitHub",
          "Bootstrap",
          "React",
          "Node.js"
        ]
      }
]

const skills = document.querySelector('.skills__title');



courses.forEach((course) => {
    skills.innerHTML += `
                    <div class="studies">
                    <h2>${course.course} - ${course.companyName} - ${course.country}</h2>
                    <a
                    href="${course.site}" class="link__color alura__course"></a>

                    <p class="period">Date: ${course.startDate} to ${course.endDate}</p>
                    <ul>
                         ${course.skills.map((skill) => {
                    return `<li class="items">${skill}</li>`;
                }).join('')}
                    </ul>
                    </div>
    `;
});
