import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = props => {
  let modalContent = null;

  if (props.selectedPlace){
    modalContent = (
      <View>
      <Image source={props.selectedPlace.image} style={styles.placeImage}/>
      <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    )
  }

  return (
  <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedPlace !== null}
      animationType="slide"
  >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <TouchableOpacity>
            <Icon size={30} name="ios-trash" color="red"/>
          </TouchableOpacity>
          <Button title="Close" onPress={props.onModalClose}/>
        </View>
      </View>

  </Modal>
)};

const styles = StyleSheet.create({
  modalContainer: {
    paddingTop: 50
  },
  placeImage: {
    width: "100%",
    height: 250
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28,
    paddingTop: 20,
    paddingBottom: 10
  }
})

export default placeDetail;
