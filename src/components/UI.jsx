import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import tw from "tailwind-styled-components";

const Ui = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const res = await fetchData("https://dummyjson.com/products");
    const data = res.products.slice(0, products.length+10);
    setProducts(data);
    console.log(data)
  };

  useEffect(()=>{
    getData();
  }, [])

  useEffect(() => {
    let timer;
    const onscroll = () => {
      const scrolledTo = window.scrollY + window.innerHeight;
      const isReachBottom = document.body.scrollHeight <= scrolledTo;
      console.log("chal rha hai")
      if (isReachBottom) {
        timer = setInterval(()=>{
          getData()
        }, 2000)
      }
    };
    window.addEventListener("scroll", onscroll);
    return () => {
      window.removeEventListener("scroll", onscroll);
      clearInterval(timer);
    };
  });

  return (
    <Box>
      {products.map((product) => (
        <Product key={product.id}>
          <Title>{product.brand}</Title>
          <Image src={product.images[0]} alt={product.description} />
        </Product>
      ))}
      <Loader className="text-white text-2xl"></Loader>
    </Box>
  );
};

export default Ui;


const Box = tw.div`flex flex-col mx-auto w-1/2 gap-4 mt-8 justify-center items-center`
const Product = tw.div`border-2 flex flex-col justify-center items-center px-2 py-4 rounded-xl border-white/5`
const Title = tw.h1`text-3xl text-white my-4`
const Image = tw.img`w-fit`
const Loader = tw.p`animate-spin rounded-full border-4 w-14 h-14 border-b-transparent duration-100 mx-auto`