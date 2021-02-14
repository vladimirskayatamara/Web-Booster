let itemList = document.querySelector('.products');
let request = new Request('./product.json');

fetch(request)
  .then(function(response) { 
    return response.json(); 
  })
  .then(function(data) {
    for (let i = 0; i < data.product.length; i++) {
      let item = document.createElement('div');
      item.setAttribute("class", "card");
      let photo = document.createElement('img');
      itemList.appendChild(photo);
      photo.setAttribute("class", "card-image")

      let img = data.product[i].img;
      item.innerHTML = data.product[i].name + '<br>' + data.product[i].price;
      itemList.appendChild(item);
      photo.src = img;
    }
  });


  

 
  

  
  