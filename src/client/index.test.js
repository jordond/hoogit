import { expect } from 'chai';
import { isAnAngularObjectWithDependencies } from '../../test/utils';

import app from './index';

describe('Module: Index', () => {
  isAnAngularObjectWithDependencies(app);

  it('should be called app', () => {
    expect(app.name).to.equal('app');
  });
});
