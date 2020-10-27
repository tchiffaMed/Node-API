 //Selecteurs
 let searchForm = document.getElementById('SearchForm');
 let mots = document.getElementById('mots');
 let result = document.getElementById('result');
 let title = document.querySelector('.title');
 let snippet = document.querySelector('.snippet');
 let read = document.querySelector('.read');

 //l'écouteur
 SearchForm.addEventListener('submit',search);
 
 //fonction de recuperation des resultats
 function  search(event) {
 event.preventDefault();
     result.innerHTML = "";
     word = mots.value.trim();
     console.log(word);
     const url = `https://fr.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${mots.value}`;
     fetch(url)
     .then(res => res.json())
     .then(res => {

         res.query.search.forEach(element => {
             console.log(element);  
         });

         res.query.search.forEach(element => {
             let div = document.createElement('div');
             result.appendChild(div);

              div.innerHTML = `  <div class="element card  shafe">
                                 <div class="title">${element.title}</div>
                                 <div class="snippet">${element.snippet}</div>
                                 <a href="https://fr.wikipedia.org/?curid=${element.pageid}">Read more</a>
                                 </div>`
         });
         mots.value = "";
     })
 }
 console.log(mots.value);