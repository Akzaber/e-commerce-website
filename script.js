console.log("by the grace of almighty allah");

const loadCategoriesData = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(categories => {
            const getCategories = document.getElementById('category-lists')
            categories.forEach(category => {
                const div = document.createElement('div');
                div.innerHTML = `
                <button class="btn btn-sm">${category}</button>
            `
                getCategories.appendChild(div);
            })
        })
}

const loadModal = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(data => showDetails(data))
}

const showDetails = (product) => {
    const getDiv = document.getElementById('modal-details');
    getDiv.innerHTML = `
        <div class="space-y-5">
            <div class="p-4 bg-slate-100 rounded flex items-center justify-center">
                <img class="w-1/2" src=${product.image}>
            </div>
            <div class="flex justify-between">
                <button class="btn btn-sm">${product.category}</button>
                <div>
                    <p>${product.rating.rate}(${product.rating.count})</p>
                </div>
            </div>
            <div class="space-y-5">
                <h2 class="text-2xl font-bold">${product.title}</h2>
                <p>${product.description}</p>
            </div>
        </div>
    `;
    document.getElementById('details_modal').showModal();
}

const loadProducts = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => showProducts(data))
}

const showProducts = (products) => {
    const allProducts = document.getElementById('all-products');
    allProducts.innerHTML = "";
    products.forEach(product => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card bg-base-100 w-96 shadow-sm">
  <figure class="bg-slate-100 p-5">
    <img
    class="w-1/2 h-64"
      src=${product.image}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <div class="card-actions justify-between">
        <div class="badge badge-md bg-slate-100">${product.category}</div>
        <div><p>${product.rating.rate}(${product.rating.count})</p></div>
    </div>
    <h2 class="card-title truncate min-w-0 line-clamp-2">${product.title}</h2>
    <h1 class="text-3xl font-bold">$ ${product.price}</h1>
    <div class="card-actions justify-between">
      <button onclick="loadModal(${product.id})" class="btn"><i class="fa-regular fa-eye"></i>Details</button>
      <button class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i>Add</button>
    </div>
  </div>
</div>
        `
        allProducts.appendChild(div);
    })
}

loadProducts();
loadCategoriesData();