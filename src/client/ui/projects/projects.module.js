import angular from 'angular';

import listComponent from './list/list.component';
import itemComponent from './project/project.component';

export const mod = angular
    .module('app.ui.projects', [])
    .component(listComponent.name, listComponent)
    .component(itemComponent.name, itemComponent);

export default mod.name;
