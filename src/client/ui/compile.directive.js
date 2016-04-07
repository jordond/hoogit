
const compile = new WeakMap();

class Compile {
  /** @ngInject */
  constructor($compile) {
    compile.set(this, $compile);
  }

  link(scope, element, attrs) {
    const ensureCompileRunsOnce = scope.$watch(
      () => scope.$eval(attrs.compile),
      (value) => {
        element.html(value);
        compile.get(this)(element.contents())(scope);
        ensureCompileRunsOnce();
      }
    );
  }
}

export default Compile;
