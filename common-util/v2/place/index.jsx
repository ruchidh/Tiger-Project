import React, { Component } from 'react';

import {
	PlaceText, Title, SubTitle, Desc, SubDesc, PopText, Icon,
} from './styles';

class Place extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	render() {
		const {
			mainStyle,
			title,
			bsTitle,
			subTitle,
			bsSubTitle,
			bsDesc,
			desc,
			info,
			subDesc,
			bsSubDesc,
		} = this.props;
		const { open } = this.state;
		return (
			<PlaceText style={mainStyle}>
				{title ? <Title style={bsTitle}>{title}</Title> : null}
				{subTitle ? <SubTitle style={bsSubTitle}>{subTitle}</SubTitle> : null}
				{desc ? (
					<Desc style={bsDesc}>
						{desc.length > 60 ? `${desc.replace(/^(.{40}[^\s]*).*/, '$1')}...` : desc}
						{info ? (
							<PopText isOpen={open} body={info || ''} preferPlace="below">
								<Icon
									src="/static/app/images/info.svg"
									onMouseOver={() => {
										(document.body.style.overflow = 'hidden'), this.setState({ open: true });
									}}
									onFocus={() => {
										(document.body.style.overflow = 'hidden'), this.setState({ open: true });
									}}
									onMouseOut={() => {
										(document.body.style.overflow = 'auto'), this.setState({ open: false });
									}}
									onBlur={() => {
										(document.body.style.overflow = 'auto'), this.setState({ open: false });
									}}
									alt=""
								/>
							</PopText>
						) : null}
					</Desc>
				) : null}
				{subDesc ? (
					<SubDesc style={bsSubDesc}>
						{subDesc.length > 60 ? `${subDesc.replace(/^(.{40}[^\s]*).*/, '$1')}...` : subDesc}
					</SubDesc>
				) : null}
			</PlaceText>
		);
	}
}

export default Place;
