import { Template } from 'meteor/templating';
import { Teeth } from '/imports/teeth';
import './list.html';

Template.list.helpers({
  teeth() {
    var teeth = Teeth.find();
    console.log(teeth.count());
    return teeth;
  },
});
