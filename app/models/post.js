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
            title: 'First Blog Post',
            author: 'Darshan Chauhan',
            createdDate: Date.now(),
            text: 'Hi'
        },
        {
            id: 2,
            title: 'Second Blog Post',
            author: 'Darshan Chauhan',
            createdDate: Date.now(),
            text: 'Hello'
        }
    ]
});


export default Post;
