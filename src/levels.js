export default function addXP(result, mychar) {
  if (result === 'you won') {
    mychar.xp += 5;
  }



  if (mychar.xp === 5) {
    mychar.level += 1;
  }


}
