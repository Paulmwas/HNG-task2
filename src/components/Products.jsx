import ProductCard from "./ProductCard"
const Products = () => {
  return (
    <div className="products-page w-screen ">
        <div className="categories">
            <li className="first">Full catalogue</li>
            <li className="catItem">Leather</li>
            <li className="catItem">Mechanical</li>
            <li className="catItem">Limited Edition</li>
            <li className="last">View all <span>&#10095;</span></li>
        </div>
        <div className="prodcontainer w-full lg:grid lg:grid-cols-4 gap-1 pl- pt-[50px] mr-[50px] ">
            <ProductCard />
            
        </div>
        <a className="load-button btn" href="#">Load More</a>

      
    </div>
  )
}

export default Products
