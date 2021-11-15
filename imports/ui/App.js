import { Template } from 'meteor/templating';
 
import './App.html';
 
Template.mainContainer.helpers({
  tasks: [
    { text: 'Read Through Meteor Tutorial' },
    { text: 'Complete Meteor Tutorial' },
    { text: 'Create new template' },
  ],
});