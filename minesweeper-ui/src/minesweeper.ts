import { LitElement, html, customElement, property, css } from 'lit-element';
import './game-container';

@customElement("minesweeper-app")
class MinesweeperApp extends LitElement {

	static get styles() {
		return css`
			:host {
				display: block;
			}
			div.container {
				display: flex;
				flex-wrap: wrap;
				width: 250px;
				border-right: 1px solid #777;
				border-bottom: 1px solid #777;
				margin-left: auto;
				margin-right: auto;
			}
		`;
	}

	@property({
		type: "Array"
	})
	data: number[];

	render() {
		return html`
			<div>
				<game-container></game-container>
			</div>
  		`;
	}

	constructor() {
		super();
		this.data = [0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];
	}

}

declare global {
	interface HTMLElementTagNameMap {
		'minesweeper-app': MinesweeperApp;
	}
}