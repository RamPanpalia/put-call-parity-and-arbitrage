
function check_arbitrage(){
    var S0=parseFloat(document.querySelector('.S0').value)
    var K=parseFloat(document.querySelector('.strike-price').value)
    var t=parseFloat(document.querySelector('.time-period').value)
    var c=parseFloat(document.querySelector('.call-option-price').value)
    var p=parseFloat(document.querySelector('.put-option-price').value)
    var r=parseFloat(document.querySelector('.rate').value)
    var D=parseFloat(document.querySelector('.dividend').value)
    var dT=parseFloat(document.querySelector('.dividend-t').value)

    var portA = parseFloat(c) + parseFloat(K*Math.pow(Math.E,-1*(r*t)/1200)) + parseFloat(D*Math.pow(Math.E,-1*(dT*r)/1200))
    var portB = parseFloat(p) + parseFloat(S0)

    document.querySelector('.tem').innerHTML=t
    if(portA < portB){
        // alert('buy call,Sell put')
        document.querySelector('.call-action').innerHTML="Buy"
        document.querySelector('.call-value').innerHTML="for "+c

        document.querySelector('.put-action').innerHTML="Sell"
        document.querySelector('.put-value').innerHTML=" to realize "+p

        document.querySelector('.stock-action').innerHTML="Sell"
        document.querySelector('.stock-value').innerHTML="to realize "+S0
        //pay dividend
        document.querySelector('.dividend-action').innerHTML="Invest "+D*Math.pow(Math.E,-1*r*dT/1200)+" so that you get "+D+" after "+dT+" months and the pay the dividend."

        document.querySelector('.borrow-invest-action').innerHTML="Invest "
        document.querySelector('.b-i-value').innerHTML=(S0+p-c-D*Math.pow(Math.E,-1*r*dT/1200))+" for "+t+ " months."
        
        //case-1
        document.querySelector('.case-1 .line-1').innerHTML="Recieve "+ (S0+p-c-D*Math.pow(Math.E,-1*r*dT/1200))*Math.pow(Math.E,r*t/1200) +" from investment"
        document.querySelector('.case-1 .line-2').innerHTML="Exercise call to buy stock for "+K
        document.querySelector('.case-1 .line-3').innerHTML="Profit: "+ ((S0+p-c-D*Math.pow(Math.E,-1*r*dT/1200))*Math.pow(Math.E,r*t/1200) - K)
        //case-2
        document.querySelector('.case-2 .line-1').innerHTML="Recieve "+ (S0+p-c-D*Math.pow(Math.E,-1*r*dT/1200))*Math.pow(Math.E,r*t/1200) +" from investment"
        document.querySelector('.case-2 .line-2').innerHTML="Put Exercised: buy stock for "+K
        document.querySelector('.case-2 .line-3').innerHTML="Profit: "+ ((S0+p-c-D*Math.pow(Math.E,-1*r*dT/1200))*Math.pow(Math.E,r*t/1200) - K)
    }
    else{
        // alert('sell call,buy put')
        document.querySelector('.call-action').innerHTML="Sell"
        document.querySelector('.call-value').innerHTML="to realize "+c

        document.querySelector('.put-action').innerHTML="Buy"
        document.querySelector('.put-value').innerHTML=" for "+p

        document.querySelector('.stock-action').innerHTML="Buy"
        document.querySelector('.stock-value').innerHTML="for "+S0
        //get dividend
        //invest the dividend after dT months for t-dT to
        document.querySelector('.dividend-action').innerHTML="Invest the dividend after "+dT+" months for "+(t-dT)+" months to get "+D*Math.pow(Math.E,r*(t-dT)/1200)

        document.querySelector('.borrow-invest-action').innerHTML="Borrow "
        document.querySelector('.b-i-value').innerHTML=(S0+p-c)+" for "+t+ " months."

        //case-1
        document.querySelector('.case-1 .line-1').innerHTML="Call exercised: Sell stock for "+ K
        document.querySelector('.case-1 .line-2').innerHTML="Use "+ (S0+p-c)*Math.pow(Math.E,r*t/1200) +" to repay loan"
        document.querySelector('.case-1 .line-3').innerHTML="Profit: "+ (K - (S0+p-c)*Math.pow(Math.E,r*t/1200) +D*Math.pow(Math.E,r*(t-dT)/1200) )
        //case-2
        document.querySelector('.case-2 .line-1').innerHTML="Exercise put option: Sell stock for "+ K
        document.querySelector('.case-2 .line-2').innerHTML="Use "+ (S0+p-c)*Math.pow(Math.E,r*t/1200) +" to repay loan"
        document.querySelector('.case-2 .line-3').innerHTML="Profit: "+ (K - (S0+p-c)*Math.pow(Math.E,r*t/1200) +D*Math.pow(Math.E,r*(t-dT)/1200) )
    }

    document.querySelector('.abc').innerHTML="PortA value: "+portA+" PortB value: "+portB
}