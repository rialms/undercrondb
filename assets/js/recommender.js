'use strict'

let NUM_RECOMMENDED_PAGES = 5

let pageUrl = document.getElementById('full-page-url').innerHTML

let param = {
  url: unescape(window.btoa(pageUrl))
}

let request = $.ajax({
  url: 'https://api.isomer.gov.sg/recommend',
  data: param,
  dataType: 'json'
})

request.then(function(response) {
  let relatedPostsString = ''
  let relatedPostsDiv = document.getElementById('related-content')
  let relatedPostsList = document.getElementById('related-content-list')
  
  relatedPostsDiv.classList.remove('hide')

  let relatedPostArray = response.recommended_posts
  let slicedArray = relatedPostArray.slice(0,NUM_RECOMMENDED_PAGES)

  slicedArray.forEach(function(relatedPost) {
    relatedPostsString += '<li><a href=\"' + relatedPost.url + '\"">' + relatedPost.title + '</a></li>'
  })

  relatedPostsList.innerHTML = relatedPostsString

}).catch(function(error) {
  console.log(error)
})