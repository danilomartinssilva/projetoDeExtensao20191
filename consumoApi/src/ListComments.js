import React, { Component } from "react";

import { View, Text, StyleSheet } from "react-native";

// import { Container } from './styles';

export default class ListComments extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.content}>
        <Text style={styles.title}> {this.props.registros.name}</Text>
        <Text> {this.props.registros.email}</Text>
        <Text> {this.props.registros.body}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    flexDirection: "column",
    borderWidth: 2,
    paddingLeft: 10
  },
  title: {
    fontSize: 18,
    color: "#000",
    paddingBottom: 4
  }
});
