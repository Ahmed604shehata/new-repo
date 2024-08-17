// show more products page items 
fetch('/js/items.json')
   .then(response => response.json())
   .then(data => {

    var items_content = document.querySelector('.items_content');
data.forEach(item=>{
   if(item.more){
      items_content.innerHTML += `
      <div class='show_img'>
            <img  src="${item.img}" alt="">


      <div class='show_img_hover'>
         <span><i class="fa-solid fa-cart-plus"></i></span>
         <span><i class="fa-solid fa-heart"></i></span>
         <span><i class="fa-solid fa-share"></i></span>
      </div>
      </div>
      `
      }
   })
})
