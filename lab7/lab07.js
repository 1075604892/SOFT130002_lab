const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

for (var i = 0; i < works.length; i++) {
    var item = document.createElement("div");
    item.className = "item";
    item.innerHTML = "<h4> Genre : " + works[i].tips + "</h4>";

    var box = document.createElement("div");
	box.className = ("inner-box");

    var author = document.createElement("h3");
	var lifetime = document.createElement("h5");
	author.style.display = "inline";
	lifetime.style.display = "inline";
	var authorText = document.createTextNode(works[i].author + " ");
	var lifetimeText = document.createTextNode("lifetime:" + works[i].lifetime);
	author.appendChild(authorText);
	lifetime.appendChild(lifetimeText);

	box.appendChild(author);
	box.appendChild(lifetime);

	var photosBox = document.createElement("div");
	photosBox.className = "inner-box"
	var photosTitle = document.createElement("h3");
	var photosTitleText = document.createTextNode("Popular Photos");
    photosTitle.appendChild(photosTitleText);
	photosBox.appendChild(photosTitle);

	for(var j = 0;j < works[i].photos.length;j++){
    	var photo = document.createElement("img");
	    photo.className = ("photo");
	    photo.src = works[i].photos[j];
	    photosBox.appendChild(photo);
    }

    item.appendChild(box);
    item.appendChild(photosBox);

    item.innerHTML = item.innerHTML + "<button>Visit</button>"

    var body = document.body;
    body.lastChild.appendChild(item);


}
