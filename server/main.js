import { Meteor } from 'meteor/meteor';
import { Teeth } from '/imports/teeth';

Meteor.startup(() => {
  // code to run on server at startup
  existingTeeth = Teeth.find().count();
  console.log("Existing teeth count: " + existingTeeth);
  if (!existingTeeth){
    Teeth.insert({_id: "1", color: "red"});
    Teeth.insert({_id: "2", color: "yellow"});
    Teeth.insert({_id: "3", color: "blue"});
    Teeth.insert({_id: "4", color: "purple"});
    Teeth.insert({_id: "5", color: "green"});
  }
});
