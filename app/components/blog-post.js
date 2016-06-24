import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePost(post) {
      post.destroyRecord();
      post.save();
    }
  }
});
