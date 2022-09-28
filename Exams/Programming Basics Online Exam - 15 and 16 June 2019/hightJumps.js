function hightJumps(input) {
    let index = 0;
    let goalJump = Number(input[index++]);
    let currentJump = Number(input[index]);
    let startHight = goalJump - 30;
    let successJump = 0;
    let failJump = 0;
    let failed = 0;
    let jumpsCounter = 0;
    while (goalJump >= currentJump) {
        currentJump = Number(input[index++]);
        jumpsCounter++
        
        if (currentJump > startHight) {
            successJump++;
            startHight += 5;
            failed = 0;
        } else if (currentJump <= startHight) {
            failJump++;
            failed++;
        }
        if (failed >= 3) {
            console.log(`Tihomir failed at ${startHight}cm after ${jumpsCounter} jumps.`);
            break;
        }

    }
    if (currentJump > goalJump) {
        console.log(`Tihomir succeeded, he jumped over ${goalJump}cm after ${jumpsCounter} jumps.`);
    }

}
hightJumps(["231", "205", "212", "213", "228", "229", "230", "235"])


