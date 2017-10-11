Uone="https://pokeapi.co/api/v1/pokemon/" + pok
  $.ajax({
    type:"GET",
    jsonp: "callback",
    dataType: "jsonp",
    url: Uone,
    success: function(dataone){
    heightpokemon=dataone.height
    id=dataone.national_id
    }})
.done(function(){
Utwo="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +id +".png"
   $(".pokee").attr("src",Utwo)
   $(".human").attr("src",ima)
   x=heig/(heightpokemon/10);
   if (x>1){
     adjustedratio=x*(-.01666667*x+1.01667)
   }
   else{
     adjustedratio=x*(1.32-.32*x)
   }
   if (adjustedratio>20 ){
     alert("You" + " are too much taller than" + pokemonchosenfinal + " for this browser to handle.")
     return true;
   }
if (adjustedratio<.1 ){
     alert(pokemonchosenfinal + " is too tall compared to you for this browser to handle.")
     return true;
   }
   adjustment=Math.pow(adjustedratio,.5)
   if (adjustment>2.5){
     $(".pokee").css("height",240/(adjustment*2))
     $(".pokee").css("width", 240/(adjustment*2))
     $(".human").css("height",225*(adjustment/2))
     $(".human").css("width",120*(adjustment/2))
   }
   else if (adjustment<.35) {
     $(".pokee").css("height",240/(adjustment/2))
     $(".pokee").css("width", 240/(adjustment/2))
     $(".human").css("height",225*(adjustment*2))
     $(".human").css("width",120*(adjustment*2))
   }
   else{
     $(".pokee").css("height",240/adjustment)
     $(".pokee").css("width", 240/adjustment)
     $(".human").css("height",225*adjustment)
     $(".human").css("width",120*adjustment)
   }
   if (adjustment>1){
     $(".explainpara").hide()
     $(".display").show()
     $(".display").text("You are " + x.toFixed(2) +" times taller"  + " than " +  pokemonchosenfinal)
   }
   else{
     $(".explainpara").hide()
     $(".display").show()
     $(".display").text("You are " + (1/x).toFixed(2) +" times shorter"  + " than " +  pokemonchosenfinal)
   }})
