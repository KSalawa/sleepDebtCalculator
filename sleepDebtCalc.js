/*Kamil Salawa 0ct0ber 2020*/

const getSleepHours = day => {
    switch(day){
        case 'monday':
            return 8
        case 'tuesday':
            return 6
        case 'wednesday':
            return 8
        case 'thursday':
            return 7.5
        case 'friday':
            return 3
        case 'saturday':
            return 0
        case 'sunday':
            return 8
        default:
            return "Error"
    }
}

//console.log(getSleepHours('wednesday'));

const getActualSleepHours = () => 
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') + 
    getSleepHours('thursday') + 
    getSleepHours('friday') + 
    getSleepHours('saturday') + 
    getSleepHours('sunday'); 



/*console.log(getSleepHours('wednesday'))
console.log(getActualSleepHours());*/

const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
};

//console.log(getIdealSleepHours())

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
  if ( actualSleepHours === idealSleepHours ){
    console.log('You got the perfect amount of sleep!');
  }else if ( actualSleepHours > idealSleepHours ){
    const overSlept = actualSleepHours - idealSleepHours;
    console.log(`You got ${overSlept} more hours than you needed!`);
  }else if ( actualSleepHours < idealSleepHours ){
    const underSlept = idealSleepHours - actualSleepHours;
    console.log(`You were short ${underSlept} hours of sleep!`);
  }else {
    console.log('Wake up Sleepy!');
  }
  
  };
  
  calculateSleepDebt();