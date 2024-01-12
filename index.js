// function iInvokeThings (thing) {
//     //return thing();
//     console.log(thing());
// }
// iInvokeThings(function () { return 'Hello, ' + 'world!'; });

function receivesAFunction(callback) {
    return callback();
}
function callbackFunction(spy) {
    return (spy);
}
function returnsANamedFunction() {
    return function namedFunction() {

    };
}
function returnsAnAnonymousFunction() {
    return function() {

    };
}



