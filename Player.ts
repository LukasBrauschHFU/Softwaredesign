export class Player {
public maximumHealth: number = 0;
public currentHealth: number = 0;
public damage: number = 0;
public startItem: string = "";
public positionX: number = 1;
public positionY: number = 1;
}

//playervalues
let player: Player = new Player;
player.maximumHealth = 10;
player.currentHealth = 10;
player.damage = 3;
player.startItem = "Key"; 
player.positionX = 1;
player.positionY = 1; 
export {player};   