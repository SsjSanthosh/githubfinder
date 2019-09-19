// Search github

const search = document.getElementById("search-user");
// init githubt

const github = new GitHub();

// init ui

const ui = new UI();
// Add key listener

search.addEventListener("keyup", e => {
  const userText = search.value;
  if (userText != "") {
    console.log(userText);
    // call http, github api
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        console.log("not found");
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //   clear profile
    ui.clearProfile();
  }
});
