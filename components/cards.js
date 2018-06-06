import { Http } from "../services/http.js";

// define template
const TEMPLATE_FORM = `
    <div id="cards-container">
        <div id="model" class="demo-card-event mdl-card mdl-shadow--2dp" style="display:none">
            <div class="mdl-card__title mdl-card--expand">
                <h4>
                    <span class="name">Toulouse</span>
                    </br>
                    <span class="temp">24</span>
                </h4>
            </div>
            <div class="mdl-card__actions mdl-card--border">
                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    Rafraichir
                </a>
                <div class="mdl-layout-spacer"></div>
                <i class="material-icons">refresh</i>
            </div>
        </div>
    </div>
`

// definir une classe
export class WeatherCards extends HTMLElement {

    constructor() {
        // HTMLElement => Always call super constructor first
        super();
    }

    // used by customElements.define
    connectedCallback() {
        // DOM display
        this.innerHTML = TEMPLATE_FORM;
        // MDL Display
        componentHandler.upgradeElements(this);
        // bindElements
        this.bindElements();
        // bind events
        this.listenEvents();

    }

    bindElements() {
        this.container = document.querySelector('#cards-container');
        this.model = document.querySelector('#model');
    }

    listenEvents() {
        // Listen for the event.
        this.addEventListener('cardAdd', function (e) {
            console.log('cardAdd');
            this.addCard(e.detail);
        });
    }

    addCard(name) {
        this.fetchData(name);
    }

    appendCard(data) {
        let card = this.model.cloneNode(true);
        card.setAttribute('id', data.id); // replace with an id
        card.querySelector('.name').textContent = data.name;
        card.querySelector('.temp').textContent = data.temp;
        this.container.appendChild(card);
        card.setAttribute('style', ''); // remove display none
        componentHandler.upgradeElements(this);
    }

    fetchData(name) {
        Http.fetchData('cities?name=' + name).then((data) => {
            console.log(data);
            if (data[0])
                this.appendCard(data[0]);
        });
    }


}