import './list.scss';

import content from '../projects.js';

/* eslint indent:0 */
const template = [
  '<ul class="project_list">',
    '<li class="project_item" ng-repeat="item in $ctrl.content.items">',
      '<project data="item"></project>',
    '</li>',
  '</ul>'
].join('');

function controller() {
  this.content = content;
}

const component = {
  name: 'projects',
  bindings: {},
  template,
  controller
};

export default component;
