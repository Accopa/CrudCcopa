import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

const index = () => {
  const {width}=useWindowDimensions();
  return (
    
    <View style={styles.container}>
      <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={{flexGrow:0}}
      >
        <Image 
        source={require("../../assets/images/banner1.png")}
        style={{width: 350, height: 200}}
        resizeMode='contain'
        />
        <Image 
        source={require("../../assets/images/banner2.png")}
        style={{width: 350, height: 200}}
        resizeMode='contain'
        />
        <Image 
        source={require("../../assets/images/banner3.png")}
        style={{width: 350, height: 200}}
        resizeMode='contain'
        />
      </ScrollView>
      <Text>INICIO</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ad dolorem, repudiandae atque ipsam dolorum nobis quisquam officiis voluptatum aspernatur nam ea perspiciatis at reprehenderit asperiores facilis beatae maiores est.
      Libero maxime facilis cumque unde rerum. Eum placeat rem in maiores molestiae nulla, quis est! In, eius? Delectus, dignissimos nam? Adipisci sapiente atque dolores quidem impedit, labore error minima laborum?</Text>
    </View>
  )
}

export default index



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding :20,
    
  },
  
});
