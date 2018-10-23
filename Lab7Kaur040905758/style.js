var shoppingCart = (function(){

 var totalmoney = 0.0;
 var totalcount = 0;


 // Create a private array that contains objects that describe the gum brands and the prices.
 var brands =[{brand:"Extra",      price: 2.00},
              {brand:"DoubleMint", price: 1.50},
              {brand:"Trident",    price: 1.75},
              {brand:"BubbleGum",  price: 1.00}
             ];


//Create a public method called addPrice().
 var addPrice = function(candy){


   for (var i=0; i< brands.length; i++){

     if (brands[i].brand == candy) {

        totalmoney = totalmoney + brands[i].price;

        totalcount++;
     }

   } // end of for

   // displays the number of items and the total price
   document.getElementById("countItems").innerHTML = totalcount;
   document.getElementById("totalPrice").innerHTML = totalmoney;

 } // end of addPrice


//Create a public method called clear(). This method will set the Shopping Cart Total and Shopping Cart Items to 0.

var clear = function(){

  totalmoney = 0.0;
  totalcount = 0;

  //  displays nothing
  document.getElementById("countItems").innerHTML = totalcount;
  document.getElementById("totalPrice").innerHTML = totalmoney;
} // end of clear function


 return {
     addPrice:addPrice,
     clear:clear
 };
})();


//Section C – JavaScript Events

//10) Add a click event to the Extra gum image that will execute the addPrice() method.


document.getElementById("g1").addEventListener("click", function() {
  shoppingCart.addPrice("Extra");
});


//11) Add a click event to the Double Mint gum image that will execute the addPrice() method.
document.getElementById("g2").addEventListener("click", function() {
 shoppingCart.addPrice("DoubleMint");
});

// //12) Add a click event to the Trident gum image that will execute the addPrice() method.
document.getElementById("g3").addEventListener("click", function() {
shoppingCart.addPrice("Trident");
});

// //13) Add a click event to the Bubble Gum image that will execute the addPrice() method.
document.getElementById("g4").addEventListener("click", function() {
shoppingCart.addPrice("BubbleGum");
});

// //14) Add a click event to the Clear button to set the Shopping Cart Items and Shopping Cart Total to 0.
document.getElementById("cl").addEventListener("click", function() {
 shoppingCart.clear();
});
