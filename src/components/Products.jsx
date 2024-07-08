import ProductCard from "./ProductCard"
const Products = () => {
  return (
    <div className="products-page">
        <div className="categories">
            <li className="first">Full catalogue</li>
            <li className="catItem">Leather</li>
            <li className="catItem">Mechanical</li>
            <li className="catItem">Limited Edition</li>
            <li className="last">View all <span>&#10095;</span></li>
        </div>
        <div className="container">
            <ProductCard />
            
        </div>
        <a className="load-button" href="#">Load More</a>

      
    </div>
  )
}

export default Products
