import React, { Component } from 'react'

import Dialog from '../../helpers/dialog.jsx'

export default class Alert extends Component {

	constructor(props) {
		super(props)

		this.state = {
			show: this.props || true
		}
	}

	render() {
		let body = ``
			
		return (
			<Dialog
				id='alert'
				show={this.state.show}
				title={this.props.title}
				body={
					<div>
						<div className='content'>
							<img src='https://vignette.wikia.nocookie.net/habbo/images/6/62/Frank_04.gif/revision/latest?cb=20120908170058&path-prefix=en' className='image' />
							<p>{this.props.message}</p>
							<p className='author'>- {this.props.author}</p>
						</div>
						<div className='footer'>
							<button onClick={this.close} className='button'>Close</button>
						</div>
					</div>
				}
				draggable={true}
				closeable={true}
			/>
		)
	}
}
