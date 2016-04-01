import angular from 'angular';

import listComponent from './list/list.component';
import itemComponent from './project/project.component';

export const mod = angular
    .module('app.ui.projects', [])
    .component('projectsList', listComponent)
    .component('projectItem', itemComponent);

export default mod.name;
