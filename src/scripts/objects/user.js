const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '', 
    repositories: [],
    events: [],
    followers: '',
    following: '',
    setInfo(githubUser){
        this.avatarUrl = githubUser.avatar_url
        this.name = githubUser.name
        this.bio = githubUser.bio
        this.username = githubUser.login
        this.followers = githubUser.followers
        this.following = githubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
    },
    setEvents(events){
        this.events = events
    },
}

export { user }