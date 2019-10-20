import firebase from 'firebase'

firebase.auth().onAuthStateChanged(user => {
        
    firebase.firestore().collection('projects').get()
        .then(projects => {
            let count = 0
            projects.forEach(project => {
                if(project.data()['admin'][0] == user.uid){
                    let accountFeed = document.getElementById('projectsField')
                    let cardToInsert = `
                    <router-link to="/project/${project.id}/feed">
                        <a href="#">
                            <div class="card project-card" style="width: 17rem; margin-right: 1rem">
                                <div class="card-body">
                                    <h6 class="card-title">${project.data()['shortName']} <span class="badge badge-pill badge-secondary"><strong>Activo</strong></span></h6>
                                </div>
                            </div>
                        </a>
                    </router-link>
                        `
                        accountFeed.insertAdjacentHTML('afterbegin', cardToInsert)
                        count += 1
                }
            })

            if (count == 0){
                let bannerForZeroProjects = document.getElementById('bgNoneProjects')
                bannerForZeroProjects.style.display = 'flex'
            } if(count >= 1) {
                let screenToSelectaProject = document.getElementById('projectLayout')
                screenToSelectaProject.style.display = 'flex'
            }
        })
})
