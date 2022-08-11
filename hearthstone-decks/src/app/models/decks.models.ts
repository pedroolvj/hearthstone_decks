export class UserDecksModel {
    decks: DecksModel[]

    constructor() {
        this.decks = [];
    }
}

export class DecksModel {
    id: string;
    cards?: CardModel[];
    deck_name: string;
    deck_class: string;

    constructor() {
        this.id = '';
        this.cards = [];
        this.deck_name = '';
        this.deck_class = '';
    }
}

export class CardModel {
    id: number;
    name: string;
    flavorText: string;
    attack: number;
    health: number;
    cardTypeId: number;
    class: string;
    qnty: number;
    durability!: number;
    image: string

    constructor() {
        this.id = 0;
        this.name = '';
        this.flavorText = '';
        this.attack = 0;
        this.health = 0;
        this.cardTypeId = 0;
        this.class = '';
        this.qnty = 0;
        this.image = ''
    }
    
}

export class ServiceModel {
    cardCount: number;
    cards: CardModel[];
    page: number;
    pageCount: number;

    constructor() {
        this.cardCount = 0;
        this.cards =  [];
        this.page = 0;
        this.pageCount = 0;
    }
}