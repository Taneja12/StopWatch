var x=y=z=0
// x -> msec    y -> sec    z -> minutes
var myInterval
var state = false
function start_timer()
{
    x=y=z=0
    state = false
    myInterval = setInterval(myTimer,10)
    //disable start button
    document.getElementById('b1').disabled = true
}

function myTimer()
{
    x=x+1
    if(x===100)
    {
        y=y+1
        x=0
        if(y===60)
        {
            z=z+1
            y=0
            if(z===60)
            {
                x=y=z=0
            }
        }
    }
    document.getElementById('result').innerHTML = 
    '<h1>' + String(z).padStart(2,'0') + ':' + String(y).padStart(2,'0') +':' + String(x).padStart(2,'0') + '</h1>'
}


function reset_timer()
{
    clearInterval(myInterval)
    x=y=z=0
    state = false
    document.getElementById('result').innerHTML = 
    '<h1>' + String(z).padStart(2,'0') + ':' + String(y).padStart(2,'0') +':' + String(x).padStart(2,'0') + '</h1>'
    document.getElementById('b1').disabled = false
}

function pr_timer()
{
    state = !state
    if(state === true){
        //stop the timer
        clearInterval(myInterval)
    }
    else{
        myInterval = setInterval(myTimer,10)
    }
}