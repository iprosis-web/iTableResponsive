(function () {

	let jQuieryScript = document.createElement('script');
    jQuieryScript.src = 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js';
    jQuieryScript.async = false;
	document.head.appendChild(jQuieryScript);

	let popperScript = document.createElement('script');
    popperScript.src = 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js';
    popperScript.async = false;
	document.head.appendChild(popperScript);

	let bootstrapScript = document.createElement('script');
    bootstrapScript.src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js';
    bootstrapScript.async = false;
	document.head.appendChild(bootstrapScript);

	let bootstrapTableScript = document.createElement('script');
    bootstrapTableScript.src = 'https://unpkg.com/bootstrap-table@1.18.0/dist/bootstrap-table.min.js';
    bootstrapTableScript.async = false;
	document.head.appendChild(bootstrapTableScript);
	




	let tmpl = document.createElement('template');
	tmpl.innerHTML = `
			<link rel="stylesheet" href="https://kit-free.fontawesome.com/releases/latest/css/free.min.css">
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
			<link rel="stylesheet" href="https://unpkg.com/bootstrap-table@1.18.0/dist/bootstrap-table.min.css">  
			<style>
      		</style>
	  		<h1>Hey Table</h1>
    `;

	bootstrapTableScript.onload = () => 

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
