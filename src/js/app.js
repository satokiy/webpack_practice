import $ from 'jquery';
import velocity from 'velocity-animate';
import { add } from './modules/math';
import { greet } from './modules/greet';

console.log('app');

const result = add(1, 2);

$('body')
  .append(result)
  .append(`<p>${greet('App')}</p>`);

velocity($('h1'), 'fadeIn', { duration: 2000, loop: true });

const a = 1;
console.log(a);
