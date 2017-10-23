var hehe=false;
var meterfinal=2.00;
var imagechosen="peterdink.png";
var pokemonchosen="pikachu";
var arr;
var valuee;
var poke;
var iterate
var inchesheight
var Uone
var Utwo
var imagechosen2
var x
var adjustment
var adjustedratio
var dataone
var datatwo
var id
var valueerr=0;
var valueerrtwo=0;
var valueerrthree=0;
var errork=1;
var host="https://heroku-node-pokeapp.herokuapp.com/";
var localhost="http://localhost:8080/MadLib/MadLibServlet";
var date;
var rand=Math.floor(Math.random() * 1000000);
console.log(rand)
$(document).ready(function(){
$("#menu-1").hide()
$(".pokewindow").hide()
$(".display").hide()
$(".errorpoke").hide()
$(".madLibWindow").hide()

$.getJSON("https://pokeapi.co/api/v1/pokedex/1/",function(pokedata){
      iterate=0;
      arr=[];
    while(pokedata.pokemon[iterate].name!="null"){
      arr[iterate]=pokedata.pokemon[iterate].name
      iterate++
    }})





  $(".imagearrowbox").click(function(){
    $(".rightpic").animate({"left":"2400px", opacity: 1},4000)
    $(".leftpic").animate({"right":"100px", opacity: 1},4000)})


   $(function(){$("#menu-1").menu()})

  $(".KButton").click(function(){
    $(".image2border").removeClass()
    $(".leftpicpara").removeClass();
    $(".whatiscors").removeClass()
    $(".corsans").removeClass()
    $(".leftpic").removeClass()
    $(".rightpic").find("*").removeClass()
    $(".rightpic").removeClass()
    $("#menu-1").show()
    $(".paraone").hide()
    $(".pokewindow").show()
    $(".infofirstsecond").hide()
$(".KButton").removeClass()
  })

  $(".whatiscors").click(function(){
    $(".corsans").animate({opacity: 1}, 1000)
  })


  $(".metersfile").click(function(){
var t=0;
      $(".heightclass").css("background","linear-gradient(#16B9D4,#9AE3F0)")
       $(".meterheight").text("meters")
  meterfinal=$(".heightone").val();
  $(".heightone").keyup(function(){
   valuee=$(".heightone").val().length
  meterfinal=$(".heightone").val()
    if (valuee!=0){
      valueerr=0;
      if (valueerrthree!=1 && valueerrtwo!=1 && valueerr!=1){
      errork=1;
          $(".submitimage").css("background","linear-gradient(#16B9D4,#9AE3F0)")
        }
      $(".heightclass").css("background","linear-gradient(#16B9D4,#9AE3F0)")
    }
    else{
      $(".heightclass").css("background","linear-gradient(white,grey)")
    }
  })
    $(".heightone").hover(function(){
     $(".meterheight").text("")},
  function(){
   $(".meterheight").text("meters")
  })})

$(".heightone").keyup(function(){
  meterfinal=$(".heightone").val()
  if (meterfinal!=0){
    valueerr=0;
    $(".heightclass").css("background","linear-gradient(#16B9D4,#9AE3F0)")
    if (valueerrthree!=1 && valueerrtwo!=1 && valueerr!=1){
    errork=1;
        $(".submitimage").css("background","linear-gradient(#16B9D4,#9AE3F0)")
      }
  }
  else{
    errork=0;
    $(".heightclass").css("background","linear-gradient(white,grey)")
    valueerr=1;
  $(".submitimage").css("background","linear-gradient(white,grey)")
  }
})

$(".inchesfile").click(function(){
   $(".meterheight").text("inches")
    $(".heightclass").css("background","linear-gradient(#16B9D4,#9AE3F0)")
    meterfinal=$(".heightone").val()*.0254;
$(".heightone").keyup(function(){
 valuee=$(".heightone").val().length
inchesheight=$(".heightone").val();
meterfinal=inchesheight*.0254;
  if (valuee!=0){
    valueerr=0;
    if (valueerrthree!=1 && valueerrtwo!=1 && valueerr!=1){
    errork=1;
        $(".submitimage").css("background","linear-gradient(#16B9D4,#9AE3F0)")
      }
    $(".heightclass").css("background","linear-gradient(#16B9D4,#9AE3F0)")
  }
  else{
    $(".heightclass").css("background","linear-gradient(white,grey)")
  }
})
  $(".heightone").hover(function(){
   $(".meterheight").text("")},
function(){
 $(".meterheight").text("inches")
})})


$(".pokemoninput").click(function(){
$(".pokemoninput").autocomplete({source: arr,
  select: function(event,ob){
    $(".errorpoke").hide()
    $(".pokemonimage").css("background","linear-gradient(#16B9D4,#9AE3F0)")
    valueerrtwo=0;
    if (valueerrthree!=1 && valueerrtwo!=1 && valueerr!=1){
    errork=1;
      $(".submitimage").css("background","linear-gradient(#16B9D4,#9AE3F0)")
      }
  }})})

   $(".pokemoninput").keyup(function(){
     var kobe=false;
     pokemonchosen=$(".pokemoninput").val()
      poke=$(".pokemoninput").val()
     if (poke.length!=0){
       $(".pokemonimage").css("background","linear-gradient(#16B9D4,#9AE3F0)")
     }
     else{
      $(".pokemonimage").css("background","linear-gradient(white,grey)")}
      for (var i=0;i<arr.length;i++){
          if (poke==arr[i]) {
               kobe=true;
               break;
              }}
console.log(kobe)
              if (kobe){
                valueerrtwo=0;
                $(".errorpoke").hide()
                $(".pokemonimage").css("background","linear-gradient(#16B9D4,#9AE3F0)")
                if (valueerrthree!=1 && valueerrtwo!=1 && valueerr!=1){
                errork=1;
                    $(".submitimage").css("background","linear-gradient(#16B9D4,#9AE3F0)")
                  }}
              else{
                errork=0;
                valueerrtwo=1;
                $(".errorpoke").show()
                $(".pokemonimage").css("background","linear-gradient(white,grey)")
                $(".submitimage").css("background","linear-gradient(white,grey)")
    }})

$(".submitimage").hover(function(){
  if (errork==1){
   $(".submitimage").css("background","linear-gradient(#80EACA,#0AC88F)")}
   else{ $(".submitimage").css("background","yellow")}},function(){
     if (errork==1){
       $(".submitimage").css("background","linear-gradient(#16B9D4,#9AE3F0)")}
       else{$(".submitimage").css("background","linear-gradient(white,grey)")}
     })


     $(".imageinput").keyup(function(){
       imagechosen=$(".imageinput").val()
        poke=$(".imageinput").val()})

$(document).ajaxError(function() {
  alert('Database cannot be accessed. MySQL and NodeJS is only on localhost now! Looking to put my NodeJS code on a dedicated server!')
})


$(".submitimage").click(function(){
  console.log($(".submitimage").css("background"))
  if (errork==0){
    alert("All information must be valid before submitting!")
    return
  }
pokemonchosenfinal=$(".pokemoninput").val();
$(".pokee").attr("alt",pokemonchosenfinal)
  Uone="https://pokeapi.co/api/v2/pokemon/" + pokemonchosenfinal
    $.ajax({
      type:"GET",
      url: Uone,
      success: function(dataone){
      heightpokemon=dataone.height
      id=dataone.id
      }})
.done(function(){
  Utwo="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +id +".png"
     $(".pokee").attr("src",Utwo)
      imagechosen2=$(".imageinput").val()
     $(".human").attr("src",imagechosen2)
     x=meterfinal/(heightpokemon/10);
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
     }
     console.log(rand)
     $.ajax({
       type:"GET",
       url: host,
       data: {pokemonis: pokemonchosenfinal, heightis: parseFloat(meterfinal), imageis:imagechosen2,dateis: 3,randis: parseInt(rand) }
     ,
       success: function(datat){
         var datasql=JSON.parse(datat);
         console.log(hehe);
       var table ='';
       var row;
       for(var i=0; i<datasql.length; i++){
         console.log(datasql[i].machID)
         console.log(rand)
         if (datasql[i].machID==rand){
           console.log('hi');
           row="randyes";
         }
         else{
           row="randno";
       }
           table +='<tr class="'+row+'"> <td class="pokeclass">'+ datasql[i].pokemon +'</td> <td class="imageclass">'+ "<img class='imae'  src= '"+ datasql[i].imagelink+ "' alt='Photo of human'>" + '</td> <td class="heightclas">'+ datasql[i].height +  '</td><td>'+  "<button class='exclass'> ! </button>" + '</td></tr>';
         }
         table ='<table border="1"><tr> <th>Pokemon</th> <th>Image</th> <th>Height</th><th>Submit!</th> </tr>'+ table +'</table>';
         console.log(table)
         $(".sqlbar").html(table);
         $(".exclass").click(function(){
            pok=$(this).closest('tr').children('td.pokeclass').text();
            ima=$(this).closest('tr').children('td').children(".imae").attr("src");
            heig=$(this).closest('tr').children('td.heightclas').text();
            Uone="https://pokeapi.co/api/v2/pokemon/" + pok
              $.ajax({
                type:"GET",
                url: Uone,
                success: function(dataone){
                heightpokemon=dataone.height
                id=dataone.id
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
                 alert("You" + " are too much taller than" + pok + " for this browser to handle.")
                 return true;
               }
            if (adjustedratio<.1 ){
                 alert(pok + " is too tall compared to you for this browser to handle.")
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
                 $(".display").text("You are " + x.toFixed(2) +" times taller"  + " than " +  pok)
               }
               else{
                 $(".explainpara").hide()
                 $(".display").show()
                 $(".display").text("You are " + (1/x).toFixed(2) +" times shorter"  + " than " +  pok)
               }})
         })
       }})
   })})



$(".byDate").click(function(){
  $.ajax({
    type:"GET",
    url: host,
    data: {dateis: 4}
  ,
    success: function(datat){
      var datasql=JSON.parse(datat);
    var table ='';
    for(var i=0; i<datasql.length; i++){
      console.log(datasql[i].machID)
      console.log(rand)
      if (datasql[i].machID==rand){
        console.log('hi');
        row="randyes";
      }
      else{
        row="randno";
    }
        table +='<tr class="'+row+'"> <td class="pokeclass">'+ datasql[i].pokemon +'</td> <td class="imageclass">'+ "<img class='imae'  src= '"+ datasql[i].imagelink+ "' alt='Photo of human'>" + '</td> <td class="heightclas">'+ datasql[i].height +  '</td><td>'+  "<button class='exclass'> ! </button>" + '</td></tr>';
      }
      table ='<table border="1"><tr> <th>Pokemon</th> <th>Image</th> <th>Height</th><th>Submit!</th> </tr>'+ table +'</table>';
      console.log(table)
      $(".sqlbar").html(table);
      $(".exclass").click(function(){
         pok=$(this).closest('tr').children('td.pokeclass').text();
         ima=$(this).closest('tr').children('td').children(".imae").attr("src");
         heig=$(this).closest('tr').children('td.heightclas').text();
         console.log(pok,ima,heig)
         Uone="https://pokeapi.co/api/v2/pokemon/" + pok
           $.ajax({
             type:"GET",
             url: Uone,
             success: function(dataone){
             heightpokemon=dataone.height
             id=dataone.id
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
              alert("You" + " are too much taller than" + pok + " for this browser to handle.")
              return true;
            }
         if (adjustedratio<.1 ){
              alert(pok + " is too tall compared to you for this browser to handle.")
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
              $(".display").text("You are " + x.toFixed(2) +" times taller"  + " than " +  pok)
            }
            else{
              $(".explainpara").hide()
              $(".display").show()
              $(".display").text("You are " + (1/x).toFixed(2) +" times shorter"  + " than " +  pok)
            }})
      })
    }})
})


$(".byPokemon").click(function(){
  $(".byPokemon").autocomplete({source: arr,
    select: function(event,ob){
      console.log("hi")
      $.ajax({
        type:"GET",
        url: host,
        data: {dateis: 5,pokemonis:ob.item.value}
      ,
        success: function(datat){
          var datasql=JSON.parse(datat);
          console.log(datasql)
          console.log(hehe);
        var table ='';
        for(var i=0; i<datasql.length; i++){
          console.log(datasql[i].machID)
          console.log(rand)
          if (datasql[i].machID==rand){
            console.log('hi');
            row="randyes";
          }
          else{
            row="randno";
        }
            table +='<tr class="'+row+'"> <td class="pokeclass">'+ datasql[i].pokemon +'</td> <td class="imageclass">'+ "<img class='imae'  src= '"+ datasql[i].imagelink+ "' alt='Photo of human'>" + '</td> <td class="heightclas">'+ datasql[i].height +  '</td><td>'+  "<button class='exclass'> ! </button>" + '</td></tr>';
          }
          table ='<table border="1"><tr> <th>Pokemon</th> <th>Image</th> <th>Height</th><th>Submit!</th> </tr>'+ table +'</table>';
          $(".sqlbar").html(table);
          $(".exclass").click(function(){
             pok=$(this).closest('tr').children('td.pokeclass').text();
             ima=$(this).closest('tr').children('td').children(".imae").attr("src");
             heig=$(this).closest('tr').children('td.heightclas').text();
             console.log(ima,heig,pok)
             Uone="https://pokeapi.co/api/v2/pokemon/" + pok
               $.ajax({
                 type:"GET",
                 url: Uone,
                 success: function(dataone){
                 heightpokemon=dataone.height;
                 id=dataone.id;

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
                  alert("You" + " are too much taller than" + pok + " for this browser to handle.")
                  return true;
                }
             if (adjustedratio<.1 ){
                  alert(pok + " is too tall compared to you for this browser to handle.")
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
                  $(".display").text("You are " + x.toFixed(2) +" times taller"  + " than " +  pok)
                }
                else{
                  $(".explainpara").hide()
                  $(".display").show()
                  $(".display").text("You are " + (1/x).toFixed(2) +" times shorter"  + " than " +  pok)
                }})
          })
        }})
    }})
})
  $(".passionateheading").click(function(){
    $(".bodypost").html(" <br> <br>Starting in April this year, I have been on a mission to become a junior developer. At first, I learnt Core Java. Next, to master my skills in Core Java I studied for and attained an Oracle Java Certification which is designed for Java Developers working in the field! Then, I completed basic applications using tools in Java Web Development. Finally, I learnt HTML, CSS and JavaScript which are all on display right here! I do not see myself losing my zest for web development anytime soon!")
  })
  $(".quicklearnerhead").click(function(){
    $(".bodypost").html(" <br> Wikipedia and Khan Academy have transformed the educational landscape, allowing people, regardless of their backgrounds to learn virtually anything they want to.  Skype has allowed for loved one's to share joy with their spouses even if they live in the farthest corner of the Earth. Online companies such as WebMD and IsabelHealthCare have allowed people to diagnose themselves <span class=smallfont> (with caution) </span>, many times saving their lives.  Web applications have and WILL continue to change the world for the better. This is why I want to become a web developer.")
  })

  $(".educationhead").click(function(){
    $(".bodypost").html(" <br> I have always been excellent at understanding and applying technical skills. In my math and science classes at my engineering school, I was always one of the first to find the solution to a problem. Most directly, I have learnt web development skills in a relatively short period. For example, I attained my Oracle Java Certification on my first attempt with two months of studying! I know that as a developer, one of my most important skills will be learning and applying technical skills. As long as I continue to possess my grit and intelligence, I know that I will be a fantastic developer.")
  })

  $(".educationh").click(function(){
    $(".bodypost").html(" <br> <br><h2> <b> B.S Mechanical Engineering </b> <h5>  University of Maryland College Park </h5>     <h6> (2011-2015) 3.00 GPA </h6>  <ul> Certifications  <li> Oracle Certified Associate Java 7 SE Programmer 1 </li> <li> Lean Six Sigma Green Belt </li></ul> <ul> Test Scores <li> GRE QR=167(94%), VR=160(85%) </li> </ul> </h5> Click on the arrow to look at my first project!</h5> </h2>")
  })

    $(".imagearrowbox").hover(function(){
      $(".imagearrow").css("background-color","orange")},
        function(){$(".imagearrow").css("background-color" ,"#ADD8E6")})

  $(".arr").hover(function(){
    $(".arrbutton").css("background-color","orange")},
    function(){$(".arrbutton").css("background-color" ,"#ADD8E6")})

  $(".arr").click(function(){
    // $(".pokewindow").removeClass("pokee");
    //   $(".pokewindow").removeClass("human");
    //     $(".pokewindow").removeClass("explainpara");
    $(".human").css('display', 'none');
    $(".pokewindow").find("*").removeClass();
    $(".pokewindow").removeClass();
    $(".madLibWindow").show();
  })

$(".submitclass").click(function(){
  var textt=$(".madlibb").val().trim();
  console.log(textt)
  var textt2=textt.replace(/\s\s/g,"\s")
  console.log(textt2);
  var submittext=textt2.split(" ")
  console.log(submittext)
  $.ajax({
    type:"GET",
    url: localhost,
    data: {madlibarray: text}
  ,
    success: function(datat){
      console.log('hi')
}})})

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
  $(".image2border").animate({color:"green"},"150")},
  function(){$(".image2border").animate({color: "black"}, "150")})
})
