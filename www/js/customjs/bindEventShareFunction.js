$(".imgclap").bind("click",function(){
  ion.sound.stop("audience_boo");
ion.sound.play("clapping_and_cheers");

})

$(".imgjeer").bind("click",function(){
  ion.sound.stop("clapping_and_cheers");
ion.sound.play("audience_boo");

})
