// import React, { useEffect, useState } from "react";
// import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";

// const Home = () => {
//   const [recipesData, setRecipes] = useState("");
//   const fetchData = async () => {
//     try {
//       const res = await fetch(
//         "https://hf-android-app.s3-eu-west-1.amazonaws.com/android-test/recipes.json"
//       );
//       let jsonData = await res.json();
//       console.log(jsonData);
//       setRecipes(jsonData);
//     } catch (err) {
//       throw new Error(err);
//     }
//   };



//   useEffect(() => {
//     fetchData();
//   }, []);


//   return (
//     <SafeAreaView>
//       <View style={styles.main}>
//         <ScrollView style={styles.scrollView}>
//           {recipesData.map((item) => (
//             <View>
//                 <Text>
//                     {item.id}
//                 </Text>
//             </View>
//           ))}
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

  
// export default Home

// const styles = StyleSheet.create({
//     main: {
//       flex: 1,
//       backgroundColor: "red",
//     },
//   });

{
  /*const renderItem=({item})=>{
<View style={styles.item}>
       <Text style={styles.text} >{item.name}</Text>
       <Text style={styles.text} >{item.description}</Text>
 </View>
}
 <FlatList
        style={{width:"80%",backgroundColor:"yellow"}}
        data={recipesData}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
        /> */
}