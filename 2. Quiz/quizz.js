let resource = document.getElementById('resource');
    let quiz = document.querySelectorAll('.quiz');
    let verifi = document.getElementById('verifi');
    let oui = document.getElementById('oui');
    let non = document.getElementById('non');
    let hum = document.querySelector('.hum')
    let yes = 0;
    let no = 0;
   
    
    demarre();
    
    //localStorage function
   
        const quest = document.querySelector('.quest');
        quest.classList.remove('hidden');
        hum.classList.add('hidden');
    

   function demarre() {
    
    

    fetch('https://opentdb.com/api.php?amount=1')
    .then(reponse => reponse.json())
    .then(reponse => {
        //renitialise les contenu
        for(i = 0; i < 4; i++){
            quiz[i].textContent='';
            quiz[i].style.backgroundColor = 'white';
            quiz[i].style.display = 'block'
            
        }
        
        if(!(localStorage.ouioui && localStorage.nonnon)){
            localStorage.ouioui = 0;
            localStorage.nonnon = 0
        } else{
            oui.textContent = localStorage.ouioui;
            non.textContent = localStorage.nonnon
        }

        console.log(reponse.results[0].incorrect_answers.length);
       


        //affiche la question
        resource.textContent = reponse.results[0].question;
        //affiche le nombrre de case 4 ou 2
        n = reponse.results[0].incorrect_answers.length === 3 ? 4 : 2;
        
        
        //affecte une position aleatoire à la bonne reponse
        bonne = Math.floor(Math.random()*n);
        quiz[bonne].textContent = reponse.results[0].correct_answer;
        // console.log(bonne);
        console.log('la bonne reponse: ' + reponse.results[0].correct_answer);
        console.log(localStorage)
        // console.log(reponse.results[0].incorrect_answers);

        //inserer les mauvaise reponses en evitant la position de la bonne reponse
        let j = 0;
        for(let i = 0; i < n; i++){

            if(i != bonne){
                    quiz[i].textContent = reponse.results[0].incorrect_answers[j];
                    j++;
            }
        }   
        //cacher les deux dernière cases si le nombre de questiion est egale à deux(2)
            if(n == 2){
                    quiz[3].style.display = 'none';
                    quiz[2].style.display = 'none';
        }

        //ecoute de cliq sur tous les boutons quiz
    quiz.forEach(qcm => qcm.addEventListener('click', (e) => {
     e.stopImmediatePropagation(); 
        if(e.target.textContent == reponse.results[0].correct_answer){
                        
                        localStorage.ouioui++;
                        
                        console.log(e.target.textContent);
                        
                        console.log(localStorage) 
                        
                        // console.log('Yes a atteint ' + yes );   
                } 
                else if(e.target.textContent != reponse.results[0].correct_answer){ 
                    console.log(e.target.textContent);
                        localStorage.nonnon++;
                       
                        console.log(localStorage)
                        // console.log('No a atteint ' + no );
                       
                      }

                    })
                )
                quest.classList.add('hidden');
                for(m of quiz){
            hum.classList.remove('hidden');
        }
//End of forEach
    })  

}

function reset() {
    localStorage.clear();
    localStorage.ouioui = 0;
    localStorage.nonnon = 0;
    oui.textContent = 0;
    non.textContent = 0;
    yes = 0; no = 0;
    window.location.reload()
}
function reload() {
    window.location.reload()
    oui.textContent = localStorage.ouioui
    non.textContent = localStorage.nonnon 
   
   }
  