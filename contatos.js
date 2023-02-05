
 

 var botao = document.querySelector(".botao");
 botao.addEventListener("click", mostrarDados);
 
 function mostrarDados (){
    document.querySelector("#dados").innerHTML = `
    <div id="dados__contato"> 
        <ol>
            <li class="nome">Nome: Wellington Luis Pereira Junior</li>
            <li>Data de nascimento: 27/08/1988</li>
            <li>Idade:34</li>
            <li>Telefone: ********* </li>
            <li>Morada: Vila Nova de Famalicão - Porto</li>
            <li class="cor__link"><i class="fa-solid fa-envelope"></i><a class="email" href="https://wellingtondevelopercontact@gmail.com">Enviar E-mail</a></li>
            <li class="cor__link"><i class="fa-brands fa-linkedin"></i><a class="linkedin" href="https://www.linkedin.com/in/wellington-junior-41513874/">Home Page</a></li>  
            <li class="cor__link"><i class="fa-brands fa-github"></i><a class="gitHub" href="https://github.com/Wellington2708">Home Page</a></li>   
        
        </ol>
        <button onclick="fecharDados()" class="fechar" >Fechar</button>  
    </div>
    `
 }



 function fecharDados (){
    document.querySelector("#dados__contato").innerHTML = `
    <div id="dados">
        <button onclick="mostrarDados()" class="botao">Dados para contato</button>
    </div> 
    `
 }

