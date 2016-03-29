/**
 * Container component that displays each divided part from
 * UI components.
 */
import './main.scss';

const content = {
  sections: [
    {
      image: 'http://placehold.it/500x300',
      title: 'Who we are',
      text: 'Ut auctor nunc vel turpis efficitur bibendum. Proin neque quam, volutpat quis nibh ac, eleifend placerat dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      template: '<h1>This is a test</h1>'
    }
  ]
};

/* eslint indent: 0 */
const template = [
  '<div class="wrapper">',
    '<header></header>',
    '<section ng-repeat="section in $ctrl.content.sections" ',
        'image="section.image" ',
        'title="section.title" ',
        'text="section.text">',
      '<div ng-bind-html="section.template"></div>',
    '</section > ',
  '</div>'
].join('');

function controller() {
  this.content = content;
}

const mainComponent = {
  bindings: {},
  template,
  controller
};

export default mainComponent;
