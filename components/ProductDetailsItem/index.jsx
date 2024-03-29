import { StyleSheet,View,Text,FlatList,Image } from "react-native";
import { Context } from "../../context";
import { useContext } from "react";
import { LinearGradient } from 'expo-linear-gradient';
 
export default function ProductDetailsItem({productDetailsdata}){
 
    const { loading, products } = useContext(Context)
 
    if (loading) {
        return (
            <ActivityIndicator style={styles.loader} color={'red'} size={'large'} />
        )
    }
 
    return (
        
           
                
                <LinearGradient colors = {['#606060','#D3D3D3']} style ={styles.outerContainer}>
                  
                    <Image source = {{uri : productDetailsdata.thumbnail}} style = {styles.ImageStyle}/>
                    <Text style = {styles.textStyle}>{"Product Name - "+productDetailsdata.title}</Text>
                    <Text style = {styles.textStyle}>{"Price - $ "+productDetailsdata.price}</Text>
                    <Text style = {styles.textStyle}>{"User Rating - "+productDetailsdata.rating}</Text>
                    <Text style = {styles.textStyle}>{"Category - "+productDetailsdata.category}</Text>
                    <Text style = {styles.textStyle}>{"Descripion - "+productDetailsdata.description}</Text>
            </LinearGradient>
        
            
    )
}
 
 
const styles = StyleSheet.create({
    outerContainer:{
        paddingTop :20,
        paddingBottom :20,
        paddingHorizontal :15,
        // borderWidth:1,
        margin :10,
       
        height :700
    },
    container:{
        paddingTop :50,
        paddingBottom :20,
        paddingHorizontal :30,
        borderWidth:1,
        margin :10,
        borderColor :"#88da9e",
        height : 600
    },
    textStyle:{
        color : "#ffffff",
        fontSize : 20,
        paddingBottom :5
    },ImageStyle:{
        padding :80,
        paddingHorizontal :30,
        borderWidth:1,
        margin :10,
 
    }
})
 