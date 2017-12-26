var clappingMP3 = "clapping_and_cheers"

$(".imgclap").bind("click", function() {
    ion.sound.stop("audience_boo");
    if (clappingType == "A") {
        ion.sound.stop(clappingMP3);
        ion.sound.play(clappingMP3);
    }
})

$(".imgjeer").bind("click", function() {
    ion.sound.stop(clappingMP3);
    ion.sound.stop("audience_boo");
    ion.sound.play("audience_boo");

})

$(".titleButton").bind("click", function() {
    ion.sound.stop(clappingMP3);
    ion.sound.stop("audience_boo");

})

$(".clappingTypeA").bind("click", function() {
    $(this).addClass("button-fill")
    $(".clappingTypeB").removeClass("button-fill")
    clappingMP3 = "clapping_and_cheers"
})

$(".clappingTypeB").bind("click", function() {
    $(this).addClass("button-fill")
    $(".clappingTypeA").removeClass("button-fill")
    clappingMP3 = "clapping"
})
