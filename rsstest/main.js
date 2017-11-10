var statement = "select * from feed where url='http://rss.nytimes.com/services/xml/rss/nyt/NYRegion.xml'";
$.queryYQL(statement, "json", undefined, function(data) {
     console.log(data.query.results.item);
     for (var i = 0; i < data.query.results.item.length; i ++) {
          var  div = document.createElement("div");
               img = document.createElement("img");
               h1 = document.createElement("h1");
          $("main")[0].appendChild(div);
          div.appendChild(img);
          div.appendChild(h1);
          if (data.query.results.item[i].content.url) {
             img.src = data.query.results.item[i].content.url;  
          };
          h1.innerText = data.query.results.item[i].title;
     };
});

$("main")[0].addEventListener("mouseover", function(e) {
     if (e.target.tagName == "IMG") {
          for (var i = 0; i < $("img").length; i ++) {
               if (e.target == $("img")[i]) {
                    $("img")[i].style.filter = "grayscale(0)";
                    $("h1")[i].style.display = "block"; 
                    var h1 = $("h1")[i];
                    setTimeout(function() {
                         h1.style.transform = "translateY(5%)";
                    }, 100);
               };
          };
     };
});
