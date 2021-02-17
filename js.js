
var isTrue=!0;
$('.fa-align-justify').click(function(){isTrue?(
    $('.sidebar').toggleClass('active'),
    $(".fa-align-justify").toggleClass("fa-times"),
    
    $(".option #non1").animate({opacity:"1",paddingTop:"5px"},1000),
    $(".option #non2").animate({opacity:"1",paddingTop:"5px"},1100),
    $(".option #non3").animate({opacity:"1",paddingTop:"5px"},1200),
    $(".option #non4").animate({opacity:"1",paddingTop:"5px"},1300),
    $(".option #non5").animate({opacity:"1",paddingTop:"5px"},1400),
    $(".option #non6").animate({opacity:"1",paddingTop:"5px"},1500),
isTrue=!isTrue):(
$('.sidebar').toggleClass('active'),
$(".fa-align-justify").toggleClass("fa-times"),
$(".option li").animate({opacity:"0",paddingTop:"400px"},500),isTrue=!isTrue)
});





var allData =[];
function movie(x){
    var z = x;
    var req = new XMLHttpRequest() ;

req.open("GET",z);
req.send();
req.addEventListener("readystatechange" , function(){
    
if( req.readyState == 4 && req.status == 200){
    allData = JSON.parse(req.response).results;
    
    displayData(allData)
}
});




}
var demo = document.getElementById("demo");

function displayData(){
var str ="";
for(var i=0 ; i < allData.length ; i++){
str += ` <div class="shaaa col-xl-4 col-lg-4 col-md-6 col-sm-6 shadow ">
<div >
    <div class="movie shadow rounded position-relative ">
    
    <img src="https://image.tmdb.org/t/p/w500${allData[i].poster_path}"  class=" " alt="demo" id="picid" >
    <div class="layer d-flex align-items-center  ">
    <div class="info ">       
        <h2>'${allData[i].original_title}"</h2>
        <p>"${allData[i].overview}"</p>
        <p >rate: "${allData[i].vote_average}"</p>
        <p>"${allData[i].release_date}"</p>
    </div>
    </div> 
    </div> 
</div>
</div>`
}
demo.innerHTML = str ;
};

var search_bar   =document.getElementById("word"),
MoviesByWord  =document.getElementById("allMovies");


function getMoviesByWord(e){
    var req=new XMLHttpRequest,
        t="https://api.themoviedb.org/3/search/movie?query="+e+"&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false";

    req.open("get",t),
    req.send(),
    req.onreadystatechange=function(){
        if( req.readyState == 4 && req.status == 200){
    allData = JSON.parse(req.response).results;
    
    displayData(allData)
}
}}



        
    MoviesByWord.onkeyup=function(){
        getMoviesByWord(MoviesByWord.value)
        console.log(MoviesByWord.value)
    };
    



search_bar.onkeyup=function(){


    var e=search_bar.value,
        a="";

if(""==e)return demo.innerHTML=" ",!1;
console.log(allData)
for(var i=0;i<allData.length;i++)
1==allData[i].original_title.includes(e)&&
(
    a+=` <div class="shaaa col-xl-4 col-lg-4 col-md-6 col-sm-6 shadow ">
<div >
    <div class="movie shadow rounded position-relative ">
    
    <img src="https://image.tmdb.org/t/p/w500${allData[i].poster_path}"  class=" " alt="demo" id="picid" >
    <div class="layer d-flex align-items-center  ">
    <div class="info ">       
        <h2>'${allData[i].original_title}"</h2>
        <p>"${allData[i].overview}"</p>
        <p >rate: "${allData[i].vote_average}"</p>
        <p>"${allData[i].release_date}"</p>
    </div>
    </div> 
    </div> 
</div>
</div>`

    ,demo.innerHTML=a
    )};




    
    let userName=document.getElementById("name"),
    userEmail=document.getElementById("email"),
    userPhone=document.getElementById("phone"),
    userAge=document.getElementById("age"),
    userPassword=document.getElementById("password"),
    userRePassword=document.getElementById("rePassword"),
    userNameAlert=document.getElementById("namealert"),
    userEmailAlert=document.getElementById("emailalert"),
    userPhoneAlert=document.getElementById("phonealert"),
    userAgeAlert=document.getElementById("agealert"),
    userpasswordAlert=document.getElementById("passwordalert"),
    userRepasswordAlert=document.getElementById("repasswordalert");


function userNameValid(){
    return 1==/^[a-zA-Z0-9]+$/.test(userName.value)?(userNameAlert.style.display="none",!0):(userNameAlert.style.display="block",!1)
}

function userEmailValid(){
    return 1==/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(userEmail.value)?(userEmailAlert.style.display="none",!0):(userEmailAlert.style.display="block",!1)
}

function userPhoneValid(){
    return 1==/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(userPhone.value)?(userPhoneAlert.style.display="none",!0):(userPhoneAlert.style.display="block",!1)
}

function userAgeValid(){
    return 1==/^[1-9][0-9]?$|^100$/.test(userAge.value)?(userAgeAlert.style.display="none",!0):(userAgeAlert.style.display="block",console.log("dkldkdlkdlk"),!1)
}

function userPasswordValid(){
    return 1==/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userPassword.value)?(userpasswordAlert.style.display="none",!0):(userpasswordAlert.style.display="block",!1)
}

function userRePasswordValid(){
    return userPassword.value==userRePassword.value?(userRepasswordAlert.style.display="none",!0):(userRepasswordAlert.style.display="block",!1)
}

userAgeAlert.style.display="none",
userName.addEventListener("keyup",userNameValid),
userEmail.addEventListener("keyup",userEmailValid),
userPhone.addEventListener("keyup",userPhoneValid),
userAge.addEventListener("keyup",userAgeValid),
userPassword.addEventListener("keyup",userPasswordValid),
userRePassword.addEventListener("keyup",userRePasswordValid),
document.getElementById("contact").addEventListener("click",
function(){
    userNameValid()
    &&userEmailValid()
    &&userPhoneValid()
    &&userAgeValid()
    &&userPasswordValid()
    &&userRePasswordValid()
    ?document.getElementById("submitBtn").disabled=!1:document.getElementById("submitBtn").disabled=!0
});

