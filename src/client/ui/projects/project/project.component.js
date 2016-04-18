import './project.scss';

/* eslint indent:0 */
const template = [
  '<div class="project_content">',
    '<div class="project_titles">',
      '<span class="project_title">{{$ctrl.data.title}}</span>',
      '<span class="project_title project_subtitle">{{$ctrl.data.subtitle}}</span>',
    '</div>',
    '<div class="project_content_hover">',
      '<p>{{$ctrl.data.description}}</p>',
      '<div class="project_tags">',
        '<span ng-repeat="tag in $ctrl.data.tags">{{tag}}</span>',
      '</div>',
      '<div class="project_links">',
        '<a ng-repeat="link in $ctrl.data.links" href="{{link.url}}" class="button">',
          '{{link.text}}',
        '</a>',
      '</div>',
    '</div>',
  '</div>'
].join('');

const component = {
  name: 'project',
  bindings: {
    data: '='
  },
  template
};

export default component;
