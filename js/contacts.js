/*//Data variables

let countryNumber = 351;
let phoneNumber = 938204083;
let age = 34;
let city = 'Vila Nova de Famalicão';
let country = 'Portugal';

//functions variables

let contactDatas = document.querySelector("#datas");

*/

function datas(birth, prefix, number, age, city, country){
    let contactDatas = document.querySelector("#datas");
    contactDatas.innerHTML = `
    <div id="contact__datas"> 
        <ul class="cabecalho__lista__contatos">
            <li class="name">Name: Wellington Junior</li>
            <li><strong>Date of birth:</strong> ${birth}</li>
            <li><strong>Age:</strong>  ${age}</li>
            <li><strong>Phone Number:</strong> ${'+' + prefix} ${number} </li>
            <li><strong>City:</strong> ${city}</li>
            <li><strong>Country:</strong> ${country}</li>
            <li class="link__color"><i class="fa-solid fa-envelope"></i><a class="email" href="mailto:wellingtondevelopercontact@gmail.com">Email</a></li>
            <li class="link__color"><i class="fa-brands fa-linkedin"></i><a class="linkedin" href="https://www.linkedin.com/in/wellington-junior-41513874/">Linkedin</a></li>  
            <li class="link__color"><i class="fa-brands fa-github"></i><a class="gitHub" href="https://github.com/Wellington2708">GitHub</a></li>   
        
        </ul>
        <div>
            <button onclick="toCloseDatas()" class="close" >X</button> 
        </div> 
    </div>
    `
    


}
