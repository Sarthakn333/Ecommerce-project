
//import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Filter from "../../components/filter/Filter";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Layout from "../../Components/Layout/Layout";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Track from "../../Components/Track/Track";
//import { addToCart, deleteFromCart } from "../../Redux/cartslice";

const Home = () => {
  // const dispatch = useDispatch();
  // const cartItem = useSelector((state)=> state.cart)

  // console.log(cartItem)

  // const addCart = () => {
  //   dispatch(addToCart("shirt"));
  // }

  // const deleteCart = () => {
  //   dispatch(deleteFromCart("shirt"));
  // }

  return <Layout>
    <HeroSection/>
    <Filter/>
    <ProductCard/>
    <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
    <Track/>
    <Testimonial/>
  </Layout>;
};

export default Home
