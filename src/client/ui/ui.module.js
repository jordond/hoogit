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
import projectsModule from './projects/projects.module';

/** UI components */
import compileDirective from './compile.directive';
import headerComponent from './header/header.component';
import sectionComponent from './section/section.component';
import footerComponent from './footer/footer.component';

const dependencies = [
  /* Angular Modules */
  'ngSanitize',

  /* App modules */
  core,
  githubActivity,
  projectsModule,

  /* Third party */
  angularScroll
];

const moduleName = 'app.ui';
const mod = angular
  .module(moduleName, dependencies)
  .component('header', headerComponent)
  .component('section', sectionComponent)
  .component('footer', footerComponent)
  .value('duScrollOffset', SCROLL_OFFSET);

register(moduleName).directive('compile', compileDirective);

export default mod.name;
