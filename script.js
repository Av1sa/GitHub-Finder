const searchUser = document.querySelector('#searchUser');

const github = new Github;
const ui = new UI;

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;
  
  if (userText !== ''){
    //HTTP Call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found'){
          //Show alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          //Show profile
          ui.showUser(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    //Clear profile
    ui.clearProfile();
  }
});