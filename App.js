import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  TextInput,
  View,
  Image,
  Text,
  ScrollView,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";

export default function App() {
  const [starWarsData, setStarWarsData] = useState();

  const [searchText, setSearchText] = useState("");

  const [stateSide, setStateSide] = useState(true);

  const changeSide = () => {
    setStateSide(!stateSide);
  };

  const imageLogo = {
    uri: "https://assets.pipedream.net/s.v0/app_mE7hlb/logo/orig",
  };

  const imageBack = {
    uri: "https://wallpapercave.com/wp/wp6048774.jpg",
  };

  const imageBack2 = {
    uri: "https://external-preview.redd.it/LRzHKjo2EArpIFgdaf0K7kUXk56KEnPDtTD4qhuZAho.png?format=pjpg&auto=webp&s=f8ab7c3851d8d5402ce99da5226cab834fd559ca",
  };

  const imageBackDark = {
    uri: "https://bloody-disgusting.com/wp-content/uploads/2017/04/darth.jpeg",
  };

  function search() {
    if (searchText) {
      fetch(`https://swapi.dev/api/people/${searchText}`)
        .then((response) =>
          response.json().then((data) => setStarWarsData(data))
        )
        .catch((error) => console.error(error));
    }
  }

  function searchRandom() {
    var number = Math.floor(Math.random() * 82) + 1;
    fetch(`https://swapi.dev/api/people/${number}`)
      .then((response) => response.json().then((data) => setStarWarsData(data)))
      .catch((error) => console.error(error));
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={stateSide ? imageBack : imageBackDark}
        resizeMode="cover"
        style={styles.imageBack}
      >
        <TouchableOpacity
          style={styles.buttonImage}
          onPress={() => setStarWarsData(null)}
        >
          <Image
            style={starWarsData ? styles.imageLogo2 : styles.imageLogo}
            source={imageLogo}
          />
        </TouchableOpacity>

        <View style={styles.search}>
          <Text style={stateSide ? styles.baseText : styles.baseTextDark}>
            {stateSide ? "Una API de una galaxia muy, muy lejana.." : "'"}
          </Text>
          <TextInput
            style={stateSide ? styles.input : styles.inputDark}
            placeholder="Elige un número del 1 al 83."
            onChangeText={(text) => setSearchText(text)}
          />

          <View style={styles.fixToText}>
            <View style={styles.button}>
              <Button title="Buscar" onPress={() => search()} color="#5983FC" />
            </View>
            <View style={styles.button}>
              <Button
                title="Aleatorio"
                onPress={() => searchRandom()}
                color="#3E60C1"
              />
            </View>
          </View>
          <View style={styles.largeButton}>
            <Button
              title={stateSide ? "DARK SIDE" : "LIGTH SIDE"}
              onPress={() => changeSide()}
              color="#293556"
            />
          </View>

          {starWarsData && (
            <ScrollView style={styles.scrollView}>
              <Text style={styles.text}>Nombre: {starWarsData.name}</Text>
              <Text style={styles.text}>Peso: {starWarsData.height}</Text>
              <Text style={styles.text}>
                Color de pelo: {starWarsData.hair_color}
              </Text>
              <Text style={styles.text}>
                Color de piel: {starWarsData.skin_color}
              </Text>
              <Text style={styles.text}>
                Color de ojos: {starWarsData.eye_color}
              </Text>
              <Text style={styles.text}>
                Año de nacimiento: {starWarsData.birth_year}
              </Text>
              <Text style={styles.text}>Género: {starWarsData.gender}</Text>
              <Text style={styles.text}></Text>
            </ScrollView>
          )}
        </View>
      </ImageBackground>
      <StatusBar style="dark" />
    </View>
  );
}

/*
export default class App extends Component {
  state = {
    response: [],
    condition: null,
  };

  handlerText(text) {
    var textField = text;
    this.setState({ value: textField });
  }

  handlerButton = () => {
    var people = this.state.value;
    axios.get("https://swapi.dev/api/people/" + people).then((response) => {
      console.log(response.data);
      this.setState({
        response: response.data,
        condition: true,
      });
    });
  };

  render() {
    

    if (this.state.condition !== true) {
      
    } else {
      return (
        <View style={styles.container}>
          <ImageBackground
            source={imageBack2}
            resizeMode="cover"
            style={styles.imageBack}
          >
            <TouchableOpacity
              style={styles.buttonImage}
              //onPress={this.state.condition == true}
            >
              <Image style={styles.imageLogo2} source={imageLogo} />
            </TouchableOpacity>

            <View style={styles.search}>
              <Text style={styles.baseText}>
                Una API de una galaxia muy, muy lejana...
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Elige un número del 1 al 83."
                onChangeText={this.handlerText.bind(this)}
              />

              <View style={styles.fixToText}>
                <View style={styles.button}>
                  <Button
                    title="Buscar"
                    onPress={this.handlerButton.bind(this)}
                    color="#5983FC"
                  />
                </View>
                <View style={styles.button}>
                  <Button
                    title="Aleatorio"
                    onPress={this.randomCharacter.bind(this)}
                    color="#3E60C1"
                  />
                </View>
              </View>
              <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>
                  Nombre: {this.state.response.name}
                </Text>
                <Text style={styles.text}>
                  Peso: {this.state.response.height}
                </Text>
                <Text style={styles.text}>
                  Color de pelo: {this.state.response.hair_color}
                </Text>
                <Text style={styles.text}>
                  Color de piel: {this.state.response.skin_color}
                </Text>
                <Text style={styles.text}>
                  Color de ojos: {this.state.response.eye_color}
                </Text>
                <Text style={styles.text}>
                  Año de nacimiento: {this.state.response.birth_year}
                </Text>
                <Text style={styles.text}>
                  Género: {this.state.response.gender}
                </Text>
                <Text style={styles.text}></Text>
              </ScrollView>
              <StatusBar style="dark" />
            </View>
          </ImageBackground>
        </View>
      );
    }
  }
}*/
