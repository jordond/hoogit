/**
 * Container component that displays each divided part from
 * UI components.
 */
import './main.scss';

/* eslint indent: 0 */
const template = [
  '<div class="wrapper">',
    '<header></header>',
    '<div class="container"><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></div>',
  '</div>'
].join('');

const mainComponent = {
  bindings: {},
  template
};

export default mainComponent;
