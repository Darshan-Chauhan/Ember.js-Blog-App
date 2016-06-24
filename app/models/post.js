import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

var Post =  Model.extend({
  title: attr('string'),
  author: attr('string'),
  createdDate: attr('date'),
  text: attr('string')
});

Post.reopenClass({
    FIXTURES: [
        {
            id: 1,
            title: 'Learning Ember.js',
            author: 'Darshan Chauhan',
            createdDate: Date.now(),
            text: 'Ember.js is an open source JavaScript client-side framework for developing the web applications and uses the MVC(Model-View-Controller) architecture pattern. In Ember.js, route is used as model, handlebar template as view and controller manipulates the data in the model.'
        },
        {
            id: 2,
            title: 'History of Ember.js',
            author: 'Darshan Chauhan',
            createdDate: Date.now(),
            text: 'Original name of the Ember.js was SproutCore MVC framework. It was developed by Yehuda Katz and initially released on in December 2011.'
        }
    ]
});


export default Post;
