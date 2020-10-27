let joke = document.getElementById('joke');
let icon = document.getElementById('icon');
const spin = document.querySelector('.spin')

 
    blague ();
    function blague (){
   spin.classList.remove('cacher');
   console.log('ok');
   

    fetch('https://api.chucknorris.io/jokes/random')

    .then(res => res.json())

    .then(res => {
        
        console.log(res);
        
                    console.log(JSON.stringify(res.icon_url));
                console.log(JSON.stringify(res.value));       
            icon.innerHTML= `<img src="${res.icon_url}">`;
        newjoke.textContent = JSON.stringify(res.value);
        })
        
    .catch(error => console.log("error"))
   spin.classList.add('cacher')
    }