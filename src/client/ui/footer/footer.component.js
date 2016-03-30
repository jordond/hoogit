import './footer.scss';

const content = {
  items: [
    {
      url: 'https://hoogit.ca',
      icon: 'home',
      popover: 'HoogIT'
    },
    {
      url: 'https://play.google.com/store/apps/details?id=ca.hoogit.powerhour',
      icon: 'android',
      popover: 'Play Store'
    },
    {
      url: 'https://github.com/jordond',
      icon: 'github',
      popover: 'GitHub Page'
    },
    {
      url: 'https://github.com/jordond/hoogit',
      icon: 'hashtag',
      popover: 'Site Source'
    }
  ],
  copyright: {
    text: '© HoogIT. Credits: Jordon de Hoog',
    poweredBy: ' + Powered by Angular & ES6',
    source: {
      text: 'Source',
      url: 'https://github.com/jordond/hoogit'
    }
  }
};

/* eslint indent: 0 */
const template = [
  '<div class="footer">',
    '<ul class="footer_icons">',
      '<li class="footer_icons_icon" ',
          'ng-repeat="item in $ctrl.content.items">',
        '<a class="footer_icon" href="{{item.url}}" target="_blank">',
          '<i class="fa fa-fw fa-{{item.icon}}"></i>',
        '</a>',
        '<span class="ph-popover">{{item.popover}}</span>',
      '</li>',
    '</ul>',
    '<p class="copyright">',
      '{{$ctrl.content.copyright.text}}<br/>',
      '<a href="{{$ctrl.content.copyright.source.url}}">',
        '{{$ctrl.content.copyright.source.text}}',
      '</a>',
      '{{$ctrl.content.copyright.poweredBy}}',
    '</p>',
  '</div>'
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
