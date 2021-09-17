//you tube

    (function() {
    var v = document.getElementsByClassName("youtube-player");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
    p.innerHTML = labnolThumb(v[n].dataset.id);
    p.onclick = labnolIframe;
    v[n].appendChild(p);
    }
})();

    function labnolThumb(id) {
    return '<img class="youtube-thumb" src="//i.ytimg.com/vi/' + id + '/hqdefault.jpg"><div class="play-button"></div>';
}

        function labnolIframe() {
    var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "//www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=1&showinfo=1");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("id", "youtube-iframe");
        this.parentNode.replaceChild(iframe, this);
}




//form convalida
/*
function submit_iscrizione() {

    var email_value = $('#email').val();

    $.post("ajax_subscribe.php", { email: email_value }, function (response) {

        if (response != '') { alert(response) };
        alert('Thank You !');

    });

}
*/




//validazione

//<script type="text/javascript">
    function validate(form_id,email) {

   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2, 4})$/;
    var address = document.forms[form_id].elements[email].value;
    if(reg.test(address) == false) {

        alert('Invalid Email Address');
    return false;
   }
}
//</script>

// fine form





function save() {
   
    let inseredUsername = document.getElementById("username").value;

    
    let inseredEmail = document.getElementById("mail").value;

  
    localStorage.setItem('username', inseredUsername)
    localStorage.setItem('mail', inseredEmail)
}


function change() {
    
    let inputs = document.querySelectorAll("input[type='text'], input[type='email']");

    //recupero il tasto di login 
    let loginButton = document.querySelector("input[type=submit]");

    //Ciclo su inputs per verificare se sono compilati o meno
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") //se l'i-esimo campo input ha valore stringa vuota
        {
            loginButton.disabled = true; 
        }
    }
    loginButton.disabled = false; 
}

//Funzione che nasconde la form e fa comparire il tasto logout (quando l'utente invia la form, cioè clicca su login)
function hideForm() {
    //recuperare tramite id e nascondere la form 
    let form = document.getElementById("formIscrizione");

    form.style.display = "none"; 

    //recuperare e far comparire il tasto logout 
    let AnnullaIscButton = document.getElementById("AnnullaIscrizione");

    AnnullaIscButton.style.display = "";
}



function checkLoggedUser() {
    //recuperare i dati dal local storage
    //se c'è un oggetto con chiave username e un oggetto con chiave password => utente loggato => vede solo tasto logout
    //se non c'è un oggetto con chiave username e un oggetto con chiave password => utente non loggato => vede form di login con tasto login disabilitato

    let storedUsername = localStorage.getItem('username'); //recupero l'oggetto con getItem passandogli la chiave (key)
    let storedEmail = localStorage.getItem('mail');

    if (storedUsername != null && storedEmail != null) //se è loggato => trova qualcosa nel local storage
    {
        //nascondere form e mostrare tasto logout
        hideForm(); //chiamo la funzione che lo fa
    }

}

//L'utente loggato può fare log out cliccando sul tasto Logout. Quando l'utente clicca su Logout, torna la form con il tasto login disabled e lo storage viene svuotato
function Unsubscribe() {

    
    localStorage.clear();

    //recuperare la form e mostrarla di nuovo 
    let form = document.getElementById("formIscrizione");
    form.style.display = "";

    //recuperare e nascondere tasto logout
    let logoutButton = document.getElementById("logOutButton");
    logoutButton.style.display = "none";

}