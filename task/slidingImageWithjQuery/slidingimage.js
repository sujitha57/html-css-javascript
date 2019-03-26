function MultipleSlider(slideSelector,imgsMovement, count){
  this.init = function(){
  this.$slideContainer = $(slideSelector);
  this.imgsMovement = imgsMovement;
  this.count = count;
  this.ArrayOfImages = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpeg","image6.jpeg","image7.jpg","image8.jpg","image9.jpg","image10.jpg"];
  this.noOfImages = 3;
  this.setImageLayout();
  this.setupImagePopup();
  var rightArrow = this.$slideContainer.find(".rightmove");
  var leftArrow = this.$slideContainer.find(".leftmove");
  rightArrow.on("click", this.nextSlider.bind(this));
  leftArrow.on("click", this.nextSlider.bind(this));
}

MultipleSlider.prototype.setImageLayout = function(){
  var $imgslist = this.$slideContainer.find(".listOfImages");
  for(let i=0; i < this.ArrayOfImages.length; i++){
     var $list = $imgslist.append('<li class="setOfImages"><img class= "imageClass" src="../images/photos/' + this.ArrayOfImages[i]  + '" /></li>');
  }
  this.$offsetOfImg = $(".setOfImages").outerWidth();
  this.Width = this.$offsetOfImg * this.noOfImages;
  $(".wrapper").css("width", this.Width+"px");
}

MultipleSlider.prototype.setupImagePopup = function(){
  var imageslist = this.$slideContainer.find(".listOfImages");
  imageslist.click(function(imgObj){
    var imageName = imgObj.target.className;
    if( imageName === "imageClass")
    {
      var imgsrc = imgObj.target.src;
      console.log(imgsrc);
      $(".imgDisplay").attr("src",imgsrc);
      $("#popUp").css("display", "block");
      $(".closeButton").css("display", "block");
      $(".imageSlider").css("opacity", 0.4);
    }
  });
  $(".closeButton").click(this.closeImage);
}


MultipleSlider.prototype.closeImage = function(){
  $("#popUp").css("display", "none");
  $(".imageSlider").css("opacity", 1);
}

MultipleSlider.prototype.nextSlider = function(event){
  var directionObj = event.target.value;
  if(directionObj == 'right'){
    this.count++;
    var width = this.$offsetOfImg*this.count*this.imgsMovement;
    if(this.count != 0){
      this.$slideContainer.find(".leftmove").prop("disabled", false);
      this.$slideContainer.find(".leftmove").css("cursor", "pointer");
    }
    else{
      this.$slideContainer.find(".rightmove").prop("disabled",true);
      this.$slideContainer.find(".rightmove").css("cursor", "default");
    }
    this.$slideContainer.find(".box").css("transform", "translateX("+width+"px)");
  }
  else{
    this.count--;
    var imgwidth = this.$offsetOfImg*this.count*this.imgsMovement;
    if(this.count == -(this.ArrayOfImages.length-this.imgsMovement-this.noOfImages)){
      this.$slideContainer.find(".leftmove").prop("disabled", true);
      this.$slideContainer.find(".leftmove").css("cursor", "default");
    }
    else{
      this.$slideContainer.find(".rightmove").prop("disabled",false);
      this.$slideContainer.find(".rightmove").css("cursor", "pointer");
    }
    this.$slideContainer.find(".box").css("transform","translateX("+imgwidth+"px)");
  }
 }
}
var slider1 = new MultipleSlider('#slider1', 1, 0);
var slider2 = new MultipleSlider('#slider2', 2, 0);
var slider3 = new MultipleSlider('#slider3', 3, 0);
slider1.init();
slider2.init();
slider3.init();
