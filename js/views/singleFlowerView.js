// Namespace our flowerApp
var app = app || {};

// The view for a single model view, which is one flower
app.singleFlowerView = Backbone.View.extend({

  tagName: "article",
  className: "flowerListItem",

  template: _.template( $("#flowerElement").html() ),

    render: function() {
    var flowerTemplate = this.template(this.model.toJSON());
    this.$el.html(flowerTemplate);
    return this;
  }
  
});