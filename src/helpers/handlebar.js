const Handlebars = require('handlebars');

Handlebars.registerHelper('gt', function(a, b, options) {
  if (a > b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

Handlebars.registerPartial('truncate', `
  {{#if (gt this.length max)}}
    {{slice this 0 max}}...
  {{else}}
    {{this}}
  {{/if}}
`);

module.exports = Handlebars;
