var multipleSlider = {
    init : function(s,imgsMovement,count){
      this.s = document.querySelector(s);
      this.imgsMovement= imgsMovement;
      this.count = count;
      this.addImagesList();
      var rightArrow = this.s.querySelector(".rightmove");
      var leftArrow = this.s.querySelector(".leftmove");
      rightArrow.addEventListener("click", this.nextSlider.bind(this));
      leftArrow.addEventListener("click", this.nextSlider.bind(this));
    },
    image : ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpeg","image6.jpeg","image7.jpg","image8.jpg","image9.jpg","image10.jpg"],
    no_Of_Images : 3
  };
  multipleSlider.addImagesList= function(){
    //console.log(this.s);
    var imgslist = this.s.querySelector(".listOfImages");
    for(let i = 0; i <this.image.length; i++){
    //  console.log(this.image.length);
      var list = document.createElement("li");
      list.className = "images";
      list.innerHTML = '<img src="../images/photos/' + this.image[i]  + '" />';
      imgslist.appendChild(list);
      //console.log(this.s);
      //console.log(list);
    }
    var wrapper = this.s.querySelector(".wrapper");
    var offsetOfImg = imgslist.querySelector(".images");
    this.offsetW = offsetOfImg.offsetWidth;
    this.Width = this.offsetW * this.no_Of_Images;
    wrapper.style.width = this.Width+"px";
  };

  multipleSlider.nextSlider = function(direction){
    console.log(this.s);
    var directionObj = direction.target.value;console.log(directionObj);
    //console.log(directionObj);
    if(directionObj == 'right'){
      this.count++;
      var width = this.offsetW*this.count*this.imgsMovement;
      if(this.count != 0){
        this.s.querySelector(".leftmove").disabled = false;
        this.s.querySelector(".leftmove").style.cursor = "pointer";
      }
      else{
        this.s.querySelector(".rightmove").disabled = true;
        this.s.querySelector(".rightmove").style.cursor = "default";
      }
      this.s.querySelector(".box").style.transform = "translateX("+width+"px)";
    }
    else{
      this.count--;
      console.log(this.count);
      var imgwidth = this.offsetW*this.count*this.imgsMovement;
      if(this.count == -(this.image.length-this.imgsMovement-this.no_Of_Images)){
        this.s.querySelector(".leftmove").disabled = true;
        this.s.querySelector(".leftmove").style.cursor = "default";
      }
      else{
        this.s.querySelector(".rightmove").disabled = false;
        this.s.querySelector(".rightmove").style.cursor = "pointer";
      }
      this.s.querySelector(".box").style.transform = "translateX("+imgwidth+"px)";
   }
 };






multipleSlider.init('#slider1', 1, 0);
multipleSlider.init("#slider2", 2, 0);
multipleSlider.init("#slider3", 3, 0);
/*var Slider2 = new multipleSlider('#slider2', 2, 0);
var Slider3 = new multipleSlider('#slider3', 3, 0);
Slider1.init();
Slider2.init();
Slider3.init();
Slider1.addImagesList();
Slider2.addImagesList();
Slider3.addImagesList();*/
