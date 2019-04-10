import test from 'ava';
import x from './';

test("hexcolor", t => {
	t.true(x.test('#4286f4'));
    t.false(x.test('#FF'));
    t.true(x.test('#FFF'));
});