class Spaceship {
    constructor(hull, firepower, accuracy) {
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
    fight(enemyShip) {
        enemyShip.hull -= this.firepower
    }
}

space_hull = function() {
    return Math.round(Math.random() * 3) + 3
}

space_firepower = function() { 
    return Math.round(Math.random() * 2) + 2
}
space_accuracy = function() {
    return ((Math.round(Math.random() * 2)) / 10) + .6
}

// - You attack the first alien ship
// - If the ship survives, it attacks you
// - If you survive, you attack the ship again
// - If it survives, it attacks you again
// - Etc.
// - If you destroy the ship, you have the option to **attack** the next ship or to **retreat**
// - If you retreat, the game is over, perhaps leaving the game open for further developments or options.
// - You win the game if you destroy all of the aliens.
// - You lose the game if you are destroyed.

const spaceShips = [
    alienShip1 = new Spaceship(space_hull(), space_firepower(), space_accuracy()),
    alienShip2 = new Spaceship(space_hull(), space_firepower(), space_accuracy()),
    alienShip3 = new Spaceship(space_hull(), space_firepower(), space_accuracy()),
    alienShip4 = new Spaceship(space_hull(), space_firepower(), space_accuracy()),
    alienShip5 = new Spaceship(space_hull(), space_firepower(), space_accuracy()),
    alienShip6 = new Spaceship(space_hull(), space_firepower(), space_accuracy()),
]

USS_Assembly = new Spaceship(20, 5, 0.7)

console.log(spaceShips)

for (let i = 0; i < spaceShips.length; i++) {
    if (USS_Assembly.hull > 0) {
    USS_Assembly.fight(spaceShips[i])
    if (spaceShips[i].hull > 0) {spaceShips[i].fight(USS_Assembly)}
 }

}

prompt("Do you want to fight the next alien ship?")
console.log(spaceShips)