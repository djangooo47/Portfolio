/*************************************** effet typing sur le texte a gauche de la photo ****************************************/


        var typed = new Typed(".typing", {
            strings: ["Développeur Web et Web mobile", "Sportif", "Photographe", "Créatif"], /*valeurs effet typing*/
            typespeed: 60, /*vitesse d'écriture*/
            backSpeed: 60, /*vitesse de retour en arrière*/
            loop: true
        });

/***** animation icone engrenage pour le clic et sur la palette de couleur pour qu'une fois avoir cliquer le theme change ******/
    

        document.querySelector('.switcher-btn').onclick = ()=>{
                
        document.querySelector('.color-switcher1').classList.toggle('active');
        let themebuttons = document.querySelectorAll('.theme-buttons');
                   
        themebuttons.forEach(color =>{
        color.addEventListener('click', () =>{
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--main-color', dataColor);
                                
                 });
                              
            });

        };



