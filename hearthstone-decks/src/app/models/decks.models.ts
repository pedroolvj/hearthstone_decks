export class UserDecksModel {
    decks: DecksModel[]

    constructor() {
        this.decks = [];
    }
}

export class DecksModel {
    cards: CardModel[];
    deck_name: string;
    deck_class: string;

    constructor() {
        this.cards = [];
        this.deck_name = '';
        this.deck_class = '';
    }
}

export class CardModel {
    id: number;
    name: string;
    description: string;
    attack: number;
    health: number;
    type: number;
    class: string;
    qnty: number;

    constructor() {
        this.id = 0;
        this.name = '';
        this.description = '';
        this.attack = 0;
        this.health = 0;
        this.type = 0;
        this.class = '';
        this.qnty = 0;
    }
    
}