import { FlatList, Text, StyleSheet, View, SafeAreaView, Image, Dimensions, ScrollView} from "react-native"
import { Themes, Images } from "../assets/Themes";
import { millisToMinutesAndSeconds } from "../utils";

const { height, width } = Dimensions.get('window');

const SongList = ({tracks}) => {
  return <FlatList

  data={tracks}

  renderItem={({item}) => {

    console.log(item)
    const songLength = (item.duration)

    return (
      <View style={styles.songContainer}>

      <View>
        <Image source={{uri: item.imageUrl}} style={styles.albumContainer}/>
      </View>

      <View>
        <Text style = {styles.text} numberOfLines = {1}>
          {item.songTitle}
        </Text>
        <Text style={styles.artistName} numberOfLines={1}>
          {item.songArtists[0].name}
        </Text>
      </View>

      <View>
        <Text style = {styles.text} numberOfLines = {1}>
          {item.albumName}
        </Text>
      </View>

      <View>
        <Text style = {styles.text}>
          {millisToMinutesAndSeconds(songLength)}
        </Text>
      </View>


      </View>

    );
  }}


  />;
};

export default SongList;

const styles = StyleSheet.create({
  songContainer: {
    backgroundColor: Themes.colors.background,
    flexDirection: "row",
    justifyContent: 'left',
    alignItems: 'center',
    padding: 10,
    width: "100%",
  },

  albumContainer: {
    height: width * 0.15,
    width: width * 0.15,
  },

  text: {
    color: Themes.colors.white,
    marginLeft: 30,
    width: 100,
  },

  artistName: {
    color: Themes.colors.gray,
    marginLeft: 30,
    width: 100,
  }
}
)
