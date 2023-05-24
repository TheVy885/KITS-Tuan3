const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

if (id == null ||id=="") {
  window.location.replace("./index.html");
} else {
  async function fetchSingleDataDetails() {
    const product = await fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => json);
    console.log(product);

    const productsDiv = document.querySelector(".product");

   
      productsDiv.innerHTML = `
        
                    <img src="${product.image}" alt="" />
                    <div class="name_price">${product.title}</div>
                    <div class="name_price">${product.price}</div>
                  `;
    
  }
}
