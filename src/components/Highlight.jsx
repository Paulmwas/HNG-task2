import Highlight1 from '../assets/watch9.png';
import Highlight2 from '../assets/watch10.png';
import Features from './Features';



const Highlight = () => {
  return (
    <>
    <div className="highlight ">
        <div className="watches">
            <img src={Highlight1} alt="" />
            <div>
                <h1>TIMELESS SERIES</h1>
                <p>HANDCRAFTED LIMITED EDITION</p>
            </div>
        </div>
        <div className="watches">
            <img src={Highlight2} alt="" />
            <div className='watches-desc'>
                <h1>ROLEX DAY-DATE</h1>
                <p>KINGSMEN VIII COLLECTION</p>
            </div>
        </div>
        
        
    </div>
    < Features/>
    </>
  )
}

export default Highlight
