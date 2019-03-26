function multipleSlider(s,imgsMovement, count){

   var misObj=this;
    this.init = function(){
    this.s = s;
    this.imgsMovement = imgsMovement;
    this.count = count;
    this.image = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpeg","image6.jpeg","image7.jpg","image8.jpg","image9.jpg","image10.jpg"];
    this.no_Of_Images = 3;
    var imgslist = s.querySelector(".listOfImages");
    for(let i = 0; i <this.image.length; i++){
      var list = document.createElement("li");
      list.className = "images";
      list.innerHTML = '<img src="../images/photos/' + this.image[i]  + '" />';
      imgslist.appendChild(list);
    }
    var wrapper = s.querySelector(".wrapper");
    var offsetOfImg = imgslist.querySelector(".images");
    this.offsetW = offsetOfImg.offsetWidth;
    this.Width = this.offsetW * this.no_Of_Images;
    wrapper.style.width = this.Width+"px";
    var rightArrow = s.querySelector(".rightmove");
    var leftArrow = s.querySelector(".leftmove");
    rightArrow.addEventListener("click", this.slider);
    leftArrow.addEventListener("click", this.slider);
  }


  this.slider = function(direction){
    var directionObj = direction.target.value;
    if(directionObj == 'right'){
      count++;
      var width = misObj.offsetW*count*imgsMovement;
      if(count != 0){
        s.querySelector(".leftmove").disabled = false;
        s.querySelector(".leftmove").style.cursor = "pointer";
      }
      else{
        s.querySelector(".rightmove").disabled = true;
        s.querySelector(".rightmove").style.cursor = "default";
      }
      s.querySelector(".box").style.transform = "translateX("+width+"px)";
    }
    else{
      count--;
      var imgwidth = misObj.offsetW*count*imgsMovement;
      if(count == -(misObj.image.length-imgsMovement-misObj.no_Of_Images)){
        s.querySelector(".leftmove").disabled = true;
        s.querySelector(".leftmove").style.cursor = "default";
      }
      else{
        s.querySelector(".rightmove").disabled = false;
        s.querySelector(".rightmove").style.cursor = "pointer";
      }
      s.querySelector(".box").style.transform = "translateX("+imgwidth+"px)";
   }
  }
}
var count= -1;
var s1 = document.getElementById("slider1");
var s2 = document.getElementById("slider2");
var s3 = document.getElementById("slider3");

var Slider1 = new multipleSlider(s1, 1, 0);
var Slider2 = new multipleSlider(s2, 2, 0);
var Slider3 = new multipleSlider(s3, 3, 0);
Slider1.init();
Slider2.init();
Slider3.init();
