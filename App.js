import { StatusBar } from 'expo-status-bar';
import { Text, ScrollView, View, TextInput, Pressable } from 'react-native';
import React, {useState, useCallback} from 'react';
import GenderRadio from './components/GenderRadio';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './style/style';
import style from './style/style';

export default function App() {

  // Main values for calculation
  const [bottles,setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [weight,setWeight] = useState('');
  const [gender, setGender] = useState('');
  const genders = [
      {label: 'Male', value: 'male'},
      {label: 'Female', value: 'female'}
    ];
  const [alcoholLevel, setAlcoholLevel] = useState(0);

 
  // DROPDOWNS
  // using DropDownPicker, since this was tested on iOS.
  DropDownPicker.setListMode("SCROLLVIEW");
  
  //BOTTLES
  // state variable for opening/closing Bottles dropdown
  const [openBottles, setOpenBottles] = useState(false);

  // Opening Bottles dropdown
  const onOpenBottles = useCallback(() => {
    setOpenHours(false);
  })

  // Values for Bottles-dropdown list
  const bottleAmounts = Array();
  for (let i = 0; i <= 15; i++) {
  let amount = i;
  bottleAmounts.push({label: amount + ' bottles', value: amount}); 
  }


  // TIME
  // state variable for opening/closing Hours dropdown
  const [openHours, setOpenHours] = useState(false);

  // Opening Hours dropdown
  const onOpenHours = useCallback(() => {
    setOpenBottles(false);
  })

    // Values for Hours-dropdown list
  const hours = Array();
  for (let i = 0; i <= 24; i++) {
    let amount = i;
    hours.push({label: amount + ' hours', value: amount}); 
  }


// CALCULATING BLOOD ALCOHOL LEVEL
  function calculate() {
    const formattedWeight = weight.replace(",",".");
    // Checking that necessary information is given.
    // -> Weight must be a number, but can't be 0.
    if (isNaN(formattedWeight) || formattedWeight === '' || formattedWeight == 0 ) {
      alert('Invalid weight information.');
      return;
    } else if (gender === '') {
      alert('Choose gender before calculating.');
      return; 
    } else {
      let litres = bottles * 0.33;
      let grams = litres * 8 * 4.5;
      let burning = formattedWeight / 10;
      let gramsLeft = grams - burning * time;
      let result = 0;

      if (gender === 'male') {
        result = gramsLeft / (formattedWeight * 0.7);
      } else {
        result = gramsLeft / (formattedWeight * 0.6);
      }
      // if result is negative, it is converted to 0 
      // since alcohol level can't be negative
      if (result < 0) {
        result = 0;
      }
      setAlcoholLevel(result);
    }
  }

 
  return (
    <ScrollView style={styles.container} >      
      <StatusBar style="auto" />
      <Text style={styles.mainHeader}>Alcometer</Text>

    <Text style={styles.authorText}>Author: Enni Dahlström</Text>
    <Text style={style.authorText}>Tested on iPhone</Text>

      <Text style={styles.subHeader}>Weight</Text>
      <TextInput 
        onChangeText={value => setWeight(value)} 
        placeholder="Type your weight here..."
        keyboardType='numeric' style={styles.input} /> 


      <Text style={styles.subHeader}>Bottles</Text>
      <View style={{zIndex: 10}}>
        <DropDownPicker
          open={openBottles}
          onOpen={onOpenBottles}
          value={bottles}
          items={bottleAmounts}
          setOpen={setOpenBottles}
          setValue={setBottles}
          textStyle={{fontSize: 20}}
          style={{backgroundColor: "#f5f5f5"}}
        /> 
      </View>

      <Text style={styles.subHeader}>Time</Text>
        <View style={{zIndex: 9, marginTop:10}}>
        <DropDownPicker
          open={openHours}
          onOpen={onOpenHours}
          value={time}
          items={hours}
          setOpen={setOpenHours}
          setValue={setTime}
          textStyle={{fontSize: 20}}
          style={{backgroundColor: "#f5f5f5"}}
        />
      </View>


      <Text style={styles.subHeader}>Gender</Text>
      <GenderRadio options={genders} 
        onPress={(value) => {setGender(value)}} />


     <View style={styles.resultArea}> 
      <Text style={styles.resultText}>Your blood alcohol level is:</Text>
       <Text 
        style={[styles.result, 
        {color:(() => { 
          // Conditional text color depending on the result
              // Green : 0
              // Yellow : 0.01 - 0.49
              // Red : 5.0 or higher
          if (alcoholLevel == 0) {
            return "#00ad14";
          } else if (alcoholLevel > 0 && alcoholLevel < 0.5) {
            return "#eda702";
          } else {
            return "#ba0c00";
          }
        })()} ]}>
          {alcoholLevel.toFixed(2)}
      </Text>

      <Pressable style={styles.button}
        onPress={() => calculate()}>
        <Text style={styles.buttonText}>Calculate</Text>
      </Pressable>
      </View>
    </ScrollView>
  );
}
