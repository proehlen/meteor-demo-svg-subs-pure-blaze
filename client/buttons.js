import { Template } from 'meteor/templating';
import { Teeth } from '/imports/teeth';
import './buttons.html';

Template.buttons.events({
  'click #changeToBlue'() {
      Teeth.update("1", {$set: {color: "blue"}});
  },

  'click #changeToRed'() {
      Teeth.update("1", {$set: {color: "red"}});
  }

});
