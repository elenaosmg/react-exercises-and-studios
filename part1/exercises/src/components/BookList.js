export default function BookList() {
   let pageTitle = "shrug";
   let book1 = "https://www.sunduchokknig.com/cdn/shop/products/Bukvi_cover_shadow-346x461_200x.png?v=1678917483";
   let book2 = "https://www.sunduchokknig.com/cdn/shop/products/Screenshot2023-03-14_400x.png?v=1678824250";
   let book3 = "https://www.sunduchokknig.com/cdn/shop/products/mawa02kjpfetpuw73kqtliu4u76c7sw8_200x.webp?v=1680292590";

   return (
      <div>
        <h1>{pageTitle}</h1> 
         <img src={book1} alt="Puzzles!" />
         <img src={book2} alt="Zolushka" />
         <img src={book3} alt="Plastic" />
      </div>      
   );
}