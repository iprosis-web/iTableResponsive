(function () {

	// let jQuieryScript = document.createElement('script');
    // jQuieryScript.src = 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js';
    // jQuieryScript.async = false;
	// document.head.appendChild(jQuieryScript);

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

	let bootstrapTableMobileScript = document.createElement('script');
    bootstrapTableMobileScript.src = 'https://unpkg.com/bootstrap-table@1.18.0/dist/extensions/mobile/bootstrap-table-mobile.min.js';
    bootstrapTableMobileScript.async = false;
	document.head.appendChild(bootstrapTableMobileScript);

	let tmpl = document.createElement('template');
	tmpl.innerHTML = `
			<link rel="stylesheet" href="https://kit-free.fontawesome.com/releases/latest/css/free.min.css">
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
			<link rel="stylesheet" href="https://unpkg.com/bootstrap-table@1.18.0/dist/bootstrap-table.min.css">  
			<style>
      		</style>
			<h1>Hey Table</h1>
			<div class="bootstrap-table bootstrap4">
		<div class="fixed-table-toolbar"></div>

		<div class="fixed-table-container" style="padding-bottom: 0px;">
			<div class="fixed-table-header" style="display: none;">
				<table></table>
			</div>
			<div class="fixed-table-body">
				<div class="fixed-table-loading table table-bordered table-hover" style="top: 51px;">
					<span class="loading-wrap">
						<span class="loading-text">Loading, please wait</span>
						<span class="animation-wrap"><span class="animation-dot"></span></span>
					</span>

				</div>
				<table id="table" class="table table-bordered table-hover data-mobile-responsive="true" data-check-on-init="true" data-check-on-init="true">
					<thead>
						<tr>
							<th data-field="id">
								<div class="th-inner ">ID</div>
								<div class="fht-cell"></div>
							</th>
							<th data-field="name">
								<div class="th-inner ">Item Name</div>
								<div class="fht-cell"></div>
							</th>
							<th data-field="price">
								<div class="th-inner ">Item Price</div>
								<div class="fht-cell"></div>
							</th>
						</tr>
					</thead>
				</table>
			</div>
		</div>
	</div>
			  

    `;

	bootstrapTableMobileScript.onload = () => 

	customElements.define(
		'com-sap-sample-table',
		class WidgetTable extends HTMLElement {
			constructor() {
				super();
				let shadowRoot = this.attachShadow({ mode: 'open' });
				shadowRoot.appendChild(tmpl.content.cloneNode(true));
				this.table = $("#table",shadowRoot);
				console.log('Table:::', this.table);

				let data = [
					{
						'id': 0,
						'name': 'Item 0',
						'price': '$0'
					},
					{
						'id': 1,
						'name': 'Item 1',
						'price': '$1'
					},
					{
						'id': 2,
						'name': 'Item 2',
						'price': '$2'
					},
					{
						'id': 3,
						'name': 'Item 3',
						'price': '$3'
					},
					{
						'id': 4,
						'name': 'Item 4',
						'price': '$4'
					},
					{
						'id': 5,
						'name': 'Item 5',
						'price': '$5'
					}
				]

				this.table.bootstrapTable({ data: data });
				//table.bootstrapTable("toggleView");

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
			
			onCustomWidgetResize(width, height) {
				console.log('Resized width, height:::', width, height);
				if (width < 500 ) {
					if (!this.table.bootstrapTable('getOptions').cardView) {
						this.table.bootstrapTable("toggleView");
					}
				} else {
					if (this.table.bootstrapTable('getOptions').cardView) {
						this.table.bootstrapTable("toggleView");
					}
				}
			}

			redraw() {}
		}
	);
})();
