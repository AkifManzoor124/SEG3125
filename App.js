import React, { useState } from "react";
import { Text, View, Button, StyleSheet, Modal, Dimensions, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Accordian from './Accordian'
import {IMLocalized, init} from './locales/i18n';

const DATA = [
  {
    title: "Layden Jar",
    key: "1231d"
  },
  {
    title: "Piezo Crystal",
    key: "1sa231d"
  },
  {
    title: "Electric Glove",
    key: "1231121d"
  },
  {
    title: "React Native App",
    key: "1231321231d"
  },
  {
    title: "OpenCV Image Recognition",
    key: "16785231d"
  },    
  {
    title: "Personal Website",
    key: "12731d"
  },   
];

const QuestionsAndAnswers = [
  {
    title: "Question 1",
    data: "Answer 1",
    key: "1"
  },
  {
    title: "Question 2",
    data: "Answer 2",
    key: "121"
  },
  {
    title: "Question 3",
    data: "Answer 3",
    key: "1223121"
  },
  {
    title: "Question 4",
    data: "Answer 4",
    key: "123211",
    key: "12211"
  },
  {
    title: "Question 5",
    data: "Answer 5",
    key: "121412"
  }, 
  {
    title: "Question 6",
    data: "Answer 6",
    key: "13621"
  } 
];

function UpcomingScreen() {
  const [registerModalVisible, setregisterModalVisible] = useState(false);
  const [registeredModalVisible, setregisteredModalVisible] = useState(false);
  return (
    <View style={styles.screen}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={registerModalVisible}
      >
        <View style={styles.screen}>
          <View style={styles.modalView}>
            <View style={styles.userInput}>
              <Text>Name:</Text>
              <TextInput blurOnSubmit={true}  style={{borderWidth: 1}} ></TextInput>
            </View>
            <View style={styles.userInput}>
              <Text>Email:</Text>
              <TextInput style={{borderWidth: 1}} ></TextInput>
            </View>            
            <View style={styles.userInput}>
              <Text>Student Number:</Text>
              <TextInput style={{borderWidth: 1}} ></TextInput>
            </View>
            <View style={styles.userInput}>
              <Text>Faculty:</Text>
              <TextInput style={{borderWidth: 1}} ></TextInput>
            </View>
            <View style={styles.userInput}>
              <Text>Year of Study:</Text>
              <TextInput style={{borderWidth: 1}} ></TextInput>
            </View>            
            <View style={styles.modalButtonsView}>
              <Button color="lightblue" title="Send" onPress={() => {setregisterModalVisible(!registerModalVisible), setregisteredModalVisible(!registeredModalVisible)}}></Button>
              <Button color="lightblue" title="Cancel" onPress={() => {setregisterModalVisible(!registerModalVisible)}}></Button>              
            </View>
          </View>
        </View> 
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={registeredModalVisible}
      >
        <View style={styles.screen}>
          <View style={styles.modalView}>
            <Text>You've been Registered!</Text>
            <Text>Workshop Title</Text>
            <Text>Please check your email for Workshop details</Text>
            <Button title="Close" onPress={() => {setregisteredModalVisible(!registeredModalVisible)}}></Button>
          </View>
        </View> 
      </Modal>    
      <FlatList
        data={DATA}
        renderItem={
          ({ item }) => {
            return (
              <TouchableOpacity style={styles.item} onPress={() => {setregisterModalVisible(true)}}>
                <Text style={styles.itemText}>{item.title}</Text>
              </TouchableOpacity>
            );
          }
        }
      >
      </FlatList>
    </View>
  );
}

function PreviousScreen() {
  return (
    <View style={styles.screen}>
    <FlatList
            data={DATA}
            renderItem={
              ({ item }) => {
                return (
                  <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>{item.title}</Text>
                  </TouchableOpacity>
                );
              }
            }
          >
    </FlatList>
    </View>
  );
}

function AboutUsScreen() {
  return (
    <View style={styles.screen}>
      <Text style={{margin:15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu felis, condimentum at dictum et, elementum eget urna. Sed maximus velit dui, dapibus vehicula urna egestas ut. Nunc eget ex nulla. Nam ornare nibh et dolor pellentesque, eu venenatis libero pellentesque. Nam feugiat non metus vitae viverra. Mauris nisl tortor, semper non enim at, hendrerit eleifend urna. Etiam blandit nibh neque. Donec malesuada erat ut diam porttitor mattis. Mauris rutrum nisi ac nibh aliquam, a ullamcorper ante molestie. Aenean egestas sem lacus, nec aliquet nibh euismod id. Integer eu urna sagittis, rhoncus nisl elementum, consequat velit. Nullam vestibulum scelerisque lobortis.</Text>

    </View>
  );
}

function ContactUsScreen() {
  return (
    <View style={styles.screen}>
      <View>
        <Text>Name:</Text>
        <TextInput style={{borderWidth: 1, width:200}} ></TextInput>
      </View>
      <View>
        <Text>Subject:</Text>
        <TextInput style={{borderWidth: 1, width:200}} ></TextInput>
      </View>
      <View>
        <Text>Email:</Text>
        <TextInput style={{borderWidth: 1, width:200}} ></TextInput>
      </View>
      <View style={{flexDirection:"row", justifyContent:'space-evenly', width: 300, margin: 5}}>
        <Button color="lightblue" title="Send"></Button>
        <Button color="lightblue" title="Cancel"></Button>
      </View>
    </View>
  );
}

function renderAccordians() {
  const items = [];
  for (item of QuestionsAndAnswers) {
      items.push(
          <Accordian 
              title = {item.title}
              data = {item.data}
          />
      );
  }
  return items;
}

function FAQScreen() {
  return (
    <ScrollView style={styles.container}>
      { renderAccordians() }
    </ScrollView>
  );
}

function SettingsScreen() {
  return (
    <Button color="lightblue" title="Francais"></Button>
  );
}


const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  item:{
    backgroundColor: 'lightblue',
    justifyContent:'center',
    alignItems:'center',
    margin:2,
    height:Dimensions.get('window').width/3,
    width: Dimensions.get('window').width,
    borderRadius:15
  },
  itemText:{
    fontSize: 20
  },
  modalView:{
    backgroundColor:"white",
    borderRadius:20,
    padding: 25,
    width: 315,
  },
  modalButtonsView:{
    flexDirection: "row",
    justifyContent:'space-around',
    margin:5
  },
  Button:{
    color:"lightblue"
  }

});

const Stack = createStackNavigator();

function Upcoming(){
  return(
      <Stack.Navigator>
        <Stack.Screen name="Upcoming Workshops" component={UpcomingScreen} />
      </Stack.Navigator>
  )
}

function Previous(){
  return(
      <Stack.Navigator>
        <Stack.Screen name="Previous Workshops" component={PreviousScreen} />
      </Stack.Navigator>
  )
}

function AboutUs(){
  return(
      <Stack.Navigator>
        <Stack.Screen name="About Us" component={AboutUsScreen} />
      </Stack.Navigator>
  )
}

function ContactUs(){
  return(
      <Stack.Navigator>
        <Stack.Screen name="Contact Us" component={ContactUsScreen} />
      </Stack.Navigator>
  )
}

function FAQ(){
  return(
      <Stack.Navigator>
        <Stack.Screen name="Frequently Asked Questions" component={FAQScreen} />
      </Stack.Navigator>
  )
}

function Settings(){
  return(
      <Stack.Navigator>
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Upcoming') {
              iconName = 'ios-calendar';
            } else if (route.name === 'Previous') {
              iconName = focused ? 'ios-arrow-dropright-circle' : 'ios-arrow-dropright';
            } else if (route.name === 'About Us') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Contact Us') {
              iconName = 'ios-contact';
            } else if (route.name === 'FAQ') {
              iconName = focused ? 'ios-help-circle' : 'ios-help-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings';
            } 


            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'lightblue',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 12
          }
        }}
      >
        <Tab.Screen name="Upcoming" component={Upcoming} />
        <Tab.Screen name="Previous" component={Previous} />
        <Tab.Screen name="About Us" component={AboutUs} />
        <Tab.Screen name="Contact Us" component={ContactUs} />
        <Tab.Screen name="FAQ" component={FAQ} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}