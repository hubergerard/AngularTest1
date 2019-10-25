export class PokemonDetail {
    name
    type
    stats
    abilities
    constructor(name, type, stats, abilities) {
        this.name = name;
        this.type = type;
        this.stats = stats;
        this.abilities = abilities;
    }
}