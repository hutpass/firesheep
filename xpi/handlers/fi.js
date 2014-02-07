// Authors:
//   Stuart P. Bentley <stuart@testtrack4.com>
register({
  name: 'Founder Institute',
  url: 'http://fi.co/',
  domains: [ 'fi.co' ],
  sessionCookieNames: [ 'code' ],

  identifyUser: function() {
    var resp = this.httpGet(this.siteUrl);
    var userId = resp.body.querySelector('#side_login > a[href^="/user/show"]').href.slice('/user/show'.length);
    this.userName = this.httpGet('http://fi.co/user/show/' + userId)
      .body.querySelector("#main_content > h1").textContent.replace(/:.*?$/,'');
    this.userAvatar = "http://fi.co/system/users/"+ userId + ".jpg";
  }
});
