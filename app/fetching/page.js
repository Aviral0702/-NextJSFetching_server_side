import Button1 from "../button/button1";


async function Products(){
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return data.products;

}

export default async function Print(){
    let products = await Products();
    console.log(products);
    return(
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((items)=>
                    <li key={items.id}>{items.title}
                        <br/>
                        <Button1 price = {items.price}/> 
                    </li>
                    
                )}
            </ul>
        </div>
    )
}