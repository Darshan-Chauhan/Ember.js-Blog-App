import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPost(newPost) {
      this.sendAction('createPost', newPost);

      newPost.set('title', null);
      newPost.set('author', null);
      newPost.set('text', null);
    }
  }
});
