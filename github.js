 class Github{ 
   constructor() {
     this.client_id = 'a22c53d534b113be4ac8';
     this.client_secret = 'd5eef66e2bfd75cae239fed2f687d6e8bbe3812b';
     this.repos_count = 5;
     this.repos_sort = 'created:asc';
   }

   async getUser(user){

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repository = await repoResponse.json();

    return {
      profile : profile,
      repository: repository
    }
   }
 }

