import { StatusBar } from "expo-status-bar";
import axios from "axios";
import React, { Component, useState } from "react";
import {
  TextInput,
  View,
  Image,
  Text,
  ScrollView,
  ImageBackground,
  Button,
  Alert,
} from "react-native";
import { styles } from "./styles";

export default class App extends Component {
  state = {
    response: [],
    condition: null,
    //value: ''
  };

  handlerText(text) {
    var textField = text;
    this.setState({ value: textField });
    //console.log("Escribieron " + textField);
  }

  handlerButton = () => {
    var people = this.state.value;
    axios.get("https://swapi.dev/api/people/" + people).then((response) => {
      console.log(response.data);
      this.setState({
        response: response.data,
        condition: true,
      });
      //console.log(this.state.response);
    });
  };

  randomCharacter = () => {
    var people = Math.floor(Math.random() * 82) + 1;
    axios.get("https://swapi.dev/api/people/" + people).then((response) => {
      console.log(response.data);
      this.setState({
        response: response.data,
        condition: true,
      });
      //console.log(this.state.response);
    });
  };

  render() {
    const imageLogo = {
      //uri: "https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Emblema.png",
      uri: "https://assets.pipedream.net/s.v0/app_mE7hlb/logo/orig",
    };

    const imageBack = {
      uri: "https://wallpapercave.com/wp/wp6048774.jpg",
    };

    const imageBack2 = {
      uri: "https://external-preview.redd.it/LRzHKjo2EArpIFgdaf0K7kUXk56KEnPDtTD4qhuZAho.png?format=pjpg&auto=webp&s=f8ab7c3851d8d5402ce99da5226cab834fd559ca",
    };

    if (this.state.condition !== true) {
      return (
        <View style={styles.container}>
          <ImageBackground
            source={imageBack}
            resizeMode="cover"
            style={styles.imageBack}
          >
            <Image style={styles.imageLogo} source={imageLogo} />

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
              <StatusBar style="auto" />
            </View>
          </ImageBackground>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ImageBackground
            source={imageBack2}
            resizeMode="cover"
            style={styles.imageBack}
          >
            <Image style={styles.imageLogo2} source={imageLogo} />

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
              <StatusBar style="auto" />
            </View>
          </ImageBackground>
        </View>
      );
    }
  }
}
