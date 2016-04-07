/**
 * Container component that displays each divided part from
 * UI components.
 */
import './main.scss';

import imageOcean from './images/bg-ocean.jpg';
import imageSkyscraper from './images/bg-skyscraper.jpg';

const content = {
  sections: [
    {
      title: 'Under Construction',
      text: 'Hi I\'m temporary.  This website is still very much under construction.  It may change frequently, so do not be concernced if something is odd, or out of place.',
      template: '<div><p>If you wan\'t to see the bleeding edge version check out the <a href="http://staging.hoogit.ca">staging</a> page.</p></div>'
    },
    {
      image: imageOcean,
      title: 'Who I am',
      text: 'Just a guy with a keyboard and mouse.  I like to make',
    },
    // {
    //   image: imageSkyscraper,
    //   title: 'Stuff I\'ve done',
    //   text: 'Here a few of our open source projects.',
    //   template: '<projects><h1>TODO</h1></projects>'
    // },
    {
      title: 'Lastest contributions',
      text: 'Interactive view of my recent GitHub contributions.',
      template: '<div><github-activity user="jordond" commit-limit="1" enable-commit-status="true"></github-activity></div>'
    }
    // {
    //   title: 'Wanna talk?',
    //   template: '<h3>I\'m a cool contact form... TODO</h3>'
    // }
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
