    let searchForm = document.getElementById('searchForm');
    let searchInput = document.getElementById('searchInput');
    let image = document.getElementById('image');
    let duk = document.querySelector('.duk');
    
    
        searchForm.addEventListener('submit', gitSearch);

        async function gitSearch(event) {

            event.preventDefault();
            user = searchInput.value;


            const cred = {
                method: 'get',
                url: `https://api.github.com/users/${user}`,
                token: '91f713e06130937c162bdc2470c9e2489853f9d9',
                username: user
            };

            const credent = {
                method: 'get',
                url: `https://api.github.com/users/${user}/repos`,
                token: '91f713e06130937c162bdc2470c9e2489853f9d9',
                username: user
            }

            let res = await axios(cred);
            let response = await axios(credent);

            
            for (let i = 0; i < response.data.length; i++){
                  response.data[i].name
                    }
            
            searchInput.textContent = "";
            let div = document.createElement('div');
            duk.appendChild(div);
            
                  
            div.innerHTML = `
            <div class="col s12 m12 l6"> 
                        <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img src="${res.data.avatar_url}" alt="" srcset="" id="image">
                            </div>
                            <div class="card-content">
                                <span class="card-title  grey-text text-darken-4"> <span class="titre">Name : ${res.config.username}</span> <i class="btn material-icons right activator">Github repos<i class="material-icons right">backup</i></i></span>
                                
                                <div class="collection">
                                   <div class="collection-item">  Lien Github : 
                                        <a href="${res.data.html_url}" class="new badge right" data-badge-caption=""><i class="material-icons black-text">insert_link</i></a>
                                   </div>
                                   <div class="collection-item">  Repos publique : 
                                        <a href="#"> <span class="new badge right black white-text" data-badge-caption="">${res.data.public_repos}</span></a>
                                   </div>
                                </div>

                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Liste des repository publique:<i class="material-icons right">close</i></span>
                                <p></p>
                            </div>
                            </div>
                    </div>`



                    for (let i = 0; i < response.data.length; i++){
                    div.children[0].firstElementChild.lastElementChild.lastElementChild.insertAdjacentHTML('beforeend', `${response.data[i].name} </br>`) 

                 
                }
            }
