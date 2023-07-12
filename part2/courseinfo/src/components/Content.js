import Part from './Part'

const Content = ({parts}) => {

	return (
		<div>
			{parts.map(part => (
				<Part key={part.id} name={part.name} exercises={part.exercises}/>
			))}
			<h2>total of {
				parts
				.map(part => part.exercises)
				.reduce((total, exercises) => total+exercises, 0)
			} exercises
			</h2>
		</div>
	)	
}

export default Content