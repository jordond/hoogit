/**
 * Module which contains all the sections of the ui
 *
 * Contains ui submodules for more complex components
 */

import angular from 'angular';
import angularScroll from 'angular-scroll';

import core from '../core/core.module';

/** UI sub-modules */
import githubActivity from './github-activity/github-activity.module';

/** UI components */
import headerComponent from './header/header.component';
import sectionComponent from './section/section.component';
import projectsComponent from './projects/projects.component';

const dependencies = [
  /* Angular Modules */
  'ngSanitize',

  /* Cross-app modules */
  core,
  githubActivity,

  /* Third party */
  angularScroll
];

console.log(angularScroll);

const mod = angular
  .module('app.ui', dependencies)
  .component('header', headerComponent)
  .component('section', sectionComponent)
  .component('projects', projectsComponent);

export default mod.name;
