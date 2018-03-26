import { Component, Prop, State } from "@stencil/core";
import { RouterHistory } from "@stencil/router";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  @Prop() history: RouterHistory;
  @State() value: string;
  userName: any;
  url: string = "profile/";
  setUrl = (e: any) => {
    e.preventDefault();
    // using es6.
    this.userName = `${this.url}` + e.target.value;
  };
  goTo = () => {
    //Routing is similar to Ionic 2,3;
    this.history.push(`${this.userName}`, {});
  };
  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the test app.<p>
            Enter your name to route to your profile.
          </p>
          <p>
            <a href="https://stenciljs.com">stenciljs.com</a>
             &nbsp;to get started.
          </p>
        </p>
        <div class="center padBottom">
          <input
            class="routeName"
            type="text"
            value={this.value}
            onChange={event => this.setUrl(event)}
            placeholder="Enter your name"
          />
        </div>
        <button
          class="padBottom"
          onClick={() => {
            this.goTo();
          }}
        >
          Check Profile
        </button>
        <p>
          <i>
            Playing with Stenciljs, <b>KHM</b>
          </i>
        </p>
      </div>
    );
  }
}
