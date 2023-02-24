import { StyleSheet, SafeAreaView, Text, Pressable, View, Image, Dimensions} from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes, Images } from "./assets/Themes";
import  SpotifyAuthButton  from "./components/SpotifyAuthButton";
import  SongList  from "./components/SongList";

const { height, width } = Dimensions.get('window');

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  console.log("token", token);
  console.log("tracks", tracks);

  let contentDisplayed = null;

  if (token) {
    contentDisplayed = (
      <View>
        <View style={styles.header}>
          <Image source={Images.spotify} style={styles.spotifyIcon}/>
          <Text style={styles.authText}>  My Top Tracks</Text>
        </View>
      <SongList tracks={tracks}/>
      </View>
    );
  } else {
    contentDisplayed =  (
      <SpotifyAuthButton authenticationFunction={getSpotifyAuth} />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  authButton: {
    backgroundColor: Themes.colors.spotify,
    padding: 12,
    borderRadius: 999999,
  },

  authText: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 27,
  },

  header: {
    height: '10%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  spotifyIcon: {
    height: width * 0.07,
    width: width * 0.07,
  },

});
