import React from 'react';
import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F1EEE5'
  },
  headerContainer: {
    flex: 0.3,
    backgroundColor: '#819C4B',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: '17%',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12
  },
  // backIcon: {
  //   margin: '5%',
  //   marginBottom: 0,
  //   color: '#F1EEE5',
  // },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F1EEE5',
    alignSelf: 'center',
  },
  surahNumber: {
    position: 'absolute',
    borderColor: '#F1EEE5',
    backgroundColor: '#819C4B',
    borderWidth: 2,
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    top: '21%',
    alignItems: 'center',
  },
  surahNumberText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F1EEE5',
  },
  contentContainer: {
    flex: 0.8,
    backgroundColor: '#F1EEE5',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  contentText: {
    fontSize: 18,
    color: '#819C4B',
    marginBottom: 8,
  },
  contentText2: {
    fontSize: 18,
    color: 'black',
    marginBottom: 8,
  },
});
