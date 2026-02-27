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
    <h2 class="card-title">${product.title}</h2>
    <h1 class="text-4xl font-bold">$ ${product.price}</h1>
    <div class="card-actions justify-between">
      <button class="btn btn-primary">Details</button>
      <button class="btn btn-primary">Add</button>
    </div>
  </div>
</div>
        `
        allProducts.appendChild(div);
    })
}

loadCategoriesData();