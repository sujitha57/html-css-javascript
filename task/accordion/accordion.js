function accordion(accordion, collapse){
  var accObj = this;
  this.init = function(){
    this.accordion = accordion;
    this.collapse = collapse;
    this.accbtn = accordion.getElementsByClassName("secbtn");
    for(let i=0; i<this.accbtn.length; i++){
      this.accbtn[i].addEventListener('click', this.toggleItem);
    }
  }
  this.toggleItem = function(){
    this.classList.toggle("active");
    if(collapse == true){
      var accItem = accordion.getElementsByClassName("accordionItem");
      var itemClass = this.parentNode.className;
      for(let i=0; i<accItem.length; i++){
        accItem[i].className = "accordionItem hide";
      }
      if(itemClass == 'accordionItem hide')
        this.parentNode.className = "accordionItem show";
    }
    else {
      var itemClass = this.parentNode.className;
      if(itemClass == 'accordionItem hide')
        this.parentNode.className = "accordionItem show";
      else
        this.parentNode.className = "accordionItem hide";
    }
  }
}
var acc1 = document.getElementById("accordion1");
var acc2 = document.getElementById("accordion2");
var accordion1 = new accordion(acc1, true);
var accordion2 = new accordion(acc2, false);
accordion1.init();
accordion2.init();
