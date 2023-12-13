const cons = new MyConsole('#console');
cons.log("Привет мир!");
cons.log(2);
cons.log(true);
cons.log([2,3,4]);
cons.log(function(){});
cons.log({
    key1:"Привет мир!",
    k2: 2,
    key3:{
        key1:"Привет мир!",
        k2: 2,
        k3:true,
        k4:[22,23,24],
        key5:function(){}
    },
    k4:true,
    k5:[22,23,24],
    key5:function(){}
});
