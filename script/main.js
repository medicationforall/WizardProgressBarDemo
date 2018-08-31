$(document).ready(function(){
  $('.prev').click(function(event){
    event.preventDefault();
    //console.log('previous');
    var selected = $('.selected');
    var prev = selected.prev();
    
    if(prev.length>0){
      selected.removeClass('selected');
      prev.addClass('selected');
    }
  });
  
  $('.next').click(function(event){
    event.preventDefault();
    //console.log('next');
    
    var selected = $('.selected');
    var next = selected.next();
    
    if(next.length>0){
      selected.removeClass('selected');
      next.addClass('selected');
    }
  });
  
  
  $('.add').click(function(event){
    event.preventDefault();
    
    var wizard = $('.wizard');
    
    var template = '<div class="point">'+
      '<div class="label">test '+($('.point').length+1)+'</div>'+
      '<div class="dot"></div>'+
      '<div class="line"><div></div></div>'+
    '</div>';
    
    wizard.append(template);
  });
  
  $('.remove').click(function(event){
    event.preventDefault();
    
    var points = $('.point');
    
    if(points.length>1){
      if(points.last().hasClass('selected')){
        var prev = points.last().prev();
        points.last().removeClass('selected');
        prev.addClass('selected');
      }
      points.last().remove();
    }
    
  });
});