class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  showProfile(user) {
    console.log(user);
    this.profile.innerHTML = `
    <div class="card card-body mb-3 mt-4">
    <div class="row">
      <div class="cold-md-3">
        
        <img class="d-block  mb-2 avatar" src="${user.avatar_url}" />
        <p class='lead display-5 text-center mb-2'>${user.login}</p>
        <a
          href="${user.html_url}"
          target="_black"
          class="btn btn-primary btn-block my-2 "
        >
          View Profile
        </a>
      </div>
      <div class="col-md-9">
        <span class="badge badge-primary h5">
          Public Repos : ${user.public_repos}
        </span>
        <span class="badge badge-secondary">
          Public Gists : ${user.public_gists}
        </span>
        <span class="badge badge-success">
          Followers : ${user.followers}
        </span>
        <span class="badge badge-info">
          Following : ${user.following}
        </span>
        <br /><br />
        <ul class="list-group">
          <li class="list-group-item">Company:${user.company}</li>
          <li class="list-group-item">Blog:${user.blog}</li>
          <li class="list-group-item">Location:${user.location}</li>
          <li class="list-group-item">Member since:${user.created_at}</li>
        </ul>
      </div>
    </div>
  </div>
  
  <h3 class="page-heading mb-3">Latest Repos</h3>
  <div id="repos"></div>
  
    `;
  }
  //   SHOW REPOS
  showRepos(repos) {
    let output = "";
    repos.forEach(repo => {
      output += `
        <div class = 'card card-body mb-2'>
            <div class='row'>
                <div class = 'col-md-6'>
                    <a href="${repo.html_url}"
                    target='_blank'> ${repo.name} </a>
                </div>
                <div class = 'col-md-6'>
                <span class="badge badge-primary h5">
                Stars : ${repo.stargazers_count}
              </span>
              <span class="badge badge-secondary">
                Watchers : ${repo.watchers_count}
              </span>
              <span class="badge badge-success">
                Forks : ${repo.forms_count}
              </span>
                </div>
            </div>
        </div>
        `;
    });
    // OUTPUT REPOS
    document.getElementById("repos").innerHTML = output;
  }
  // SHOW ALERT MESSAGE
  showAlert(msg, className) {
    // create a new div
    const node = document.createElement("div");
    this.clearAlert();
    // set class name
    node.className = className;
    // add the new message
    node.appendChild(document.createTextNode(msg));

    // get search div
    const container = document.querySelector(".search-div");
    // get search input
    const search = document.querySelector(".search-input");
    // insert between div and search
    container.insertBefore(node, search);
    // Time out after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 1500);
  }
  clearAlert() {
    if (document.querySelector(".alert")) {
      document.querySelector(".alert").remove();
    }
  }
  // CLEAR PROFILE ON ERASING INPUT
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
