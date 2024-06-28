const mondayWork= function(activity= 'go to the office'){ 
   return`This Monday, I will ${activity}.`
}
mondayWork('work from home')

function saturdayFun(activity = "roller-skate"){
return `This Saturday, I want to ${activity}!`;
}


saturdayFun('bathe my dog')

function wrapAdjective(string="*"){
    return function (brace="special"){
        return `You are ${string}${brace}${string}!`
    }
}
wrapAdjective()()