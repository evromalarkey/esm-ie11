import {LibStimulus, Controller } from "../Libraries/Stimulus.js";
import importStyle from "../Utils/Functions/importStyle.js";
import cdn from "../Utils/cdn.js";

LibStimulus.register("dropdown", class extends Controller {
    // static targets = [ "input" ];
    static get targets() {
        return [ "input" ]
    }

    static get values() {
        return {
            test: String
        }
    }

    greet() {
        alert(`Hello ${this.queryTarget("input").value}`);
        console.log("Hello, Stimulus!", this["inputTarget"].value);

        this.setValue("test", "muehe");

        (async() => {
            if (typeof this.queryTarget("input").datepicker === "undefined") {
                importStyle(cdn.datepicker_css);
                const { Datepicker } = await import('vanillajs-datepicker');

                new Datepicker(this.queryTarget("input"), {
                    autohide: true
                });
            }
        })();

        (async() => {
            const tippy = await import('../Libraries/Tippy.js');
            console.log(tippy);
            tippy.default('[data-tippy-content]');
        })();
    }
});