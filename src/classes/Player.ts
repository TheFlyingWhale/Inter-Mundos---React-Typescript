export class Player {
    public name: string = "Player name";
    public index: number = 5;
    public health: number = 100;
    public thirst: number = 100;
    public hunger: number = 100;

    constructor(name: string) {
        this.name = name;
    }
}