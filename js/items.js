// receive data form json file
fetch('js/items.json')
   .then(response => response.json())
   
   .then(data => {
      
      var swiper_items_sale1 = document.querySelector('.swiper_items_sale1');
      var swiper_items_sale2 = document.querySelector('.swiper_items_sale2');
      var other_product_swiper = document.querySelector('#other_product_swiper');
      var other_product_swiper2 = document.querySelector('#other_product_swiper2');
// bind data products with other pages
   all_products_json = data ; 

// data for product slide top part have no image 
   data.forEach(product => {
   const presentPrice = Math.floor(( product.old_price - product.price) / product.old_price * 100) ;
   if(product.old_price && !product.find){
      swiper_items_sale1.innerHTML += `
      <div class="product swiper-slide">
         <div class="icons">
            <span><i onclick='addToCart(${product.id} , this)' class="fa-solid fa-cart-plus"></i></span>
            <span><i  onclick='addToHeart(${product.id} , this)'  class="fa-solid fa-heart"></i></span>
            <span><i class="fa-solid fa-share"></i></span>
         </div>
         <span class="sale_present">%${presentPrice}</span>
         <div class="img_product">
            <img  src="${product.img}" alt="" style="height:70%; width:100%; margin-bottom:30px">
            <img  class="img_hover" src="${product.img_hover}" alt="">
         </div>
         <h3 class="name_product"><a href="#">${product.name}</a></h3>
         <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
         </div>
         <div class="price">
            <p><span>$${product.price}</span></p>
            <p class="old_price">$${product.old_price}</p>
         </div>
      </div>
      `
   }
});
// data for product slide have no image under part
data.forEach(product => {
   const presentPrice = Math.floor(( product.old_price - product.price) / product.old_price * 100) ;
   if(product.find){
      swiper_items_sale2.innerHTML += `
      <div class="product swiper-slide">
         <div class="icons">
            <span><i onclick='addToCart(${product.id} , this)' class="fa-solid fa-cart-plus"></i></span>
            <span><i  onclick='addToHeart(${product.id} , this)'  class="fa-solid fa-heart"></i></span>
            <span><i class="fa-solid fa-share"></i></span>
         </div>
         <span class="sale_present">%${presentPrice}</span>
         <div class="img_product">
            <img  src="${product.img}" alt="" style="height:70%; width:100%; margin-bottom:30px">
            <img  class="img_hover" src="${product.img_hover}" alt="">
         </div>
         <h3 class="name_product"><a href="#">${product.name}</a></h3>
         <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
         </div>
         <div class="price">
            <p><span>$${product.price}</span></p>
            <p class="old_price">$${product.old_price}</p>
         </div>
      </div>
      `
   }
});
// data for product slide1 have image
data.forEach(product => {
   if(product.slide){


   other_product_swiper.innerHTML += `
   <div class="product swiper-slide">

      <div class="icons">
         <span><i onclick='addToCart(${product.id} , this)' class="fa-solid fa-cart-plus"></i></span>
         <span><i onclick='addToHeart(${product.id} , this)' class="fa-solid fa-heart"></i></span>
         <span><i class="fa-solid fa-share"></i></span>
      </div>
      <div class="img_product">
         <img  src="${product.img}" alt="">
         <img  class="img_hover" src="${product.img_hover}" alt="">
      </div>

      <h3 class="name_product"><a href="#">${product.name}</a></h3>
      <div class="stars">
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
      </div>
      <div class="price">
         <p><span>$${product.price}</span></p>
      </div>
   </div>
   `
}
});
// data for product slide 1-2 have image
data.forEach(product => {
   if(product.slide){
other_product_swiper2.innerHTML += `
   <div class="product swiper-slide">

      <div class="icons">
         <span><i onclick='addToCart(${product.id} , this)' class="fa-solid fa-cart-plus"></i></span>
         <span><i onclick='addToHeart(${product.id} , this)' class="fa-solid fa-heart"></i></span>
         <span><i class="fa-solid fa-share"></i></span>
      </div>
      <div class="img_product">
         <img  src="${product.img}" alt="">
         <img  class="img_hover" src="${product.img_hover}" alt="">
      </div>

      <h3 class="name_product"><a href="#">${product.name}</a></h3>
      <div class="stars">
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
      </div>

      <div class="price">
         <p><span>$${product.price}</span></p>
      </div>
   </div>
   `
   }
});
});


