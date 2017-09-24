$(document).ready(function(){
  n=1.35;
  height=2;
  $(".displayPokemonBox").click(function(){
        param=document.getElementById("displayPokemonBox2").value;
        Uone="http://pokeapi.co/api/v1/pokemon/" + param;
        Utwo="http://pokeapi.co/api/v2/pokemon/" + param;
  $.getJSON(Uone,function(dataone){
  height=dataone.height;
  name=dataone.name;
  // alert(name);
  // alert(height);
})

  $.getJSON(Utwo,function(datatwo){
  imagepokemon=datatwo.sprites.front_default;
  // alert(imagepokemon);
  document.getElementById("pokemonDiv").src=imagepokemon;
// alert(n);
// alert(n/height);
x=n/(height/10);
if (x>1){
  adjustedratio=x*(-.01666667*x+1.01667)
}
else{
  adjustedratio=x*(1.32-.32*x)
}
adjustment=Math.pow(adjustedratio,.5)
// alert(height)
// alert(n)
// alert(x)
// alert(adjustedratio)
// alert(adjustment)
// alert(adjustedratio);
$("#pokemonDiv").css("height", 400/adjustment);
$("#pokemonDiv").css("width", 400/adjustment);
$("#human").css("height",260*adjustment);
$("#human").css("height",200*adjustment);
})
})

$(".displayHeightBox").click(function(){
n=$("#displayHeightBox2").val();
// alert(n);
// alert(n/height);
x=n/(height/10);
if (x>1){
  adjustedratio=x*(-.01666667*x+1.01667)
}
else{
  adjustedratio=x*(1.32-.32*x)
}
adjustment=Math.pow(adjustedratio,.5)
// alert(height)
// alert(n)
// alert(adjustedratio)
// alert(adjustment)
// alert(adjustedratio);
$("#pokemonDiv").css("height", 400/adjustment);
$("#pokemonDiv").css("width", 400/adjustment);
$("#human").css("height",260*adjustment);
$("#human").css("height",200*adjustment);
})


})
