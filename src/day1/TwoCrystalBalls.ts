export default function two_crystal_balls(breaks: boolean[]): number {
    let jumpPoint = Math.floor(Math.sqrt(breaks.length));
    let i = jumpPoint;
    for(; i< breaks.length;i+=jumpPoint) {
    if (breaks[i]){
      break;
        }
    }
    i-=jumpPoint;
    for (let j = 0; j < jumpPoint && j<breaks.length; j++,i++) {
        if(breaks[i]){
        return i;
    }
    }
    return -1;
}
