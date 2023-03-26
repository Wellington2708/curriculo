
 

 var botao = document.querySelector(".botao");
 botao.addEventListener("click", mostrarDados);
 
 function mostrarDados (){
    var dadosContato = document.querySelector("#dados");
    dadosContato.innerHTML = `
    <div id="dados__contato"> 
        <ul class="cabecalho__lista__contatos">
            <li class="nome">Nome: Wellington Luis Pereira Junior</li>
            <li>Data de nascimento: 27/08/1988</li>
            <li>Idade: 34</li>
            <li>Telefone: (+351) 938204083) </li>
            <li>Morada: Vila Nova de Famalicão - Porto</li>
            <li class="cor__link"><i class="fa-solid fa-envelope"></i><a class="email" href="mailto:wellingtondevelopercontact@gmail.com">Email</a></li>
            <li class="cor__link"><i class="fa-brands fa-linkedin"></i><a class="linkedin" href="https://www.linkedin.com/in/wellington-junior-41513874/">Home Page</a></li>  
            <li class="cor__link"><i class="fa-brands fa-github"></i><a class="gitHub" href="https://github.com/Wellington2708">Home Page</a></li>   
        
        </ul>
        <div>
            <button onclick="fecharDados()" class="fechar" >X</button> 
        </div> 
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

