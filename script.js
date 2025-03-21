const catalog=[
    {id:1,name:'Product1',price:20},
    {id:2, name:'Product2',price:30},
    {id:3, name:'Product3',price:25},
];

function loadCatalog(){
    const catalogContainer=document.getElementById('content');
    catalogContainer.innerHTML='<h2>Catalog</h2>';
    catalog.forEach(product => {
        const productCard=document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML=`
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addTocart(${product.id})">
        Add to Cart</button>
        `;
        catalogContainer.appendChild(productCard);
    });
}

function addTocart(productId){
    console.log(`product ${productId} added to cart`);
}

loadCatalog();