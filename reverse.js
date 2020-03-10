const x=5715;
var y=x;
var h=0;
while(y!=0)
{
    h=h*10;
    h=h+(y%10);
    y=parseInt(y/10);
   // y=(y/10)-((y%10)/10) = parseInt(y/10); preforms the same function of the LHS of the eqn  ;//y=parseInt(y/10) gives only the integer portion of the result//
}
console.log("nuber is:" ,x)
console.log("reverse is:", h)