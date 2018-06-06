import { CityForm } from "./components/form.js";
import { WeatherCards } from "./components/cards.js";

export class WeatherApp {

    constructor() {
        console.log("WeatherApp Constructor");
        // Define the element <city-form>
        customElements.define('city-form', CityForm);
        customElements.define('city-cards', WeatherCards);
        // event listeners
        this.bindEvents();
    }

    bindEvents() {
        // event listener
        document.addEventListener('cityAdd', (e) => {
            console.log(e.detail);
            // dispatch the event to city-cards component
            let event = new CustomEvent('cardAdd', { detail: e.detail });
            // forward and dispatch event on table
            document.querySelector('city-cards').dispatchEvent(event);
        });
    }
}

new WeatherApp();