(function () {
	let tmpl = document.createElement('template');
	tmpl.innerHTML = `
			<link rel="stylesheet" href="https://kit-free.fontawesome.com/releases/latest/css/free.min.css">
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
			<link rel="stylesheet" href="https://unpkg.com/bootstrap-table@1.18.0/dist/bootstrap-table.min.css">  
			<style>

				table {
					width: 100%;
				}

				table.mobile thead {
					display: none;
				}

				table.mobile td {
					display: flex;
					padding-top: 4px !important;
					padding-bottom: 4px !important;
					border: none !important;
				}

				table.mobile td:last-child {
					padding-bottom: 8px !important;
				}

				table.mobile td:first-child {
					padding-top: 8px !important;
				}

				table.mobile tr {
					border-bottom: 1px solid #dee2e6 !important;
				}

				table.mobile td::before {
					content: attr(label);
					font-weight: bold;
					width: 120px;
					min-width: 120px;
				}
      		</style>
			<table class="table table-bordered table-hover">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td label="ID">123</td>
						<td label="Name">Product 0</td>
						<td label="Price">100$</td>
					</tr>
					<tr>
						<td label="ID">457</td>
						<td label="Name" >Product 78</td>
						<td label ="Price">778$</td>
					</tr>
					<tr>
						<td label="ID">757787</td>
						<td label="Name" >New Brand</td>
						<td label="Price">123$</td>
					</tr>
				</tbody>
			</table>
			
    `;
	customElements.define(
		'com-sap-sample-table',
		class WidgetTable extends HTMLElement {
			constructor() {
				super();
				let shadowRoot = this.attachShadow({ mode: 'open' });
				shadowRoot.appendChild(tmpl.content.cloneNode(true));
				this.header = 'id:name:price';
				this.data = [];
				this.breakingWidht = 500; // Lwss that this width - renderd as mobile. TODO: to be exposed as component propety.
			}

			//Fired when the widget is added to the html DOM of the page
			connectedCallback() {
				this.redraw();
			}

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
				if (width <= this.breakingWidht) {
					this.shadowRoot.querySelector('table').classList.add('mobile');
				} else {
					this.shadowRoot.querySelector('table').classList.remove('mobile');
				}
			}

			setHeader(header) {
				/*
				Sets headers of the table columns. Inpur fromat - string with fields separated by semicolumn ':':
				header1:header2:header3....:headerN
				*/
				console.log('New header received:::', header);
				this.header = header;
			}

			setData(data) {
				/*
			data in format of array of strings;
			Every string represent row in the table;
			Fields of the row are separated by semicolumn;
			The amount of the fields in every row, and their column name should be corellated with thr headr fields
			[
				'field1:field2:field3 ... :fieldN',
				'field1:field2:field3 ... :fieldN',
				'field1:field2:field3 ... :fieldN'
			]
			*/

				console.log('Set new data:::', data);
				let headerArray = this.header.split(':');
				let dataArray = [];
				data.forEach((stringDataElement) => {
					let stringDataArray = stringDataElement.split(':');
					let newDataElement = {};
					stringDataArray.forEach((item, index) => {
						newDataElement[headerArray[index]] = item;
					});
					dataArray.push(newDataElement);
				});

				this.data = dataArray;

				console.log('New data array:::', this.data);
			}

			redraw() {
				// Cal when changed size (width) - to check and possibly toggle dard/dable style
				let width = this.shadowRoot.querySelector('table').offsetWidth;
				let height = 1; // hot usable now
				console.log('Initial width, height:::', width, height);
				this.onCustomWidgetResize(width, height);
			}

			reBuildTable() {
				let that = this;
				let table = this.shadowRoot.querySelector('table');

				// Delete old header and body
				table.deleteTHead();
				let tbody = document.querySelector('tbody');
				if (tbody) {
					tbody.parentNode.removeChild(tbody);
				}

				// Create new header
				let tableHead = table.createTHead();
				let row = tableHead.insertRow(0);
				let headers = that.header.split(':');
				headers.forEach((headerName, index) => {
					let cell = row.insertCell(index);
					cell.innerText = headers[index];
				});

				// Create new body
				this.data.forEach((dataItem, index) => {
					let row = tbody.insertRow(index);
					headers.forEach((header, index) => {
						let cell = row.insertCell(index);
						cell.setAttribute('label', header);
						cell.innerText = dataItem[header];
					});
				});
			}
		}
	);
})();
