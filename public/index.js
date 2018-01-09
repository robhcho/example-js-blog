var postsContainer = document.querySelector('.row');
var postsTemplate = document.querySelector('#post');
axios.get("http://localhost:3000/posts").then(function(response){
  // console.log(response.data);
  var posts = response.data;
  for (var i = 0; i < posts.length; i++) {
    var postsClone = postsTemplate.content.cloneNode(true);
    postsClone.querySelector('.title').innerText = posts[i].title;
    postsClone.querySelector('.body').innerText = posts[i].body
    postsContainer.appendChild(postsClone);
  }
});
