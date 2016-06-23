import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPost(newPost) {
      this.sendAction('createPost', newPost);

      this.set('title', null);
      this.set('author', null);
      this.set('text', null);
    }
  }
});
