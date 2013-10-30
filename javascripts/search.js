---
---
var docs = [
{% for post in site.pages limit:10 %}
  {% include doc.json %},
{% endfor %}
];
//
// init lunr
var index = lunr(function () {
  this.field('title', {boost: 10});
  this.field('content');
})
index.pipeline.remove(lunr.stopWordFilter)

// add each document to be index
for(var idx in docs) {
  var doc = docs[idx]
  if (doc.id.match(/.js$/) === null) {
    index.add(docs[idx]);
  }
}

$(function() {
  $("#search-panel input").keyup(function(e) {
    if(e.which == 13) {
      var menu = $('.dropdown-menu')
      var url = menu.find('li.active a').attr('href')
      window.location.replace(url)
    }
    search(this);
  });

  $("#search-panel input").blur(function(e) {
    //var menu = $('.dropdown-menu')
    //menu.hide()
  })
})

function search(input) {
  var menu = $('.dropdown-menu')
  var query = $(input).val()

  if (query === '') {
    menu.empty().hide()
  }

  var results = index.search(query).map(function (result) {
    return docs.filter(function (q) { return q.id === result.ref })[0]
  })

  if(results && results.length > 0) {
    menu.empty().show()

    for (var result in results) {
      var entry = results[result]
      var link = $('<a>').attr('href', entry.id).text(entry.title)
      var item = $('<li>').append(link)
      menu.append(item)
      menu.find('li:first').addClass('active')
    }
  } else {
    menu.empty().hide()
    console.log("Found nothing");
  }
}
