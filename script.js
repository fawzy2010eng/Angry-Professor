
// Complete the angryProfessor function below.
function angryProfessor(k, a) {
    var avilable = 0;
    for(var i = 0; i < a.length ; i++){
        if(a [i]<= 0){
            avilable ++
        }
    }
    if(avilable >= k){
        return 'NO'
    }else{
        return 'YES'
    }


}
