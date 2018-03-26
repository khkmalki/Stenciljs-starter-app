/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppHome {
    constructor() {
        this.url = "profile/";
        this.setUrl = (e) => {
            e.preventDefault();
            // using es6.
            this.userName = `${this.url}` + e.target.value;
        };
        this.goTo = () => {
            //Routing is similar to Ionic 2,3;
            this.history.push(`${this.userName}`, {});
        };
    }
    render() {
        return (h("div", { class: "app-home" },
            h("p", null,
                "Welcome to the test app.",
                h("p", null, "Enter your name to route to your profile."),
                h("p", null,
                    h("a", { href: "https://stenciljs.com" }, "stenciljs.com"),
                    "\u00A0to get started.")),
            h("div", { class: "center padBottom" },
                h("input", { class: "routeName", type: "text", value: this.value, onChange: event => this.setUrl(event), placeholder: "Enter your name" })),
            h("button", { class: "padBottom", onClick: () => {
                    this.goTo();
                } }, "Check Profile"),
            h("p", null,
                h("i", null,
                    "Playing with Stenciljs, ",
                    h("b", null, "KHM")))));
    }
    static get is() { return "app-home"; }
    static get properties() { return { "history": { "type": "Any", "attr": "history" }, "value": { "state": true } }; }
    static get style() { return ".app-home {\n  padding: 10px;\n  text-align-last: center;\n}\n\nbutton {\n  background: #5851ff;\n  color: white;\n  margin: 8px;\n  border: none;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 16px 20px;\n  border-radius: 2px;\n  box-shadow: 0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);\n  outline: 0;\n  letter-spacing: .04em;\n  transition: all .15s ease;\n  cursor: pointer;\n}\n  \nbutton:hover {\n  box-shadow: 0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);\n  transform: translateY(1px);\n}\n\n\n.routeName{\nheight: 32px;\nborder-radius: 5px;\nborder: none;\nbox-shadow: 0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);\nfont-size: 20px;\nfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\ncolor: chocolate;\noutline: 0;\ntransition: all .15s ease;\ncursor: pointer;\ntext-align: center;\n\n}\n.routeName:hover{\n  box-shadow: 0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);\n  transform: translateY(1px);\n}\n.center{\n  text-align: center;\n}\n\n.padBottom{\n  padding:15px;\n}"; }
}

export { AppHome };
