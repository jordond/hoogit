import './list.scss';

import content from '../projects.js';

/* eslint indent:0 */
const template = [

].join('');

function controller() {
  this.content = content;
}

const component = {
  bindings: {},
  template,
  controller
};

export default component;
