// fluid UI options
fluid.uiOptions.prefsEditor(".flc-prefsEditor-separatedPanel", {
  terms: {
    "templatePrefix": "/src/framework/preferences/html",
    "messagePrefix": "/src/framework/preferences/messages"
  },
  "tocTemplate": "/src/components/tableOfContents/html/TableOfContents.html",
  "ignoreForToC": {
    "overviewPanel": ".flc-overviewPanel"
  }
});

// helpers
function hasClassName(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

function addClassName(elem, className) {
  if (!hasClassName(elem, className)) {
    elem.className += ' ' + className;
  }
}


if(document.getElementById("project") || document.getElementById("abler")) {
  sessionStorage.setItem('backwards', 'yes');
}


// projects filtering and sorting
if(document.getElementById("projectsList")){

  var backwards = sessionStorage.getItem('backwards');
  if(backwards === 'yes') {
    location.reload();
    sessionStorage.setItem('backwards', 'no');
  }

  // can't get these methods to work on chrome
  // console.log(window.performance.navigation.type);
  // console.log(String(window.performance.getEntriesByType("navigation")[0].type));
  // if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) {
  //   alert('Got here using the browser "Back" or "Forward" button.');
  // }
  // if (String(window.performance.getEntriesByType("navigation")[0].type) === "back_forward") {
  //   window.location.reload()
  // }


  var options = {
    valueNames: [ 'date','name','type' ]
  };
  var projectsList = new List('projectsList', options);
  var filters = document.getElementsByClassName("filter");
  var sorts = document.getElementsByClassName("sort");

  for(var j=0; j<sorts.length; j++) {
    sorts[j].addEventListener("click", function (e) {
      e.preventDefault();
    })
  }

  if(window.location.hash) {

    var hash = window.location.hash.replace('#','');

    projectsList.filter(function(item) {
      if ( hash.toLowerCase() === "all") {
        return true;
      }
      // for abler
      if (hash.toLowerCase() === "guides") {
        var guides = document.getElementsByClassName("none");
        var label = document.getElementById("abler-name");
        var img = document.getElementById("abler-image");
        label.innerText = "guide";
        img.innerText = "";
        for (var k = 0; k < guides.length; k++) {
          guides[k].className = "col-xs-12"
        }
        return item.values().type === hash.toLowerCase();
      }
      // for abler
      if (hash.toLowerCase() === "archive") {
        var label = document.getElementById("abler-name");
        var img = document.getElementById("abler-image");
        label.innerText = "post";
        img.innerText = "image";
        console.log(item.values().type);
        return item.values().type === hash.toLowerCase();
      }
      else return item.values().type === hash.toLowerCase();
    });
    // for(var j=0; j<filters.length; j++) {
    //   filters[j].classList.remove("active");
    // }
    var els = document.getElementsByClassName('filter');
    for(var k = 0; k < els.length; k++) {
      if (els[k].innerHTML.toLowerCase() === hash.toLowerCase()) {
        els[k].classList.add("active");
        break;
      }
    }
  } else {
    var els = document.getElementsByClassName('filter');
    for(var k = 0; k < els.length; k++) {
      if (els[k].innerHTML.toLowerCase() === 'all') {
        els[k].classList.add("active");
        break;
      }
      if (els[k].innerHTML.toLowerCase() === 'archive') {
        els[k].classList.add("active");
        var guides = document.getElementsByClassName('abler-guides-row');
        for (var m = 0; m < guides.length; m++) {
          guides[m].classList.add("none");
        }
        break;
      }
    }
  }

  for(var i=0; i<filters.length; i++) {
    filters[i].addEventListener("click", function(e){
      e.preventDefault();
      var thisFilter = this.innerHTML;

      window.location.hash = thisFilter.toLowerCase();

      projectsList.filter(function(item) {
        if (thisFilter.toLowerCase() === "all") {
          return true;
        }
        // for abler
        if (thisFilter.toLowerCase() === "guides") {
          var guides = document.getElementsByClassName("none");
          var label = document.getElementById("abler-name");
          var img = document.getElementById("abler-image");
          label.innerText = "guide";
          img.innerText = "";
          for (var k = 0; k < guides.length; k++) {
            guides[k].className = "col-xs-12"
          }
          return item.values().type === thisFilter.toLowerCase();
        }
        // for abler
        if (thisFilter.toLowerCase() === "archive") {
          var label = document.getElementById("abler-name");
          var img = document.getElementById("abler-image");
          label.innerText = "post";
          img.innerText = "image";
          return item.values().type === thisFilter.toLowerCase();
        }
        else return item.values().type === thisFilter.toLowerCase();
      });
      for(var j=0; j<filters.length; j++) {
        filters[j].classList.remove("active");
      }
      this.classList.add("active");
    });
  }
}

var links = document.links;

for (var i = 0, linksLength = links.length; i < linksLength; i++) {
  if (links[i].hostname != window.location.hostname) {
    links[i].target = '_blank';
  }
}


// if(document.getElementById("abler-archive")) {
//   projectsList.filter(function (item) {
//     return item.values().type === "archive";
//   });
// }
