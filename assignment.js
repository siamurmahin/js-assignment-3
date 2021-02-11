
// KM to Meter Function 
function kilometerToMeter(km){
    var meter = km*1000;
    return meter;
}

var result = kilometerToMeter(2);    //**Put your KM into this parameter */
console.log(result);

// Budget Calculator function
function budgetCalculator(watch, phone, laptop){
    var watchTotalPrice = 50*watch; 
    var phoneTotalPrice = 100*phone;
    var laptopTotalPrice = 500*laptop;
    var totalPrice = watchTotalPrice + phoneTotalPrice + laptopTotalPrice;
    return totalPrice;
}
var quantity = budgetCalculator(** , ** , **); //**Put your Watches, Phones, Laptops quantity into this parameter */
console.log(quantity);


// Hotel Cost Function

function hotelCost(days){
    var hotelCharge = 0;
    if(days <= 10){
        hotelCharge  = 100*days;

    }
    else if(days<=20){
        var firstTenDays = 100*10;
        var remaining = days - 10;
        var afterTenDays=days*80;
        hotelCharge = firstTenDays + afterTenDays;
    }
    else{
        var firstTenDays= 100*10;
        var afterTenDays= 80*10;
        var remaining = days-20;
        var afterTwentyDays= remaining*50;
        hotelCharge = firstTenDays + afterTenDays + afterTwentyDays; /** Total Cost  */

    }
 return hotelCharge;
}
var totalCharge = hotelCost(***); /** how many days you want to stay, Just Put into this parameter */
console.log(totalCharge);

// mega Friend function 
function megaFriend(friendList){
    var max = 0;
    var longestName = friendList[0];
    
    for (var i = 0; i < friendList.length; i++) {
      if (friendList[i].length > max) {
        var max = friendList[i].length;
        longestName = friendList[i];
      }
    }
    return longestName;
  }
    
    var result= megaFriend(['***', '*********', '******','***']); /** Put your friend name into this parameter */

    console.log(result);  


    // The end 