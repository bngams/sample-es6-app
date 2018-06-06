// define template
const TEMPLATE_FORM = `
    <form id="city-form" action="#">
        <!-- Textfield with Floating Label -->
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="city-input">
            <label class="mdl-textfield__label" for="sample3">Votre ville...</label>
        </div>
        <!-- Colored raised button -->
        <button type="button" id="submit-btn" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            Ajouter
        </button>
    </form>
`

// definir une classe
export class CityForm extends HTMLElement {

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
        this.bindEvents();

    }

    bindElements() {
        this.submitBtn = document.querySelector('#submit-btn');
        this.cityInput = document.querySelector('#city-input')
    }

    bindEvents() {
        // create event
        this.submitBtn.addEventListener('click', () => this.submit());
    }

    dispatchSubmitEvent(city) {
        let event = new CustomEvent('cityAdd', { detail: city });
        document.dispatchEvent(event);
    }

    // form submit handler
    submit() {
        // get field value
        let city = this.cityInput.value;
        // display value
        console.log(city);
        // dispatch
        this.dispatchSubmitEvent(city);
    }



}