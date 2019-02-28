$(document).ready(function () {
    
    $('#btnCal').click(function () {
        let numberNotChecked = $('input:checkbox:not(":checked")').length;
        let correctAns = 40 - numberNotChecked;
        let bandScore = 4;
        let zero = "? out of band score"
        let minScore = 11;
        //calculate minScore+++ , bandScore = 4 +.5
            if(12<correctAns){
                bandScore = 4.5
            } 
            if(15<correctAns){
                bandScore = 5
            } 
            if(17<correctAns){
                bandScore = 5.5
            } 
            if(22<correctAns){
                bandScore = 6
            } 
            if(25<correctAns){
                bandScore = 6.5
            } 
            if(29<correctAns){
                bandScore = 7
            } 
            if(31<correctAns){
                bandScore =  7.5
            } 
            if(34<correctAns){
                bandScore =  8
            } 
            if(36<correctAns){
                bandScore =  8.5
            } 
            if(38<correctAns){
                bandScore =  9
            }  
            if(correctAns<11){
                bandScore = 0 + zero
            }
        alert(correctAns +" answers is correct. Your band score is: " + bandScore ); 
        
    });

    $('#clear').click(function () { 
        console.log('clear');
        $('input:checkbox').prop('checked', false); ;
    });
});
