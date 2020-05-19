$(document).ready(function() {
        



var $badge1 = $('#badge1'); // cache 
    
    setInterval(function () {
        var value1 = parseInt($badge1.html());
        
        if(value1<25){
            value1++;
            $badge1.html(value1);
        };
    }, 20);


var $badge2 = $('#badge2'); // cache 

setInterval(function () {
    var value2 = parseInt($badge2.html());
    
    if(value2<125){
        value2++;
        $badge2.html(value2);
    };
}, 20);

var $badge3 = $('#badge3'); // cache 

setInterval(function () {
    var value3 = parseInt($badge3.html());
    
    if(value3<225){
        value3++;
        $badge3.html(value3);
    };
}, 20);



var $badge4 = $('#badge4'); // cache 

setInterval(function () {
    var value4 = parseInt($badge4.html());
    
    if(value4<5){
        value4++;
        $badge4.html(value4);
    };
}, 20);






});    