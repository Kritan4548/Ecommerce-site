import { useEffect } from "react";
import { Outlet, useParams, useSearchParams } from "react-router-dom"
const CategoryDetailLayout = ()=>{
    const params=useParams();

    const [query,setQuery]=useSearchParams();
    console.log(params);
    useEffect(()=>{
        console.log(query.get('price'))
    },[query,params])
   
    return (
        <>
        <button onClick={() =>{
            setQuery({
                price:"1000-10000"
            })
        }}>
            Price:1000-10000
        </button>
        <Outlet />
        </>
    )
}
export default CategoryDetailLayout;