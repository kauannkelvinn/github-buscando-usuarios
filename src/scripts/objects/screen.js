const screen = {
  userProfile: document.querySelector('.profile-data'),
  renderUser(user){
          this.userProfile.innerHTML = `<div class ="info">
                              <img src="${user.avatarUrl}" alt="Foto de perfil do usuário" />
                                <div class="data">
                                  <h1>${user.name ?? 'Não possui nome cadastrado 🥲'}</h1>
                                  <p>${user.bio ?? 'Não possui bio cadastrada 🥲'}</p>
                                         <div class="followers-following">
                                           <div>
                                            <h4>Seguidores</h4>
                                            <p>${user.followers}</p>
                                          </div>
                                           <div>
                                              <h4>Seguindo</h4>
                                             <p>${user.following}</p>
                                           </div>
                                         </div>
                                  </div> 
                              </div>`

    let repositoriesItens = ''
    user.repositories.forEach(repo => repositoriesItens += `<li>
                                                              <a href="${repo.html_url}" target="_blank">${repo.name}
                                                                <span>🍴 ${repo.forks_count}</span>
                                                                <span>⭐ ${repo.stargazers_count}</span>
                                                                <span>👀 ${repo.watchers_count}</span>
                                                                <span>💻 ${repo.language ?? 'N/A'}</span>
                                                                </a>
                                                            </li>`)
      
    if(user.repositories.length > 0){
      this.userProfile.innerHTML += `<div class="repositories section">
                                      <h2>Repositórios</h2>
                                       <ul>${repositoriesItens}</ul>
                                    </div>`
    }

    let eventsItens = ''
    user.events.forEach(event => {
      let message = ''
      if (event.type === "PushEvent") {
        message = event.payload.commits.map(commit => `- ${commit.message}`).join('<br>')
      } else {
        message = 'Sem mensagem de commit'
      }

      eventsItens += `<li><strong>${event.repo.name}</strong><br>${message}</li>`
    })

    if (user.events.length > 0) {
      this.userProfile.innerHTML += `
        <div class="events section">
          <h2>Eventos</h2>
          <ul>${eventsItens}</ul>
        </div>
      `
    }
  }, 
  renderNotFound(){
    this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
  },
  
}

export { screen }