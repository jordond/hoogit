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
      template: '<projects><h1>TODO</h1></projects>'
    },
    {
      title: 'Lastest contributions',
      text: 'Interactive view of my recent GitHub contributions.',
      template: '<div><github-activity user="jordond" commit-limit="1" enable-commit-status="true"></github-activity></div>'
    },
    {
      title: 'Wanna talk?',
      template: '<h3>I\'m a cool contact form... TODO</h3>'
    }
  ]
};

/* eslint indent: 0 */
const template = [
  '<div class="wrapper" id="scroll-container">',
    '<div du-scroll-container="scroll-container">',
      '<header id="top" scroll-to="section-0"></header>',
      '<section ng-repeat="section in $ctrl.content.sections" id="section-{{$index}}" ',
               'index="$index" last="$last" ',
               'image="section.image" ',
               'title="section.title" ',
               'text="section.text">',
        '<div compile="section.template"></div>',
      '</section>',
      '<footer></footer>',
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
