import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading,setLoading] = useState(false);
  const [post,setPost] = useState([]);

  async function fetchProductData() {
        setLoading(true);
        try{
          const res = await fetch(API_URL);
          const data = await res.json();
          setPost(data);
        }
        catch(error){
          console.log("API ERROR OCCURRED");
          setPost([]);
        }
        setLoading(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[])

  return(
    <div className="flex justify-center items-center min-h-screen"> 
      {
        loading?<Spinner/>:(post.length > 0 ? (<div className="grid grid-cols-4  max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
        {post.map((post) => (<Product key={post.id} post={post}/>) )}
        </div>):(<div className="flex justify-center items-center"><p>No Data Found</p></div>))
      }
    </div>
  );
};

export default Home;
