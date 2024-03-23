import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  StatusBar,
} from "react-native";

const App = () => {
  const [recipesData, setRecipes] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://hf-android-app.s3-eu-west-1.amazonaws.com/android-test/recipes.json"
      );
      let jsonData = await res.json();
      setRecipes(jsonData);
      console.log(jsonData);
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <SafeAreaView style={styles.main}>
      <StatusBar />
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {recipesData.map((item) => (
            <View style={styles.item}>
              <Image style={styles.itemImage} source={{ uri: item.image }} />
              <View>
                <Text style={styles.textStyle}>
                  {item.name}
                  <Text style={styles.borderLine}>{item.itemHeadline}</Text>{" "}
                </Text>
                <Text style={styles.borderLine}>
                  Difficulty : {item.difficulty}
                </Text>
                <Text style={styles.itemDescp}>Description: {item.description}</Text>
                <View style={styles.itemValues}>
                  <Text style={styles.borderLine}>Approx values</Text>
                  <Text>calories:{item.calories}</Text>
                  <Text>carbos:{item.carbos}</Text>
                  <Text>proteins:{item.proteins}</Text>
                  <Text>fats:{item.fats}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#ffff",
  },
  itemDescp:{
    fontSize:8
  },
  itemImage: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: "black",
    alignSelf: "center",
    margin:10
  },
  itemValues: {
    alignSelf: "center",
    marginTop:15
  },
  item: {
    margin: 15,
    padding: 15,
    flexDirection: "column",
    backgroundColor: "#EEEEEE",
  },
  itemHeadline: {
    fontWeight: "normal",
  },
  borderLine:{
    borderBottomWidth: 1
  },
  textStyle: {
    fontWeight: "bold",
    color: "black",
  },
});
