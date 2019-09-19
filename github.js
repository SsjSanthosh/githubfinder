class GitHub {
  constructor() {
    this.id = "670257eefef697a05b38";
    this.secret = "4aca9a374f1579f46fdca7ec3cd4bb60ece09a82";
    this.repo_count = 5;
    this.repo_sort = "created:asc";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.id}&client_secret=${this.secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&{client_id=${this.id}&client_secret=${this.secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos
    };
  }
}
