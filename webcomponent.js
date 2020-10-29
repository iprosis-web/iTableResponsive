(function () {
	// <link rel="stylesheet" href="https://kit-free.fontawesome.com/releases/latest/css/free.min.css">
	// <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
	// <link rel="stylesheet" href="https://unpkg.com/bootstrap-table@1.18.0/dist/bootstrap-table.min.css">

	// <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
	// <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
	// <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
	// <script src="https://unpkg.com/bootstrap-table@1.18.0/dist/bootstrap-table.min.js"></script>

	let tmpl = document.createElement('template');
	tmpl.innerHTML = `
			<link rel="stylesheet" href="https://kit-free.fontawesome.com/releases/latest/css/free.min.css">
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
			<link rel="stylesheet" href="https://unpkg.com/bootstrap-table@1.18.0/dist/bootstrap-table.min.css">  
			<style>
      		</style>s
	  		<h1>Hey Table</h1>
    `;

	customElements.define(
		'com-sap-sample-table',
		class WidgetTable extends HTMLElement {
			constructor() {
				super();
				let shadowRoot = this.attachShadow({ mode: 'open' });
				shadowRoot.appendChild(tmpl.content.cloneNode(true));
			}

			//Fired when the widget is added to the html DOM of the page
			connectedCallback() {}

			//Fired when the widget is removed from the html DOM of the page (e.g. by hide)
			disconnectedCallback() {}

			//When the custom widget is updated, the Custom Widget SDK framework executes this function first
			onCustomWidgetBeforeUpdate(oChangedProperties) {}

			//When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
			onCustomWidgetAfterUpdate(oChangedProperties) {}

			//When the custom widget is removed from the canvas or the analytic application is closed
			onCustomWidgetDestroy() {}

			//When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
			// Commented out by default.  If it is enabled, SAP Analytics Cloud will track DOM size changes and call this callback as needed
			//  If you don't need to react to resizes, you can save CPU by leaving it uncommented.
			/*
        onCustomWidgetResize(width, height){
        
        }
        */

			redraw() {}
		}
	);
})();
