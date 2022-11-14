const data = {
    name: 'santosh',
    age:22
}

const printData = function (hometown,village) {
    console.log(this.name + ' ' + this.age+' '+hometown+' '+village);
}

const bindFunction = printData.bind(data,'kbm');
bindFunction("sklm");



Function.prototype.mybind = function (...args) {
    let obj = this;
    let params = args.slice(1)
    return function (...args2) {
        obj.apply(args[0],[...params, ...args2])
    }
}


const printMybind = printData.mybind(data,'kbm');
printMybind('sklm')