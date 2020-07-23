

//data members
var stack = [25]; //stack to store the values
stack[0] = 0;
var ButtonArray = new Array(5);       // array to store values on buttons
    for(var i=0; i<5; i++)
        ButtonArray[i] = new Array(5);
var x; //emergency variabele

var Clicked = new Audio(); //avriable for button clicked sound
Clicked.src = "button-09.mp3" //source for the audio file

var win  = new Audio();
win.src = "win.mp3";

var lose  = new Audio();
lose.src = "lose.mp3";

var tie  = new Audio();
tie.src = "tie.mp3";

var vibration =  new Audio();
vibration.src = "vibration.mp3"


var EqualityRCount = 0;
var EqualityCCount = 0;
var EqualityPDCount = 0;
var EqualityDCount = 0;
var BingoCount = 0;


//methods(functions)

//function to give random numbers to the buttons
function giveRandom()
{
    
    x = Math.floor(Math.random()*25)+1;
    for(var i=0; i<stack.length; i++)
    {
        if(x == stack[i])
        {
            return giveRandom();
        }

    }
    stack.push(x);
    return x;
}//end of the function giveRandom

//function to set all the values to the Button array

function StoreValues()
{
    var y=1;
    for(var i=0; i<5; i++)
    {
        for(var j=0; j<5; j++)
        {
            ButtonArray[i][j] = stack[y];
            console.log(ButtonArray[i][j]);
            y++;
        }
        console.log();
    }
}//end of the function storeValues

//fuunction to label each the button with a random number


function LabelingGameBoard()
{

   
    document.getElementById('score').innerHTML = '0';
    document.getElementById("lose").style .display="none";
    document.getElementById("tie").style .display="none";
    document.getElementById("win").style .display="none";
    stack = [];
    stack[0] = 0;
    BingoCount = 0;
    

    document.getElementById('B').innerHTML = "";
    document.getElementById('I').innerHTML = "";
    document.getElementById('N').innerHTML = "";    
    document.getElementById('G').innerHTML = "";
    document.getElementById('O').innerHTML = "";


    //backround color 

    document.getElementById("B1").style.backgroundColor = '#68918a';
    document.getElementById("B2").style.backgroundColor = '#68918a';
    document.getElementById("B3").style.backgroundColor = '#68918a';
    document.getElementById("B4").style.backgroundColor = '#68918a';
    document.getElementById("B5").style.backgroundColor = '#68918a';
    document.getElementById("B6").style.backgroundColor = '#68918a';
    document.getElementById("B7").style.backgroundColor = '#68918a';
    document.getElementById("B8").style.backgroundColor = '#68918a';
    document.getElementById("B9").style.backgroundColor = '#68918a';
    document.getElementById("B10").style.backgroundColor = '#68918a';
    document.getElementById("B11").style.backgroundColor = '#68918a';
    document.getElementById("B12").style.backgroundColor = '#68918a';
    document.getElementById("B13").style.backgroundColor = '#68918a';
    document.getElementById("B14").style.backgroundColor = '#68918a';
    document.getElementById("B15").style.backgroundColor = '#68918a';
    document.getElementById("B16").style.backgroundColor = '#68918a';
    document.getElementById("B17").style.backgroundColor = '#68918a';
    document.getElementById("B18").style.backgroundColor = '#68918a';
    document.getElementById("B19").style.backgroundColor = '#68918a';
    document.getElementById("B20").style.backgroundColor = '#68918a';
    document.getElementById("B21").style.backgroundColor = '#68918a';
    document.getElementById("B22").style.backgroundColor = '#68918a';
    document.getElementById("B23").style.backgroundColor = '#68918a';
    document.getElementById("B24").style.backgroundColor = '#68918a';
    document.getElementById("B25").style.backgroundColor = '#68918a';
    
    //here

    //color
    document.getElementById("B1").style.color = '#ffffff';
    document.getElementById("B2").style.color = '#ffffff';
    document.getElementById("B3").style.color = '#ffffff';
    document.getElementById("B4").style.color = '#ffffff';
    document.getElementById("B5").style.color = '#ffffff';
    document.getElementById("B6").style.color = '#ffffff';
    document.getElementById("B7").style.color = '#ffffff';
    document.getElementById("B8").style.color = '#ffffff';
    document.getElementById("B9").style.color = '#ffffff';
    document.getElementById("B10").style.color = '#ffffff';
    document.getElementById("B11").style.color = '#ffffff';
    document.getElementById("B12").style.color = '#ffffff';
    document.getElementById("B13").style.color = '#ffffff';
    document.getElementById("B14").style.color = '#ffffff';
    document.getElementById("B15").style.color = '#ffffff';
    document.getElementById("B16").style.color = '#ffffff';
    document.getElementById("B17").style.color = '#ffffff';
    document.getElementById("B18").style.color = '#ffffff';
    document.getElementById("B19").style.color = '#ffffff';
    document.getElementById("B20").style.color = '#ffffff';
    document.getElementById("B21").style.color = '#ffffff';
    document.getElementById("B22").style.color = '#ffffff';
    document.getElementById("B23").style.color = '#ffffff';
    document.getElementById("B24").style.color = '#ffffff';
    document.getElementById("B25").style.color = '#ffffff';

    document.getElementById("B1").innerHTML = giveRandom();
    document.getElementById("B2").innerHTML = giveRandom();
    document.getElementById("B3").innerHTML = giveRandom();
    document.getElementById("B4").innerHTML = giveRandom();
    document.getElementById("B5").innerHTML = giveRandom();
    document.getElementById("B6").innerHTML = giveRandom();
    document.getElementById("B7").innerHTML = giveRandom();
    document.getElementById("B8").innerHTML = giveRandom();
    document.getElementById("B9").innerHTML = giveRandom();
    document.getElementById("B10").innerHTML = giveRandom();
    document.getElementById("B11").innerHTML = giveRandom();
    document.getElementById("B12").innerHTML = giveRandom();
    document.getElementById("B13").innerHTML = giveRandom();
    document.getElementById("B14").innerHTML = giveRandom();
    document.getElementById("B15").innerHTML = giveRandom();
    document.getElementById("B16").innerHTML = giveRandom();
    document.getElementById("B17").innerHTML = giveRandom();
    document.getElementById("B18").innerHTML = giveRandom();
    document.getElementById("B19").innerHTML = giveRandom();
    document.getElementById("B20").innerHTML = giveRandom();
    document.getElementById("B21").innerHTML = giveRandom();
    document.getElementById("B22").innerHTML = giveRandom();
    document.getElementById("B23").innerHTML = giveRandom();
    document.getElementById("B24").innerHTML = giveRandom();
    document.getElementById("B25").innerHTML = giveRandom();
    


    StoreValues();

    stack = [];

    labeling();
    cStoreValues();
    display();

    
    //stack[0] = 0;
}//end of function LabelingGameBoard


//function for entry of computer
function ComputerEntry(Entry)
{

    
    if(Entry == document.getElementById("B1").innerHTML)
    {
        document.getElementById("B1").style.backgroundColor = '#f0ece3';
        document.getElementById("B1").style.color = '#4a3f35';
        return CheckResult('B1',Entry);
        
    }
    else if(Entry == document.getElementById("B2").innerHTML)
    {
        document.getElementById("B2").style.backgroundColor = '#f0ece3';
        document.getElementById("B2").style.color = '#4a3f35';
        return CheckResult('B1',Entry);
        
    }
    else if(Entry == document.getElementById("B3").innerHTML)
    {
        document.getElementById("B3").style.backgroundColor = '#f0ece3';
        document.getElementById("B3").style.color = '#4a3f35';
        return CheckResult('B3',Entry);
        
    }
    else if(Entry == document.getElementById("B4").innerHTML)
    {
        document.getElementById("B4").style.backgroundColor = '#f0ece3';
        document.getElementById("B4").style.color = '#4a3f35';
        return CheckResult('B4',Entry);
        
    }
    else if(Entry == document.getElementById("B5").innerHTML)
    {
        document.getElementById("B5").style.backgroundColor = '#f0ece3';
        document.getElementById("B5").style.color = '#4a3f35';
        return CheckResult('B5',Entry);
    }
    else if(Entry == document.getElementById("B6").innerHTML)
    {
        document.getElementById("B6").style.backgroundColor = '#f0ece3';
        document.getElementById("B6").style.color = '#4a3f35';
        return CheckResult('B6',Entry);
        
    }
    else if(Entry == document.getElementById("B7").innerHTML)
    {
        document.getElementById("B7").style.backgroundColor = '#f0ece3';
        document.getElementById("B7").style.color = '#4a3f35';
        return CheckResult('B7',Entry);
        
    }
    else if(Entry == document.getElementById("B8").innerHTML)
    {
        document.getElementById("B8").style.backgroundColor = '#f0ece3';
        document.getElementById("B8").style.color = '#4a3f35';
        return CheckResult('B8',Entry);
        
    }
    else if(Entry == document.getElementById("B9").innerHTML)
    {
        document.getElementById("B9").style.backgroundColor = '#f0ece3';
        document.getElementById("B9").style.color = '#4a3f35';
        return CheckResult('B9',Entry);
        
    }
    else if(Entry == document.getElementById("B10").innerHTML)
    {
        document.getElementById("B10").style.backgroundColor = '#f0ece3';
        document.getElementById("B10").style.color = '#4a3f35';
        return CheckResult('B10',Entry);
        
    }
    else if(Entry == document.getElementById("B11").innerHTML)
    {
        document.getElementById("B11").style.backgroundColor = '#f0ece3';
        document.getElementById("B11").style.color = '#4a3f35';
        return CheckResult('B11',Entry);
        
    }
    else if(Entry == document.getElementById("B12").innerHTML)
    {
        document.getElementById("B12").style.backgroundColor = '#f0ece3';
        document.getElementById("B12").style.color = '#4a3f35';
        return CheckResult('B12',Entry);
        
    }
    else if(Entry == document.getElementById("B13").innerHTML)
    {
        document.getElementById("B13").style.backgroundColor = '#f0ece3';
        document.getElementById("B13").style.color = '#4a3f35';
        return CheckResult('B13',Entry);
        
    }
    else if(Entry == document.getElementById("B14").innerHTML)
    {
        document.getElementById("B14").style.backgroundColor = '#f0ece3';
        document.getElementById("B14").style.color = '#4a3f35';
        return CheckResult('B14',Entry);
        
    }
    else if(Entry == document.getElementById("B15").innerHTML)
    {
        document.getElementById("B15").style.backgroundColor = '#f0ece3';
        document.getElementById("B15").style.color = '#4a3f35';
        return CheckResult('B15',Entry);
        
    }
    else if(Entry == document.getElementById("B16").innerHTML)
    {
        document.getElementById("B16").style.backgroundColor = '#f0ece3';
        document.getElementById("B16").style.color = '#4a3f35';
        return CheckResult('B16',Entry);
        
        
    }
    else if(Entry == document.getElementById("B17").innerHTML)
    {
        document.getElementById("B17").style.backgroundColor = '#f0ece3';
        document.getElementById("B17").style.color = '#4a3f35';
        return CheckResult('B17',Entry);
        
    }
    else if(Entry == document.getElementById("B18").innerHTML)
    {
        document.getElementById("B18").style.backgroundColor = '#f0ece3';
        document.getElementById("B18").style.color = '#4a3f35';
        return CheckResult('B18',Entry);
        
    }
    else if(Entry == document.getElementById("B19").innerHTML)
    {
        document.getElementById("B19").style.backgroundColor = '#f0ece3';
        document.getElementById("B19").style.color = '#4a3f35';
        return CheckResult('B19',Entry);
        
    }
    else if(Entry == document.getElementById("B20").innerHTML)
    {
        document.getElementById("B20").style.backgroundColor = '#f0ece3';
        document.getElementById("B20").style.color = '#4a3f35';
        return CheckResult('B20',Entry);
        
    }
    else if(Entry == document.getElementById("B21").innerHTML)
    {
        document.getElementById("B21").style.backgroundColor = '#f0ece3';
        document.getElementById("B21").style.color = '#4a3f35';
        return CheckResult('B21',Entry);
        
    }
    else if(Entry == document.getElementById("B22").innerHTML)
    {
        document.getElementById("B22").style.backgroundColor = '#f0ece3';
        document.getElementById("B22").style.color = '#4a3f35';
        return CheckResult('B22',Entry);
        
    }
    else if(Entry == document.getElementById("B23").innerHTML)
    {
        document.getElementById("B23").style.backgroundColor = '#f0ece3';
        document.getElementById("B23").style.color = '#4a3f35';
        return CheckResult('B23',Entry);
        
    }
    else if(Entry == document.getElementById("B24").innerHTML)
    {
        document.getElementById("B24").style.backgroundColor = '#f0ece3';
        document.getElementById("B24").style.color = '#4a3f35';
        return CheckResult('B24',Entry);
        
    }
    else if(Entry == document.getElementById("B25").innerHTML)
    {
        document.getElementById("B25").style.backgroundColor = '#f0ece3';
        document.getElementById("B25").style.color = '#4a3f35';
        return CheckResult('B25',Entry);
        
    }

}//end of the funnction

function isEntry(Entry)
{
    for(var i=0; i<stack.length; i++)
    {
        if(Entry == stack[i])
        {
            
            return 1;
        }
    }

    return 0;
}


function EnterValues(btn, Entry)
{
    var w,z;

    if(isEntry(Entry))
    {
        vibration.play();
        return;
    }
        
    
    Clicked.play();
    document.getElementById(btn).style.backgroundColor = '#f0ece3';
    document.getElementById(btn).style.color = '#4a3f35';


    w = entrynum(Entry);
    z = CheckResult(btn, Entry);
    stack.push(Entry);
    console.log(z);
    console.log(w);
    Entry = giveRandom();
    w = entrynum(Entry);
    ComputerEntry(Entry);

    document.getElementById('score').style.opacity = '50%';
    document.getElementById('score').innerHTML = w;
    console.log(z);
    console.log(w);
    
    if(z>=5 && w>= 5)
    {
        
        document.getElementById("tie").style .display="block";
        tie.play();
    }

    
    else if(z >= 5)
    {
        //announce winner
        
        
        document.getElementById("win").style .display="block";
        win.play();
        
        
        
        
    }
    else if(w >= 5)
    {
        //announce winner
        
        
        document.getElementById("lose").style .display="block";
        lose.play();
        
        
        
    }
    
    
    

}//end of the function EnterValues

function CheckResult(btn, Entry)
{
    EqualityRCount = 0;
    EqualityCCount = 0;
    EqualityPDCount = 0;
    EqualityDCount = 0;
    for(var i=0; i<5; i++)
    {
        for(var j=0; j<5; j++)
        {
            if(Entry == ButtonArray[i][j])
            {
                ButtonArray[i][j] = 0;
            }
        }
    }
    /**
     * Button B1 ButtonArray[0][0]
     */
    if(btn == 'B1')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[0][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][0] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
        //check principal diagonal
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[i][i] == 0)
            {
                EqualityPDCount++;
                if(EqualityPDCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B1

    /**
     * Button B2 ButtonArray[0][1]
     */
    if(btn == 'B2')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[0][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][1] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
        
        
    }//end of condition for B2

    /**
     * Button B3 ButtonArray[0][2]
     */
    if(btn == 'B3')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[0][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][2] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
        
        
    }//end of condition for B3


    /**
     * Button B4 ButtonArray[0][3]
     */
    if(btn == 'B4')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[0][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][3] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
        
        
    }//end of condition for B4
    
    /**
     * Button B5 ButtonArray[0][4]
     */
    if(btn == 'B5')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[0][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][4] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for

        //check minor diagonal
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[i][4-i] == 0)
            {
                EqualityPDCount++;
                if(EqualityPDCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
        
        
    }//end of condition for B5


    /**
     * Button B6 ButtonArray[1][0]
     */
    if(btn == 'B6')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[1][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][0] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
        
        
    }//end of condition for B6



    /**
     * Button B7 ButtonArray[1][1]
     */
    if(btn == 'B7')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[1][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][1] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
        //check principal diagonal
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[i][i] == 0)
            {
                EqualityPDCount++;
                if(EqualityPDCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B7
    

    /**
     * Button B8 ButtonArray[1][2]
     */
    if(btn == 'B8')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[1][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][2] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
        
        
    }//end of condition for B8


    /**
     * Button B9 ButtonArray[1][3]
     */
    if(btn == 'B9')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[1][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][3] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
        //check minor diagonal
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[i][4-i] == 0)
            {
                EqualityDCount++;
                if(EqualityDCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B9


    /**
     * Button B10 ButtonArray[1][4]
     */
    if(btn == 'B10')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[1][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][4] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for

        
        
        
        
    }//end of condition for B10


    /**
     * Button B11 ButtonArray[2][0]
     */
    if(btn == 'B11')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[2][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][0] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
        
        
    }//end of condition for B11


    /**
     * Button B12 ButtonArray[2][2]
     */
    if(btn == 'B12')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[2][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][1] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B12


    /**
     * Button B13 ButtonArray[2][2]
     */
    if(btn == 'B13')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[2][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][2] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for

        //check principal diagonal
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[i][i] == 0)
            {
                EqualityPDCount++;
                if(EqualityPDCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for

        //check minor diagonal
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[i][4-i] == 0)
            {
                EqualityDCount++;
                if(EqualityDCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
      
    }//end of condition for B13


    /**
     * Button B14 ButtonArray[2][3]
     */
    if(btn == 'B14')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[2][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][3] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B14


    /**
     * Button B15 ButtonArray[2][4]
     */
    if(btn == 'B15')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[2][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][4] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B15
    
    /**
     * Button B16 ButtonArray[3][0]
     */
    if(btn == 'B16')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[3][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][0] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B16


    /**
     * Button B17 ButtonArray[3][1]
     */
    if(btn == 'B17')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[3][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][1] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for

        //check minor diagonal
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[i][4-i] == 0)
            {
                EqualityDCount++;
                if(EqualityDCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B17

    /**
     * Button B18 ButtonArray[3][2]
     */
    if(btn == 'B18')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[3][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][2] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B18

    /**
     * Button B19 ButtonArray[3][3]
     */
    if(btn == 'B19')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[3][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][3] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for

        //check principal diagonal
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[i][i] == 0)
            {
                EqualityPDCount++;
                if(EqualityPDCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B19


    /**
     * Button B20 ButtonArray[3][4]
     */
    if(btn == 'B20')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[3][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][4] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B20

    /**
     * Button B21 ButtonArray[4][0]
     */
    if(btn == 'B21')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[4][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][0] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for

        //check minor diagonal
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[i][4-i] == 0)
            {
                EqualityDCount++;
                if(EqualityDCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B21

    /**
     * Button B22 ButtonArray[4][1]
     */
    if(btn == 'B22')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[4][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][1] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for

        
        
    }//end of condition for B22


    /**
     * Button B23 ButtonArray[4][2]
     */
    if(btn == 'B23')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[4][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][2] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for

        
        
    }//end of condition for B23


    /**
     * Button B24 ButtonArray[4][3]
     */
    if(btn == 'B24')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[4][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][3] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for

        
        
    }//end of condition for B24


    /**
     * Button B25 ButtonArray[4][4]
     */
    if(btn == 'B25')
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[4][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    BingoCount++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(ButtonArray[i][4] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for

        //check principal diagonal
        for(var i=0; i<5; i++)
        {
            if(ButtonArray[i][i] == 0)
            {
                EqualityPDCount++;
                if(EqualityPDCount == 5)
                {
                    BingoCount++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B25

    switch(BingoCount)
    {
        
        case 1: document.getElementById("B").innerHTML = "B";
        break;
        case 2: document.getElementById("B").innerHTML = "B";
                document.getElementById("I").innerHTML = "I";
        break;
        case 3: document.getElementById("B").innerHTML = "B";
                document.getElementById("I").innerHTML = "I"; 
                document.getElementById("N").innerHTML = "N";
        break;
        case 4: document.getElementById("B").innerHTML = "B";
                document.getElementById("I").innerHTML = "I"; 
                document.getElementById("N").innerHTML = "N";
                document.getElementById("G").innerHTML = "G";
        break;
        case 5: document.getElementById("B").innerHTML = "B";
                document.getElementById("I").innerHTML = "I"; 
                document.getElementById("N").innerHTML = "N";
                document.getElementById("G").innerHTML = "G"; 
                document.getElementById("O").innerHTML = "O";  
        break;
        case 6: document.getElementById("B").innerHTML = "B";
                document.getElementById("I").innerHTML = "I"; 
                document.getElementById("N").innerHTML = "N";
                document.getElementById("G").innerHTML = "G"; 
                document.getElementById("O").innerHTML = "O";  
        break;
        case 7: document.getElementById("B").innerHTML = "B";
                document.getElementById("I").innerHTML = "I"; 
                document.getElementById("N").innerHTML = "N";
                document.getElementById("G").innerHTML = "G"; 
                document.getElementById("O").innerHTML = "O";  
        break;
        case 8: document.getElementById("B").innerHTML = "B";
                document.getElementById("I").innerHTML = "I"; 
                document.getElementById("N").innerHTML = "N";
                document.getElementById("G").innerHTML = "G"; 
                document.getElementById("O").innerHTML = "O";  
        break;
        case 9: document.getElementById("B").innerHTML = "B";
                document.getElementById("I").innerHTML = "I"; 
                document.getElementById("N").innerHTML = "N";
                document.getElementById("G").innerHTML = "G"; 
                document.getElementById("O").innerHTML = "O";  
        break;        
                     

    }
    
    return BingoCount;
}//end of function