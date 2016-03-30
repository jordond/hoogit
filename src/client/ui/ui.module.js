/**
 * Module which contains all the sections of the ui
 *
 * Contains ui submodules for more complex components
 */

const SCROLL_OFFSET = 0;

import angular from 'angular';
import angularScroll from 'angular-scroll';

import register from '../util/register';

import core from '../core/core.module';

/** UI sub-modules */
import githubActivity from './github-activity/github-activity.module';

/** UI components */
import compileDirective from './compile.directive';
import headerComponent from './header/header.component';
import sectionComponent from './section/section.component';
import projectsComponent from './projects/projects.component';
import footerComponent from './footer/footer.component';

const dependencies = [
  /* Angular Modules */
  'ngSanitize',

  /* Cross-app modules */
  core,
  githubActivity,

  /* Third party */
  angularScroll
];

const moduleName = 'app.ui';
const mod = angular
  .module(moduleName, dependencies)
  .component('header', headerComponent)
  .component('section', sectionComponent)
  .component('projects', projectsComponent)
  .component('footer', footerComponent)
  .value('duScrollOffset', SCROLL_OFFSET);

register(moduleName).directive('compile', compileDirective);

export default mod.name;
