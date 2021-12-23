<template>
  <div class="home pa-6">
    <h1>Attendance</h1>
    <v-row>
      <v-col>
        <v-text-field
            v-model="newName"
            label="Name"
            outlined
            clearable
          ></v-text-field>
          <ul style="list-style-type:none;">
            <li class="red--text">{{this.newNameErrorMessage}}</li>
          </ul>
      </v-col>
      <v-col>
        <v-btn v-on:click="addNewPerson()"> Add New Person</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-list-item v-for="person in peopleButton" :key="person.name">
          <v-list-item-content>
            <v-btn v-on:click="attendanceButtonClicked(person.id)">
              {{ person.name }}
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col> </v-col>
    </v-row>
  </div>
</template>

<script>
import db from '../firebase/db';
export default {
  data() {
    return {
      attendanceAdded: " ATTENDANCE ADDED",
      buttonText: "button is deselected",
      buttonSelected: false,
      newNameErrorMessage: '',
      newName: '',
      numOfButtons: 6,
      peopleButton: [
        { name: "Andrew", present: false, id: 0 },
        { name: "Sharon", present: false, id: 1 },
        { name: "Kevin T", present: false, id: 2 },
        { name: "Nick", present: false, id: 3 },
        { name: "Mark", present: false, id: 4 },
        { name: "Magdalena", present: false, id: 5 },
      ],
      rules: [
        value => !!value || 'Required.',
        value => (value || '').length <= 20 || 'Max 20 characters'
      ],
    };
  },
  methods: {
    attendanceButtonClicked: function (id) {
      if (this.peopleButton[id].present) {
        this.peopleButton[id].name = this.peopleButton[id].name.replace(this.attendanceAdded, "");
        this.peopleButton[id].present = false;
      } else {
        this.peopleButton[id].name =
          this.peopleButton[id].name + this.attendanceAdded;
        this.peopleButton[id].present = true;
      }
      console.log(this.peopleButton[id].name);
    },
    addNewPerson: function() {
      if (this.newName == '') {
        this.newNameErrorMessage = 'Name cannot be blank';
      } else {
        this.newNameErrorMessage = '';
        this.peopleButton.push({name: this.newName, present: false, id:this.numOfButtons});
        this.numOfButtons++;
        this.newName = '';
      }
    }
  },
  name: "Attendance",
};
</script>
