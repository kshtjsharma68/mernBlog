import React, { Component } from 'react';
import { Section, Box, Container, Image, Button } from "react-bulma-components/full";
import { Link } from 'react-router-dom';

export default class noMatch extends Component {
	render() {
		return (
			<div>
				<Section>
					<Container style={{textAlign: 'center'}}>
						<Image src={process.env.PUBLIC_URL+'/Images/404.png'} />
						<Button style={{width: '200px', color: 'white', backgroundColor: '#136fbf', height: '50px'}} onClick={() => window.location = '/'}>
							Back to Home
						</Button>
					</Container>
				</Section>
			</div>
			)
	}
}