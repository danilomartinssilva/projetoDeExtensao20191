import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ListComments from "./src/ListComments";
import baseApi from "./src/config/baseApi";

export default class App extends Component {
  state = {
    comments: []
  };
  componentDidMount() {
    fetch(baseApi.baseApi)
      .then(resposta => resposta.json())
      .then(json => {
        this.setState({
          comments: json
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.comments.map((registros, i) => (
            <ListComments registros={registros} key={i} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
