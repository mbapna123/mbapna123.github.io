$(document).ready(function(){
$("#menu-1").hide()
$(".pokewindow").hide()
meterfinal="1.98"
imagechosen="peterdink.png"
pokemonchosen="pikachu"
  $.getJSON("https://pokeapi.co/api/v1/pokedex/1/",function(pokedata){
     iterate=0;
     arr=[];
    while(pokedata.pokemon[iterate].name!="null"){
      arr[iterate]=pokedata.pokemon[iterate].name
      iterate++
    }})
  $(".imagearrowbox").click(function(){
    $(".rightpic").animate({"left":"+=1100px", opacity: 0},4000)
    $(".leftpic").animate({"left":"+=1100px", opacity: 1},4000)
  })

   $(function(){$("#menu-1").menu()})

  $(".KButton").click(function(){
  //   $(".leftpic").effect("fade",1000)
    $(".image2border").removeClass()
    $(".leftpicpara").removeClass();
    $(".paraone").removeClass();
    $(".whatiscors").removeClass()
    $(".corsans").removeClass()
    $(".leftpic").removeClass()
    $(".rightpic").find("*").removeClass()
    $(".rightpic").removeClass()
    $("#menu-1").show()
    $(".pokewindow").show()
$(".KButton").removeClass()
  })

  $(".whatiscors").click(function(){
    $(".corsans").animate({opacity: 1}, 1000)
  })


  $(".metersfile").click(function(){
    t=0;
      $(".heightclass").css("background","linear-gradient(#16B9D4,#9AE3F0)")
  $(".heightone").keyup(function(){
  var valuee=$(".heightone").val().length
  meterfinal=$(".heightone").val()
    if (valuee!=0){
      $(".heightclass").css("background","linear-gradient(#16B9D4,#9AE3F0)")
    }
    else{
      $(".heightclass").css("background","linear-gradient(white,gray)")
    }
  })
    $(".heightone").hover(function(){
     $(".meterheight").text("")},
  function(){
   $(".meterheight").text("meters")
  })})

$(".inchesfile").click(function(){
  t=1;
    $(".heightclass").css("background","linear-gradient(#16B9D4,#9AE3F0)")
$(".heightone").keyup(function(){
var valuee=$(".heightone").val().length
inchesheight=$(".heightone").val();
meterfinal=inchesheight*.0254;
  if (valuee!=0){
    $(".heightclass").css("background","linear-gradient(#16B9D4,#9AE3F0)")
  }
  else{
    $(".heightclass").css("background","linear-gradient(white,gray)")
  }
})


  $(".heightone").hover(function(){
   $(".meterheight").text("")},
function(){
 $(".meterheight").text("inches")
})})

   $(".pokemoninput").keyup(function(){
         $(".pokemoninput").autocomplete({source: arr})
     pokemonchosen=$(".pokemoninput").val()
     var poke=$(".pokemoninput").val()
     if (poke.length!=0){
       $(".pokemonimage").css("background","linear-gradient(#16B9D4,#9AE3F0)")
     }
     else{
      $(".pokemonimage").css("background","linear-gradient(white,gray)")}
    })

$(".submitimage").hover(function(){
   $(".submitimage").css("background","linear-gradient(#80EACA,#0AC88F)")},function(){
     $(".submitimage").css("background","linear-gradient(#16B9D4,#9AE3F0)")})
     $(".imageinput").keyup(function(){
       imagechosen=$(".imageinput").val()
       var poke=$(".imageinput").val()
       if (poke.length!=0){
         $(".imagefile").css("background","linear-gradient(#16B9D4,#9AE3F0)")
       }
       else{
        $(".imagefile").css("background","linear-gradient(white,gray)")}})
$(".submitimage").click(function(){
pokemonchosenfinal=$(".pokemoninput").val();
  Uone="http://pokeapi.co/api/v1/pokemon/" + pokemonchosenfinal;
  Utwo="http://pokeapi.co/api/v2/pokemon/" + pokemonchosenfinal;
$.getJSON(Uone,function(dataone){
   heightpokemon=dataone.height;
})
$.getJSON(Utwo,function(datatwo){
   imagepokemon=datatwo.sprites.front_default;
   $(".pokee").attr("src",imagepokemon)
   $(".human").attr("src",)
   x=meterfinal/(heightpokemon/10);
   if (x>1){
     adjustedratio=x*(-.01666667*x+1.01667)
   }
   else{
     adjustedratio=x*(1.32-.32*x)
   }
   adjustment=Math.pow(adjustedratio,.5)
   $(".pokee").css("height",160/adjustment)
   $(".pokee").css("width", 160/adjustment)
   $(".human").css("height",150*adjustment)
   $(".human").css("width",80*adjustment)
})
})

$(".whatiscors").hover(function(){
  $(".whatiscors").css("background","linear-gradient(white,grey)")},
  function(){$(".whatiscors").css("background","white")
})

  $(".passionateheading").click(function(){
    $(".bodypost").text("Starting in April this year, I have been on a mission to become a junior developer. At first, I learnt Core Java. Next, to master my skills in Core Java I studied for an attained an Oracle Java Certification which is designed for Java Developers working in the field! Then, I completed basic applications using tools in Java Web Development such as RMI, Servlets and JSP. Finally, I learnt HTML, CSS and JavaScript which are all on display right here! I do not see myself losing my zest for web development anytime soon!")
  })

  $(".quicklearnerhead").click(function(){
    $(".bodypost").text("Wikipedia and Khan Academy have transformed the educational landscape, allowing people, regardless of their backgrounds to learn virtually anything they want to.  Skype has allowed for loved one's to share joy with their spouses even if they live in the farthest corner of the Earth. Online companies such as WebMD and IsabelHealthCare have allowed people to diagnose themselves (with caution), many times saving their lives. Regardless, web applications have and WILL continue to change the world for the better. Hence, I want to become a web developer.")
  })

  $(".educationhead").click(function(){
    $(".bodypost").text("I have always been excellent at understand and applying technical skills. In my math and science classes at my engineering school, I was always one of the first to find the solution to a problem. Most directly, I have learnt web development skills in a relatively short period. For example, I attained my Oracle Java Certification on my first attempt with two months of studying and completed the PokeAPI project in just two days! I know that as a developer, one of my most important skills will be learning and applying technical skills. As long as I continue to possess my grit and intelligence, I know that I will be a fantastic developer.")
  })

  $(".educationh").click(function(){
    $(".bodypost").html(" <br> <br><h2> <b> B.S Mechanical Engineering </b> <h5>  University of Maryland College Park </h5>     <h6> (2011-2015) 3.00 GPA </h6>  <ul> Certifications  <li> Oracle Certified Associate Java 7 SE Programmer 1 </li> <li> Lean Six Sigma Green Belt </li></ul> <ul> Test Scores <li> GRE QR=167(94%), VR=160(85%) </li> </ul> </h5> Click on the arrow to look at my first project!</h5> </h2>")
  })

    $(".imagearrowbox").hover(function(){
      $(".imagearrow").css("background-color","orange")},
        function(){$(".imagearrow").css("background-color" ,"#ADD8E6")})

  $(".passionateheading").hover(function(){
    $(".passionateheading").css("background","linear-gradient(white,grey)")},
      function(){$(".passionateheading").css("background" ,"white"),
    function(){$(".passionateheading").css("border-width","10")}})

    $(".quicklearnerhead").hover(function(){
      $(".quicklearnerhead").css("background","linear-gradient(white,grey)")},
        function(){$(".quicklearnerhead").css("background" ,"white"),
      function(){$(".quicklearnerhead").css("border-width","10")}})

      $(".educationhead").hover(function(){
        $(".educationhead").css("background","linear-gradient(white,grey)")},
          function(){$(".educationhead").css("background" ,"white"),
        function(){$(".educationhead").css("border-width","10")}})

  $(".educationh").hover(function(){
  $(".educationh").css("background","linear-gradient(white,grey)")},
  function(){$(".educationh").css("background" ,"white"),
  function(){$(".educationh").css("border-width","10")}})



  $(".KButton").hover(function(){
  $(".image2border").animate({color:"green"},150)},
  function(){$(".image2border").animate({color: "black"}, 150)})
})
