import { ActivityIndicator, Text,View } from "react-native";
import {useRoute} from "@react-navigation/native"
import { useState,useEffect } from "react";

import ProductDetailsItem from "../../components/ProductDetailsItem";
 
 
export default function ProductDetails(){
    
    
    const route = useRoute()
    const {productId} = route.params;
    console.log(route.params);
    // const baseURL =
    // const add = productId;
    // const fullURL = urlJoin(baseURL,add);
    // console.log(fullURL)
 
    const[loading,setLoading] = useState(false)
    const [productDetailsdata,setProductDetailsdata] = useState([])
 
    useEffect(() => {
        setLoading(true)
        async function getDataFromApi() {
            const apiRes = await fetch(`https://dummyjson.com/products/${productId}`);
            const finalResult = await apiRes.json()
 
            if (finalResult) {
                setLoading(false)
                setProductDetailsdata(finalResult);
            }
        }
 
        getDataFromApi()
    }, [])
 
    if(loading){
        return
            <ActivityIndicator size = "large" color = {"red"}/>
    }
 
    console.log(productDetailsdata)
 
    return (
        <View>
            <ProductDetailsItem productDetailsdata = {productDetailsdata} />
            {/* <Text>ProductDetails</Text> */}
        </View>
    )
}