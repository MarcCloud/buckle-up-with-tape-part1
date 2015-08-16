import test from 'tape';
import doge from '../doge-clicker';


test('The Click should increase Doge counter by 1', expect=>{
    const wow = doge();

    wow.click();
    expect.equal(wow.count, 1, 'Wow I can count to 1');
    expect.end();
});

