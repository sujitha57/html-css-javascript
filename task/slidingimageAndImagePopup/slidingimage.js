
function MultipleSlider(slideSelector,imgsMovement, count){
 var misObj=this;
  this.init = function(){
  slideSelector = document.querySelector(slideSelector);
  this.slideSelector = slideSelector
  this.imgsMovement = imgsMovement;
  this.count = count;
  //this.ArrayOfImages = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpeg","image6.jpeg","image7.jpg","image8.jpg","image9.jpg","image10.jpg"];
  this.ArrayOfImages = [];
  function readTextFile(file, callback) {
    var image;
      var rawFile = new XMLHttpRequest();
      rawFile.overrideMimeType("application/json");
      rawFile.open("GET", file, true);
      rawFile.onreadystatechange = function() {
          if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(this.responseText);
          }
      }
      rawFile.send(null);
  }

  //usage:
this.ArrayOfImages = readTextFile("images.json", function(text){
      var data = [];
      data = JSON.parse(text);
      console.log(data);
      return data;
    });
    
  this.noOfImages = 3;
  this.setImageLayout();
  this.setupImagePopup();
  var rightArrow = slideSelector.querySelector(".rightmove");
  var leftArrow = slideSelector.querySelector(".leftmove");
  rightArrow.addEventListener("click", this.nextSlider);
  leftArrow.addEventListener("click", this.nextSlider);
}
this.setImageLayout = function(){
  var imgslist = slideSelector.querySelector(".listOfImages");
  for(let i = 0; i < this.ArrayOfImages.length; i++){
    var list = document.createElement("li");
    list.className = "setOfImages";
    list.innerHTML = '<img src="../images/photos/' + this.ArrayOfImages[i]  + '" />';
    imgslist.appendChild(list);
    var setImageClass = list.querySelector("img");
    setImageClass.className = "imageClass";
  }
  var wrapper = slideSelector.querySelector(".wrapper");
  var offsetOfImg = imgslist.querySelector(".setOfImages");
  this.offsetW = offsetOfImg.offsetWidth;
  this.Width = this.offsetW * this.noOfImages;
  wrapper.style.width = this.Width+"px";

}

this.setupImagePopup = function(){
  var imageslist = slideSelector.querySelector(".listOfImages");
//  console.log(imageslist);
  imageslist.addEventListener("click", function(imgObj){
    if( imgObj.target.className =="imageClass")
    {
      var imgsrc = imgObj.target.src;
      document.querySelector(".imgDisplay").src = imgsrc;
      document.getElementById("popUp").style.display = "block";
      document.querySelector(".closeButton").style.display = "block";
      document.querySelector(".imageSlider").style.opacity = 0.4;
    }
  });
  var close = document.querySelector(".closeButton");
  close.addEventListener("click", this.closeImage);
}


this.closeImage = function(){
  document.getElementById("popUp").style.display = "none";
  document.querySelector(".imageSlider").style.opacity = 1;
}

this.nextSlider = function(direction){
  console.log(misObj.ArrayOfImages);
  var directionObj = direction.target.value;
  if(directionObj == 'right'){
    count++;
    var width = misObj.offsetW*count*imgsMovement;
    if(count != 0){
      slideSelector.querySelector(".leftmove").disabled = false;
      slideSelector.querySelector(".leftmove").style.cursor = "pointer";
    }
    else{
      slideSelector.querySelector(".rightmove").disabled = true;
      slideSelector.querySelector(".rightmove").style.cursor = "default";
    }
    slideSelector.querySelector(".box").style.transform = "translateX("+width+"px)";
  }
  else{
    count--;
    console.log(count);
    var imgwidth = misObj.offsetW*count*imgsMovement;
    if(count == -(misObj.ArrayOfImages.length-imgsMovement-misObj.noOfImages)){
      slideSelector.querySelector(".leftmove").disabled = true;
      slideSelector.querySelector(".leftmove").style.cursor = "default";
    }
    else{
      slideSelector.querySelector(".rightmove").disabled = false;
      slideSelector.querySelector(".rightmove").style.cursor = "pointer";
    }
    slideSelector.querySelector(".box").style.transform = "translateX("+imgwidth+"px)";
  }
 }
}

var slider1 = new MultipleSlider('#slider1', 1, 0);
var slider2 = new MultipleSlider('#slider2', 2, 0);
var slider3 = new MultipleSlider('#slider3', 3, 0);
slider1.init();
slider2.init();
slider3.init();
