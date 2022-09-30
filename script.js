var viewBtn = document.getElementById("view");
var user1 = document.getElementById("user1");
var col4 = document.getElementsByClassName("col-4")[0]
//var user2 = document.getElementById("user2");
// var user3 = document.getElementById("user3");
// var userImg1 = document.getElementById("userImg1" )

var img1= document.getElementById("img1" )
var img2= document.getElementById("img2" )
 var img3= document.getElementById("img3" )


function hideuser(){
    user1.style.display = "none";
//     user2.style.display = "none";
//     user3.style.display = "none";
}
hideuser();

function disableView(){
    viewBtn.setAttribute("disabled", "disabled");
}

function showUser(){
    user1.style.display = "block";
// user2.style.display = "block";
//  user3.style.display = "block";
};



viewBtn.addEventListener('click',() =>{
    showUser();
    disableView();
    
    var user1Img = document.createElement("img");
    var user2Img = document.createElement("img");
    var user3Img = document.createElement("img");
    
   var  cardBody = document.createElement("div"); 
    cardBody.setAttribute("class","card-body");

    var cardTitile = document.createElement("h5") ;
    cardTitile.setAttribute("class","card-title");
    cardTitile.innerText = "Ramm"
   

    var cardText = document.createElement("p");
    cardText.setAttribute("class","card-text");
    cardText.innerText="Sanker"

    var like = document.createElement("button");
    like.setAttribute("id","like");
    like.innerText = "like";

    var dislike = document.createElement("button");
    dislike.setAttribute("id","dislike");
    dislike.innerText = "dislike";
       
    user1Img.setAttribute('src',"imges/t3.jpg");
    user1Img.setAttribute('alt', 'nature');        
    user1Img.setAttribute('class', 'card-img-top');

    user2Img.setAttribute('src',"imges/testi3.jpg" );
    user2Img.setAttribute('alt', 'nature');        
    user2Img.setAttribute('class', 'card-img-top');


    user3Img.setAttribute('src',"imges/testi5.jpg");
    user3Img.setAttribute('alt', 'nature');        
    user3Img.setAttribute('class', 'card-img-top');


    img1.appendChild(user1Img);
    // img2.appendChild(user2Img);
    // img3.appendChild(user3Img);
    cardBody.appendChild(cardTitile);
    cardBody.appendChild(cardText);
    cardBody.appendChild(like);
    cardBody.appendChild(dislike);
    img1.appendChild(cardBody);


   // img1.appendChild(user2Img);
    // img2.appendChild(user2Img);
    // img3.appendChild(user3Img);
    // cardBody.appendChild(cardTitile);
    // cardBody.appendChild(cardText);
    // cardBody.appendChild(like);
    // cardBody.appendChild(dislike);
    // img1.appendChild(cardBody);


    col4.appendChild(cardBody)



   








});
// press next current card hidden
// new card show
//