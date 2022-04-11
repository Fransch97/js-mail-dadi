// Esercizio di oggi:
// nome repo: js-mail-dadi
// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere (creare quindi una lista di utenti autorizzati),
// stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che “cosa” ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”

console.log("working");

const main = document.querySelector('main');
console.log(main);

const welcomeBtn = document.querySelector('.welcome-btn');
console.log (welcomeBtn);

const gameBtn = document.querySelector('.play-game-btn');
console.log(gameBtn);

const loginBtnMain = document.querySelector('.accedi-main');
console.log(loginBtnMain);

const notLoggedContainer = document.querySelector('.notlogged');
console.log(notLoggedContainer);

const loginContainer = document.querySelector('.login-container');
console.log(loginContainer);

const navLoginBtn = document.querySelector('.accedi-nav');

const navLogoutBtn = document.querySelector('.logout-nav');

const formfakes = document.querySelector('.register-container');

const registerNavBtn = document.querySelector('.register-nav');


let logged = false;
console.log(logged);

const submitBtn = document.querySelector('.submit-fake');
console.log(submitBtn);

const submitRegister = document.querySelector('.submit-register-fake')
console.log(submitRegister)

const mailAcc = ["a@gmail.com", "b@gmail.com", "c@gmail.com"]
const passwordAcc = ["parolaccia", "banana", "acdc"]


const headernotlogged = document.querySelector('.notlogged>h1');

const header3notlogged = document.querySelector('.notlogged>h3');

const gameMainBtn = document.querySelector('.gioca-main');
const gameNavBtn = document.querySelector('.play-game-btn');

const gameSection = document.querySelector('.game');

loginBtnMain.addEventListener('click', function(){
    notLoggedContainer.classList.toggle('display-none');
    loginContainer.classList.toggle('display-none');
})

navLoginBtn.addEventListener('click',function(){
    notLoggedContainer.classList.remove('display-none');
    loginContainer.classList.add('display-none');
    formfakes.classList.add('display-none');
})
welcomeBtn.addEventListener('click', function(){
    if(!(logged)){
        notLoggedContainer.classList.remove('display-none');
        loginContainer.classList.add('display-none');
        formfakes.classList.add('display-none');

    } else{
        gameSection.classList.add('display-none');
        notLoggedContainer.classList.remove('display-none');

        headernotlogged.innerHTML = `Loggato vai a giocare!`;

        header3notlogged.innerHTML = "Schiaccia gioca per giocare";

        loginBtnMain.classList.add('display-none');

        console.log(gameMainBtn)
        gameMainBtn.classList.remove('display-none');
        
        
    }
})
let trovato ;

submitBtn.addEventListener('click', function test(){
    let mailValue = document.querySelector('.email').value;
    for(i = 0; i < mailAcc.length; i++){
        mailAcc[i];
        console.log(mailAcc[i])
        // const errormessage = document.querySelector('.errorP')
        if(mailAcc[i] === mailValue ){
            logged = true;
            console.log(logged);

            navLoginBtn.classList.add('display-none')

            loginContainer.classList.add('display-none');

            notLoggedContainer.classList.remove('display-none')
            headernotlogged.innerHTML = `Loggato vai a giocare!`;

            header3notlogged.innerHTML = "Schiaccia gioca per giocare";

            loginBtnMain.classList.add('display-none');

            navLogoutBtn.classList.remove('display-none');

            registerNavBtn.classList.add('display-none')

            gameMainBtn.classList.remove('display-none');
            trovato = true;

        } 
        // else if (!(errormessage) || (mailAcc === mailValue) ){
        //     loginContainer.innerHTML += `<p class="errorP" style="color:red;">Email sbagliata o non registrata</p>`
        // }
    }
    const errms = document.querySelector('.messaggio-errore>p');
    console.log(errms)
    
    if(!(trovato ) ){
        
        document.querySelector('.messaggio-errore').innerHTML += `<p class="errorP text-center" style="color:red;">Email sbagliata o non registrata <br> Tranquillo! Puoi registrarti schiacciando nel menu sopra su "Registrati" lo si fa in men che si dica </p>`;
    }
})


navLogoutBtn.addEventListener('click', function(){
    location.reload();
})


gameMainBtn.addEventListener('click', function(){
    notLoggedContainer.classList.add('display-none');
    gameSection.classList.remove('display-none');
})

gameNavBtn.addEventListener('click', function(){
    if(logged === true){
        notLoggedContainer.classList.add('display-none');
        gameSection.classList.remove('display-none');
    }else{
        alert("Fai login per giocare")
    }
  
})

// REGISTER 
submitRegister.addEventListener('click', function(){
    const Nome = document.querySelector('.nome').value;
    // console.log(Nome);
    const cognome = document.querySelector('.cognome').value;
    // console.log(cognome);
    const registerMail = document.querySelector('.email-register').value;
    // console.log(registerMail);
    const registerpw = document.querySelector('.password-register').value;
    // console.log(registerpw);
    if(Nome === ""){
        document.querySelector('.nome-label').innerHTML += `
        <span style = "font-size:12px; color: red">Inserisci un nome</span>
        `;


        console.log(Nome, "nome")
    }else if(cognome === "" ){
        document.querySelector('.nome-label').innerHTML = `
        Nome
        `;
        
        document.querySelector('.cognome-label').innerHTML += `
        <span style = "font-size:12px; color: red">Inserisci un cognome</span>
        `;
        
        console.log("working 2 if")
    }else if(registerMail === "" ){
        document.querySelector('.nome-label').innerHTML = `
        Nome
        `;
        
        document.querySelector('.cognome-label').innerHTML = `
        Cognome
        `;

        document.querySelector('.mail-regi-label').innerHTML += `
        <span style = "font-size:12px; color: red">Inserisci un email</span>
        `;
        console.log("working 3if")
    }else if(registerpw === ""){
        document.querySelector('.nome-label').innerHTML = `
        Nome
        `;
        
        document.querySelector('.cognome-label').innerHTML = `
        Cognome
        `;

        document.querySelector('.mail-regi-label').innerHTML = `
        Email
        `;

        document.querySelector('.password-register-label').innerHTML += `
        <span style = "font-size:12px; color: red">Inserisci una password</span>

        `;
        console.log("working 4if");

    } else{
        document.querySelector('.password-register-label').innerHTML = `
        Password

        `;
        
        mailAcc.push(registerMail);
        console.log(mailAcc)
        console.log(formfakes);
        alert("Registrazione completata perfavore fare Login");
        formfakes.classList.add('display-none');
        notLoggedContainer.classList.remove('display-none')
    }
// else{
//     console.log(mailAcc) }
})


registerNavBtn.addEventListener('click', function(){
    notLoggedContainer.classList.add('display-none');
    loginContainer.classList.add('display-none');

    formfakes.classList.remove('display-none');

})

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const startGame = document.querySelector('.lancia');
console.log(startGame)

const gameP = document.querySelector('.game-paragraf');

const gameH3 = document.querySelector('.game-h3');

let playerScore = 0;
let pcScore = 0;

const imgBank = ['0','<img src="img/uno.png" alt="">','<img src="img/due.png" alt="">','<img src="img/tre.png" alt="">','<img src="img/quattro.png" alt="">', '<img src="img/cinque.png" alt="">', '<img src="img/sei.png" alt="">']

startGame.addEventListener('click',function(){
    // console.log(Math.ceil(Math.random()*6))
    let playerNumber = Math.ceil(Math.random()*6)
    console.log("player", playerNumber)

    let pcNumber = Math.ceil(Math.random()*6)
    console.log("ps", pcNumber)

    const htmlPlayerImg = document.querySelector('.imgplayer');
    const htmlPcImg = document.querySelector('.imgpc');

    htmlPlayerImg.innerHTML = imgBank[playerNumber];
    htmlPcImg.innerHTML = imgBank[pcNumber];

    if(playerNumber == pcNumber){
        console.log("avete pareggiato");
        gameH3.innerHTML = "Avete pareggiato";
        gameP.innerHTML = `Havete pareggiato tirando entrambi ${playerNumber}`;
    } else if(playerNumber > pcNumber){
        console.log("player ha vinto");
        gameH3.innerHTML = "Hai vinto";
        gameP.innerHTML = `Hai vinto con ${playerNumber} <br> contro Pc con ${pcNumber}`;
        playerScore++;
    } else{
        console.log("pc ha vinto");
        gameH3.innerHTML = "Hai perso";
        gameP.innerHTML = `Hai perso con ${playerNumber} <br> contro Pc con ${pcNumber}`;
        pcScore++;
    }
    document.querySelector('.span-player').innerHTML = `Il tuo punteggio è : ${playerScore}`;
    document.querySelector('.span-pc').innerHTML = `Il punteggio del pc è : ${pcScore}`;
})