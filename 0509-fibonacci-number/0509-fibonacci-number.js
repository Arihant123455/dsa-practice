/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {

    // first apporach.

    // if(n <= 1)
    // return n;

    // let last = fib(n - 1);
    // let slast = fib(n - 2);

    // return last + slast;


    // second apporach

    if(n <= 1)
    return n;

    let last = 1;
    let slast = 0;

    for(let i = 2; i <= n; i++)
    {
            let curr = last + slast;
            slast = last;
            last = curr;
    }
    return last;
};