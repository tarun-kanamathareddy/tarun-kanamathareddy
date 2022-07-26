

function getcapture(camera){
    camera();
}
getcapture(function(){
    console.log('canon');
});
<------------------higher order functions---------------->
function func1(){
    return function(){
        console.log('hi');
    }
}
const fn = func1();
fn();



function test(name){
    if(test){
        return function(topic){
            console.log(`hi this is ${name} and i am here to give test of ${topic}`);
        }
    }
    else{
        return function(){
            console.log("SOrry you cant attend the test")
        }
    }
}
console.log("check")
function trigger(){

    const fn = test("rahul");
fn("art");
fn("js");

fn("ui");

fn("ux");
    // setInterval(fn,3000)
}
trigger()
test("rahul")("java");
const fn = test("rahul");
fn("art");
fn("js");

fn("ui");

fn("ux");



<!!!----------------------setTimeout()--------------------------!!!>

function tarun(){
    console.log('goodmorning team')
}
setTimeout(trigger,3000)
setInterval(trigger,3000)