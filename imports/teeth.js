import { Mongo } from 'meteor/mongo';

export const Teeth = new Mongo.Collection('teeth');

if (Meteor.isServer){
  Meteor.publish('teeth', ()=>{
    return Teeth.find();
  })
}
