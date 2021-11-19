import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './Task.html';

Template.task.events({
  'click .toggle-checked'(e) {
    // Set the checked property to the opposite of its current value
    Meteor.call('tasks.setIsChecked', this._id, !this.isChecked);
    if(!this.isChecked){
      const selectedItem = e.target.closest(".taskBox");
     selectedItem.style.background = 'green';
     }
  },
  'click .delete'() {
    Meteor.call('tasks.remove', this._id);
  },
});

