import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PFYTgame = () => {
 const [word, setWord] = useState('');
 const [guessedLetters, setGuessedLetters] = useState([]);
 const [money, setMoney] = useState(100);
 const [level, setLevel] = useState(1);

 // Example word for the game
 const targetWord = 'example';

 const handleGuess = (letter) => {
    if (targetWord.includes(letter)) {
      setWord(word + letter);
      setGuessedLetters([...guessedLetters, letter]);
    } else {
      setMoney(money - 10);
    }
 };

 return (
    <View style={styles.container}>
      <Text style={styles.header}>Level: {level}</Text>
      <Text style={styles.money}>Money: {money}</Text>
      <View style={styles.alphabet}>
        {Array.from('abcdefghijklmnopqrstuvwxyz').map((letter) => (
          <TouchableOpacity
            key={letter}
            onPress={() => handleGuess(letter)}
            style={styles.letterButton}
          >
            <Text style={styles.letterText}>{letter}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.word}>{word}</Text>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
 header: {
    fontSize: 24,
    marginBottom: 20,
 },
 money: {
    fontSize: 20,
    marginBottom: 20,
 },
 alphabet: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
 },
 letterButton: {
    margin: 5,
    padding: 10,
    backgroundColor: '#ccc',
 },
 letterText: {
    fontSize: 18,
 },
 word: {
    fontSize: 24,
    marginTop: 20,
 },
});

export default PFYTgame;
