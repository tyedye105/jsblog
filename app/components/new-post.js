import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    showAddForm() {
      this.set('addNewPost', true);
    },
    savePost() {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        type: this.get('type'),
        tag: this.get('tag')
      };
      {{debugger}}
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
