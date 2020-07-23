//data members
var cstack = [25]; //stack to store the values
cstack[0] = [0];
var cButtonArray = new Array(5);       // array to store values on buttons
    for(var i=0; i<5; i++)
        cButtonArray[i] = new Array(5);

        var pButtonArray = new Array(5);       // array to store values on buttons
    for(var i=0; i<5; i++)
        pButtonArray[i] = new Array(5);
var x; //emergency variabele
var count = 0;
function cgiveRandom()
{
    
    x = Math.floor(Math.random()*25)+1;
    for(var i=0; i<cstack.length; i++)
    {
        if(x == cstack[i])
        {
            return cgiveRandom();
        }

    }
    cstack.push(x);
    return x;
}//end of the function giveRandom

//function to set all the values to the Button array

function cStoreValues()
{
    var y=1;
    for(var i=0; i<5; i++)
    {
        for(var j=0; j<5; j++)
        {
            cButtonArray[i][j] = cstack[y];
            console.log(cButtonArray[i][j]);
            pButtonArray[i][j] = cstack[y];
            y++;
        }
        console.log();
    }
    
}//end of the function storeValues

function display()
{
    for(var i=0; i>5; i++)
    {
        for(var j=0; j<5; j++)
        {
            console.log(cButtonArray[i][j]);
        }
        console.log();
    }
}
function labeling()
{
    cstack = [];
    cstack[0] = 0;
    count = 0;
    
 for(var i=0; i<25; i++)
 {
    cgiveRandom();
 }   
}

function entrynum(Entry)
{
    var EqualityRCount = 0;
    var EqualityCCount = 0;
    var EqualityPDCount = 0;
    var EqualityDCount = 0;
    for(var i=0; i<5; i++)
    {
        console.log("hello gangu");
        for(var j=0; j<5; j++)
        {
            if(Entry == cButtonArray[i][j])
            {
                cButtonArray[i][j] = 0;
                
            }
            console.log(cButtonArray[i][j]);
        }
        console.log();
    }

    /**
     * Button B1 cButtonArray[0][0]
     */
    if(Entry == pButtonArray[0][0] )
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[0][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][0] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
        //check principal diagonal
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[i][i] == 0)
            {
                EqualityPDCount++;
                if(EqualityPDCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B1

    /**
     * Button B2 cButtonArray[0][1]
     */
    if(Entry ==pButtonArray[0][1])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[0][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][1] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
        
        
    }//end of condition for B2

    /**
     * Button B3 cButtonArray[0][2]
     */
    if(Entry ==pButtonArray[1][2])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[0][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][2] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
        
        
    }//end of condition for B3


    /**
     * Button B4 cButtonArray[0][3]
     */
    if(Entry ==pButtonArray[0][3])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[0][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][3] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
        
        
    }//end of condition for B4
    
    /**
     * Button B5 cButtonArray[0][4]
     */
    if(Entry == pButtonArray[0][4])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[0][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][4] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for

        //check minor diagonal
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[i][4-i] == 0)
            {
                EqualityPDCount++;
                if(EqualityPDCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
        
        
    }//end of condition for B5


    /**
     * Button B6 cButtonArray[1][0]
     */
    if(Entry ==pButtonArray[1][0])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[1][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][0] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
        
        
    }//end of condition for B6



    /**
     * Button B7 cButtonArray[1][1]
     */
    if(Entry ==pButtonArray[1][1])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[1][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][1] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
        //check principal diagonal
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[i][i] == 0)
            {
                EqualityPDCount++;
                if(EqualityPDCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B7
    

    /**
     * Button B8 cButtonArray[1][2]
     */
    if(Entry ==pButtonArray[1][2])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[1][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][2] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
        
        
    }//end of condition for B8


    /**
     * Button B9 cButtonArray[1][3]
     */
    if(Entry ==pButtonArray[1][3])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[1][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][3] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
        //check minor diagonal
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[i][4-i] == 0)
            {
                EqualityDCount++;
                if(EqualityDCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B9


    /**
     * Button B10 cButtonArray[1][4]
     */
    if(Entry == pButtonArray[1][4])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[1][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][4] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for

        
        
        
        
    }//end of condition for B10


    /**
     * Button B11 cButtonArray[2][0]
     */
    if(Entry == pButtonArray[2][0])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[2][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][0] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
        
        
    }//end of condition for B11


    /**
     * Button B12 cButtonArray[2][1]
     */
    if(Entry == pButtonArray[2][1])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[2][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][1] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B12


    /**
     * Button B13 cButtonArray[2][2]
     */
    if(Entry == pButtonArray[2][2])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[2][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][2] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for

        //check principal diagonal
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[i][i] == 0)
            {
                EqualityPDCount++;
                if(EqualityPDCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for

        //check minor diagonal
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[i][4-i] == 0)
            {
                EqualityDCount++;
                if(EqualityDCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
      
    }//end of condition for B13


    /**
     * Button B14 cButtonArray[2][3]
     */
    if(Entry == pButtonArray[2][3])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[2][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][3] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B14


    /**
     * Button B15 cButtonArray[2][4]
     */
    if(Entry == pButtonArray[2][4])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[2][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][4] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B15
    
    /**
     * Button B16 cButtonArray[3][0]
     */
    if(Entry == pButtonArray[3][0])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[3][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][0] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B16


    /**
     * Button B17 cButtonArray[3][1]
     */
    if(Entry == pButtonArray[3][1])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[3][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][1] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for

        //check minor diagonal
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[i][4-i] == 0)
            {
                EqualityDCount++;
                if(EqualityDCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B17

    /**
     * Button B18 pButtonArray[3][2]
     */
    if(Entry == cButtonArray[3][2])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[3][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][2] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B18

    /**
     * Button B19 cButtonArray[3][3]
     */
    if(Entry == pButtonArray[3][3])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[3][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][3] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for

        //check principal diagonal
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[i][i] == 0)
            {
                EqualityPDCount++;
                if(EqualityPDCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B19


    /**
     * Button B20 cButtonArray[3][4]
     */
    if(Entry == pButtonArray[3][4])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[3][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][4] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B20

    /**
     * Button B21 cButtonArray[4][0]
     */
    if(Entry == pButtonArray[4][0])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[4][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][0] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for

        //check minor diagonal
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[i][4-i] == 0)
            {
                EqualityDCount++;
                if(EqualityDCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for
        
    }//end of condition for B21

    /**
     * Button B22 cButtonArray[4][1]
     */
    if(Entry == pButtonArray[4][1])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[4][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][1] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for

        
        
    }//end of condition for B22


    /**
     * Button B23 cButtonArray[4][2]
     */
    if(Entry == pButtonArray[4][2])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[4][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][2] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for

        
        
    }//end of condition for B23


    /**
     * Button B24 cButtonArray[4][3]
     */
    if(Entry == pButtonArray[4][3])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[4][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][3] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for

        
        
    }//end of condition for B24


    /**
     * Button B25 cButtonArray[4][4]
     */
    if(Entry == pButtonArray[4][4])
    {
        
        //check row
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[4][i] == 0)
            {
                EqualityRCount++;
                if(EqualityRCount == 5)
                {
                    count++;
                   
                }

            }
            else{
               
                break;
            }
        }//end for
        
        //check column
        for(var i=0; i<5; i++)
        {
            
            if(cButtonArray[i][4] == 0)
            {
                EqualityCCount++;
                if(EqualityCCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for

        //check principal diagonal
        for(var i=0; i<5; i++)
        {
            if(cButtonArray[i][i] == 0)
            {
                EqualityPDCount++;
                if(EqualityPDCount == 5)
                {
                    count++;
                    
                }

            }
            else{
                
                break;
            }
        }//end for

        
        
    }//end of condition for B25
    return count;

}