/**
 * Container component that displays each divided part from
 * UI components.
 */
import './main.scss';

const content = {
  sections: [
    {
      image: 'http://placehold.it/500x300',
      title: 'Who I am',
      text: 'Ut auctor nunc vel turpis efficitur bibendum. Proin neque quam, volutpat quis nibh ac, eleifend placerat dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    },
    {
      image: 'http://placehold.it/500x300',
      title: 'Stuff I\'ve done',
      text: 'Here a few of our open source projects.',
      template: '<projects></projects>'
    },
    {
      image: 'http://placehold.it/500x300',
      title: 'Lastest contributions',
      text: 'Interactive view of my recent GitHub contributions.',
      template: '<div><github-activity user="jordond" limit="4" enable-commit-status="true"></github-activity></div>'
    }
  ]
};

/* eslint indent: 0 */
const template = [
  '<div class="wrapper" id="scroll-container">',
    '<div du-scroll-container="scroll-container">',
      '<header scroll-to="section-0"></header>',
    '</div>',
    '<div du-scroll-container="scroll-container">',
      '<section ng-repeat="section in $ctrl.content.sections" id="section-{{$index}}" ',
          'index="$index" last="$last" ',
          'image="section.image" ',
          'title="section.title" ',
          'template="section.template" ',
          'text="section.text">',
      '</section>',
    '</div>',
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
