import { StyleSheet, Pressable, Text, Image, Dimensions} from "react-native";
import { Themes, Images } from "../assets/Themes";

const { height, width } = Dimensions.get('window');


const SpotifyAuthButton = ( {authenticationFunction} ) => {
  return (
    <Pressable style={styles.authButton} onPress={authenticationFunction}>
      <Image source={Images.spotify} style={styles.spotifyIcon}/>
      <Text style={styles.authText}>   CONNECT WITH SPOTIFY</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  authButton: {
    backgroundColor: Themes.colors.spotify,
    padding: 12,
    borderRadius: 999999,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  authText: {
    color: "white",
    fontWeight: 'bold',
  },

  spotifyIcon: {
    height: width * 0.05,
    width: width * 0.05,
  },

});

export default SpotifyAuthButton;
