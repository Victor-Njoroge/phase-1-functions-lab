// Code your solution in this file!
let startBlock =  42;
function distanceFromHqInBlocks(destination){
    let response = destination - startBlock;

    if(response < 0){
        return response * -1;
    }
    return response;
    
}
let lengthOfBlock = 264;
function distanceFromHqInFeet(distanceInFeet){
    return distanceFromHqInBlocks (distanceInFeet) * lengthOfBlock;
}

function distanceTravelledInFeet(start, destination){
 if (start>destination){
    return (start-destination) * lengthOfBlock
 }
 return (destination-start) * lengthOfBlock
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distanceTravelled = distanceTravelledInFeet(start,destination);
    if (distanceTravelled <= 400){
        return 0;
    }else if(distanceTravelled > 400 && distanceTravelled <=2000){
        return (distanceTravelled-400)* 0.02;
    }else if(distanceTravelled >2000 && distanceTravelled <2500){
        return 25;
    }
    else if(distanceTravelled > 2500){
        return 'cannot travel that far'
    }

  }
