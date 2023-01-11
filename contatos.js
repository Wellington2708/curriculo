
 function mostrarDados(){
    document.getElementById("dados").innerHTML = 
    `
       
        <ol  id="dados__contato">
             <li class="nome">Nome: Wellington Luis Pereira Junior</li>
             <li>Data de nascimento: <span id="nascimento">27/08/1988</span></li>
             <li>Idade: <span id="idade">34</span></li>
             <li>Telefone:<span id="telefone"> ********* </span></li>
             <li>Morada: <span id="morada">Vila Nova de Famalicão - Porto</span> </li>
             <li class="cor__link"><i class="fa-solid fa-envelope"></i><a class="email" href="https://wellingtondevelopercontact@gmail.com">Enviar E-mail</a></li>
             <li class="cor__link"><i class="fa-brands fa-linkedin"></i><a class="linkedin" href="https://www.linkedin.com/in/wellington-junior-41513874/">Home Page</a></li>  
             <li class="cor__link"><i class="fa-brands fa-github"></i><a class="gitHub" href="https://github.com/Wellington2708">Home Page</a></li>
            
         </ol>
         <button id="fechar" onclick="fecharDados()">Fechar</button>
       
      `
    
      
}
