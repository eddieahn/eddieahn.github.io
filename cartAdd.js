var addCartButton = document.getElementsByTagName('button')[0];
var cartOpen = false;
var simpleCartValue = document.cookie.split('simpleCart')[1].split(";")[0]
	
if(simpleCartValue == "="){
	cartOpen = true;
}

var product = document.getElementsByClassName('product')[0].innerText.split('\n');
window.adobeDataLayer[window.adobeDataLayer.length-1].product.price = parseFloat(product[product.length-3].split(':')[1].trim().substr(1)); 

addCartButton.addEventListener('click',function(e){
	e.preventDefault();
	var cartRevenue = window.adobeDataLayer[window.adobeDataLayer.length-1].product.price;
	var productName = window.adobeDataLayer[window.adobeDataLayer.length-1].product.productName;
	var productID = window.adobeDataLayer[window.adobeDataLayer.length-1].product.productID;
	
	
	_satellite.track('addToCart',{productName:productName, cartRevenue:cartRevenue, cartOpen:cartOpen, productID: productID})
	setTimeout(function(){window.location.href = "http://localhost:3000/checkout/shoppingcart.html"},3000);

})