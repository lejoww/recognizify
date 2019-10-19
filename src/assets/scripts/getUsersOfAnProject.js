import firebase from 'firebase'

function getProjectCodeOnUrlPath (){
    firebase.auth().onAuthStateChanged(user => {
        let urlPath = window.location.pathname
        const PROJECTCODE = urlPath.slice(9, -5)

        if (PROJECTCODE != undefined){ 
            getUsersOfProject(user.uid, PROJECTCODE)
        }
    })
}

getProjectCodeOnUrlPath()

function getUsersOfProject (uid, code){
    firebase.firestore().collection('users').doc(uid).collection('projects').doc(code).collection('members').get()
    .then(res => {
        let projectMembers = res.docs
        setMemberOnProjectDashboard(projectMembers)
    })
}

function setMemberOnProjectDashboard(members) {
    var $usersField = document.querySelector('#projectUsersField')
    members.forEach(member => {
        let userInfoStructure = `
            <tr>
                <td>${member.data()['name']}</td>
                <td>${member.data()['lastName']}</td>
                <td>Desarrollador web</td>
                <td>Pasos de Design Thinking</td>
            </tr>
        `
        $usersField.insertAdjacentHTML('beforeend', userInfoStructure)
    })
}