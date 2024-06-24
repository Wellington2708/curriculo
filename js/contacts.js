const datas = {
    name: 'Wellington',
    lastName: 'Junior',
    birth: '27/08/1988',
    age: 35,
    prefix: 351,
    number: 938204083,
    city: 'Vila Nova de Famalicão',
    country: 'Portugal',
    email: 'wellingtondevelopercontact@gmail.com'
};

let containerButton = document.querySelector("#datas");

containerButton.addEventListener("click", (event) => {
    if (event.target.classList.contains('button__datas')) {
        containerButton.innerHTML = `
        <div id="datas" class="contact__datas"> 
            <ul class="header__list__contacts">
                <li class="name">Name: ${datas.name} ${datas.lastName}</li>
                <li>Date of birth: ${datas.birth}</li>
                <li>Age: ${datas.age}</li>
                <li>Phone Number: ${'(+' + datas.prefix}) ${datas.number}</li>
                <li>City: ${datas.city}</li>
                <li>Country: ${datas.country}</li>
                <li class="link__color"><i class="fa-solid fa-envelope"></i><a class="email" href="mailto:${datas.email}" target='_blank'>Email</a></li>
                <li class="link__color"><i class="fa-brands fa-linkedin"></i><a class="linkedin" href="https://www.linkedin.com/in/wellington-junior-41513874/" target='_blank'>Linkedin</a></li>  
                <li class="link__color"><i class="fa-brands fa-github"></i><a class="gitHub" href="https://github.com/Wellington2708" target='_blank'>GitHub</a></li>   
            </ul>
            <div>
                <button class="close">X</button> 
            </div> 
        </div>
        `;
    }else{
        containerButton.innerHTML = `
        <div id="datas" class="contact__datas">
            <button class="button__datas">My datas</button>
        </div>
    `;
    }

});
