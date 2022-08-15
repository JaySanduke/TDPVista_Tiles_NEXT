import React from 'react'

const Progress_bar = ({bgcolor,progress,height,display}) => {
	
	const Parentdiv = {
		height: height,
		width: '100%',
		backgroundColor: '#d7d7d7',
		borderRadius: 40,
		marginTop:10,
        marginbottom:10,
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: '#2e3c5f',
	borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 20,
		color: 'white',
		fontWeight: 500,
        display: display,
	}
		
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
		<span style={progresstext}>{`${progress}%`}</span>
	</div>
	</div>
	)
}

export default Progress_bar;
