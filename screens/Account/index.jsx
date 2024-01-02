import React, {useState} from 'react';
import {View, Text, TextInput, Button,StyleSheet, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
 
const Account = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const handleLogin = () => {
    if (username === 'Username' && password === 'Password') {
      setIsLoggedIn(true);
      // console.warn('Successfully logged in....');
    } else {
      alert('Please enter valid credentials');
    }
  };
 
  const handleLOgout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };
 
 
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [price,setPrice] = useState('');
  const [discountPercentage,setDiscountPercentage] = useState('');
  const [rating,setRating] = useState('');
  const [stock,setStock] = useState('');
  const [brand,setBrand] = useState('');
  const [category,setCategory] = useState('');
  const [thumbnail,setThumbnail] = useState('');
 
 
  const saveData= async() => {
        console.warn(title)
        const url = "http://10.0.2.2:3000/users";
        let result = await fetch(url,{
            method :"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({title,description,price,discountPercentage,rating,stock,brand,category,thumbnail})
        });

        
        result = await  result.json();
        if(result){
          console.warn("product added successfully")
        }
  }
 
  return (
    <LinearGradient colors = {['#606060','#D3D3D3']} >
      
      {isLoggedIn ? (
        <View style = {styles.innercontainer}>
        <View style = {styles.textfieldcontainer}>
          <ScrollView>
            <Text style = {{textAlign:'center',color:'white'}}>Add New Products</Text>
        
        
        <View style = {styles.input}>
          <TextInput 
          value = {title}
          onChangeText = {(text)=>setTitle(text)}
          placeholder = 'Enter Title' /></View>

        <View style = {styles.input}>
          <TextInput 
          value = {description}
          onChangeText = {(text)=>setDescription(text)}
          placeholder = 'Enter Description' /></View>

        <View style = {styles.input}>
          <TextInput 
          value = {price}
          onChangeText = {(text)=>setPrice(text)}
          placeholder = 'Enter Price' /></View>

        <View style = {styles.input}>
          <TextInput 
          value = {discountPercentage}
          onChangeText = {(text)=>setDiscountPercentage(text)}
          placeholder = 'Enter Discount-Percentage' /></View>
 
         
        <View style = {styles.input}>
          <TextInput 
          value = {rating}
          onChangeText = {(text) => setRating(text)}
          placeholder = 'Enter Rating' /></View>

        <View style = {styles.input}>
          <TextInput
          value = {stock}
          onChangeText = {(text)=>setStock(text)}
          placeholder = 'Enter Stock' /></View>
 
 
        <View style = {styles.input}>
          <TextInput 
          value = {brand}
          onChangeText = {(text)=>setBrand(text)}
          placeholder = 'Enter Brand'/></View>

        <View style = {styles.input}>
          <TextInput 
          value = {category}
          onChangeText = {(text)=>setCategory(text)}
          placeholder = 'Enter Category' /></View>

        <View style = {styles.input}>
          <TextInput 
          value = {thumbnail}
          onChangeText = {(text)=>setThumbnail(text)}
          placeholder = 'Enter Image-link' /></View>
        </ScrollView>
        </View>
        

        <View style = {styles.buttonfieldcontainer}>
         <View style = {styles.button}>
           <Button style = {styles.button} title="Add Product" onPress={saveData} /></View>
         <View style = {styles.button}>
           <Button title="Logout" onPress={handleLOgout} /></View>
        </View>
         
         </View>
      
        
      ) : (
        <View style = {styles.innercontainer}>
        <View style = {styles.input}>
          <TextInput
            placeholder="Username" textAlign='center'
            value={username}
            onChangeText={text => setUsername(text)}
          />
        <View style = {styles.input}>
          <TextInput
            placeholder="Password" textAlign='center'
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          /></View>
        <View style = {styles.buttonfieldcontainer}>
        <View style = {styles.button}>
          <Button title="Login" onPress={handleLogin}/>
        </View>
        </View>
        </View>
        </View>
      )}
   </LinearGradient>
  );
};
 
export default Account;
 
 
 
const styles = StyleSheet.create({
container:{
    paddingTop :20,
    paddingBottom :20,
    paddingHorizontal :30,
    // borderWidth:1,
    margin :10,
    // backgroundColor:"#7d7f7c",
    height : 650
},innercontainer:{
    paddingTop :20,
    paddingBottom :20,
    paddingHorizontal :5,
    //  borderWidth:1,
    margin :10,
    // backgroundColor:"#7d7f7c",
    height : 700
},
input:{
    height:30,
    // borderWidth:2,
    // borderColor : '#000000',
    // paddingBottom:20,
    marginVertical:10,
    backgroundColor :"#ffffff",
    // borderRadius : 10,
    borderRadius:10
    
},button:{
    color:'#D3D3D3',
    height: 300,
    width: 200,
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius:20
    
},textfieldcontainer:{
    paddingTop :10,
    paddingBottom :10,
    // borderWidth:1,
    margin :5,
    // backgroundColor:"#7d7f7c",
    height : 250
},
buttonfieldcontainer:{
  height: 100,
  // borderWidth:2,
  alignItems:'center'

}
    

})