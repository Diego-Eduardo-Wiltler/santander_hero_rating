let rating = {
    'Ferro': { min: 1, max: 10 },
    'Bronze': { min: 11, max: 20 },
    'Prata': { min: 21, max: 50 },
    'Ouro': { min: 51, max: 80 },
    'Diamante': { min: 81, max: 90 },
    'Lendário': { min: 91, max: 100 },
    'Imortal': { min: 101, max: Infinity }
};

class BattleRating {
    constructor(nome, vitorias, derrotas) {
        this.nome = nome;
        this.vitorias = vitorias;
        this.derrotas = derrotas;
        this.rating = this.calculateRating();
        this.nivel = this.getNivel();
    }

    calculateRating() {
        return this.vitorias - this.derrotas;
    }

    getNivel() {
        for (let key in rating) {
            if (this.rating >= rating[key].min && this.rating <= rating[key].max) {
                return key;
            }
        }
        return "Sem ranque";
    }

    get heroDetails() {
        return `Nome: ${this.nome}, Vitórias: ${this.vitorias}, Derrotas: ${this.derrotas}, Rating: ${this.rating}, Nível: ${this.nivel}`;
    }
}

let heroi = new BattleRating('Jeffeza', 130, 10);
console.log(heroi.heroDetails);
