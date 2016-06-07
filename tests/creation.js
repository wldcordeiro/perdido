import expect from 'expect.js';
import Perdido from '../src/perdido'; // eslint-disable-line import/no-unresolved
import perdido from 'perdido'; // eslint-disable-line import/no-unresolved
import {jssSetup, jssReset} from './helpers';

afterEach(jssReset);
beforeEach(jssSetup);

/* eslint-disable max-len */
describe('Perdido Creation', () => {
  it('should export a Perdido instance', () => {
    expect(perdido).to.be.a(Perdido);
    expect(perdido).not.to.be(null);
  });

  it('create bare default Perdido', () => {
    const testPerdido = perdido.create();
    expect(testPerdido.gutter).to.be('30px');
    expect(testPerdido.flex).to.be(false);
    expect(testPerdido.cycle).to.be(-1);
    expect(testPerdido.offsetDir).to.be('row');
  });

  it('create Perdido with one override', () => {
    const testPerdido = perdido.create({gutter: '60px'});
    expect(testPerdido.gutter).to.be('60px');
    expect(testPerdido.flex).to.be(false);
    expect(testPerdido.cycle).to.be(-1);
    expect(testPerdido.offsetDir).to.be('row');
  });

  it('create Perdido with two overrides', () => {
    const testPerdido = perdido.create({gutter: '40em', flex: true});
    expect(testPerdido.gutter).to.be('40em');
    expect(testPerdido.flex).to.be(true);
    expect(testPerdido.cycle).to.be(-1);
    expect(testPerdido.offsetDir).to.be('row');
  });

  it('create Perdido with two out of order overrides', () => {
    const testPerdido = perdido.create({gutter: '40em', cycle: 6});
    expect(testPerdido.gutter).to.be('40em');
    expect(testPerdido.flex).to.be(false);
    expect(testPerdido.cycle).to.be(6);
    expect(testPerdido.offsetDir).to.be('row');
  });

  it('create Perdido with three overrides', () => {
    const testPerdido = perdido.create({gutter: '80em', flex: true, cycle: 3});
    expect(testPerdido.gutter).to.be('80em');
    expect(testPerdido.flex).to.be(true);
    expect(testPerdido.cycle).to.be(3);
    expect(testPerdido.offsetDir).to.be('row');
  });

  it('create Perdido with four overrides', () => {
    const testPerdido = perdido.create({gutter: '75rem', flex: true, cycle: 3,
      offsetDir: 'column'});
    expect(testPerdido.gutter).to.be('75rem');
    expect(testPerdido.flex).to.be(true);
    expect(testPerdido.cycle).to.be(3);
    expect(testPerdido.offsetDir).to.be('column');
  });
});

/* eslint-enable max-len */
