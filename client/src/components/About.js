import { useEffect, useState } from 'react'
import { HeartFilled, BookFilled } from '@ant-design/icons'
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const content = [{
	name: 'Education',
	link: 'https://satsang-foundation.org/satsang-foundation/#symple-tab-education',
	image: null
}, {
	name: 'Health',
	link: 'https://satsang-foundation.org/satsang-foundation/#symple-tab-health',
	image: null
}, {
	name: 'Environment',
	link: 'https://satsang-foundation.org/satsang-foundation/#symple-tab-environment',
	image: null
}, {
	name: 'Manav Ekta Mission',
	link: 'https://satsang-foundation.org/satsang-foundation/#symple-tab-manav-ekta-mission',
	image: null
}, {
	name: 'Outreach',
	link: 'https://satsang-foundation.org/satsang-foundation/#symple-tab-outreach',
	image: null
}, {
	name: 'Bharat Yoga Vidya Kendra',
	link: 'https://satsang-foundation.org/satsang-foundation/#symple-tab-bharat-yoga-vidya-kendra',
	image: null
}, {
	name: 'The Sacred Grove',
	link: 'https://satsang-foundation.org/satsang-foundation/#symple-tab-the-sacred-grove',
	image: null
}]

function About() {

	const [showPhil, setShowPhil] = useState('none')
	const [showPresident, setShowPresident] = useState('none')
	const [showUpcoming, setShowUpcoming] = useState('none')

	useEffect(() => {
		var url = window.location.href
		var splitingForPhil = url.split('#')[1]
		switch (splitingForPhil) {
			case 'phil': setShowPhil('block')
				setShowPresident('none')
				setShowUpcoming('none')
				break;
			case 'president': setShowPhil('none')
				setShowPresident('block')
				setShowUpcoming('none')
				break;
			case 'upcoming': setShowPhil('none')
				setShowPresident('none')
				setShowUpcoming('block')
				break;
			default: setShowPhil('none')
				setShowPresident('none')
				setShowUpcoming('none')
				break;
		}
	}, [])

	return (
		<>

			<div className="ex-basic-1 pt-5 pb-5" style={{ marginTop: '30px' }}>
				<div className="container">
				<div className="row" >
                        <div className="col-xl-10 offset-xl-1" >
                            <h1 style={{textAlign:'center', marginTop:'50px',fontFamily: 'Poppins', color: 'darkblue',fontSize: '32px'}}>About Amma</h1>
                        </div>
                    </div>
					<div className="row" style={{marginTop:'-62px'}}>
						<div className="col-lg-12">
							<img className="img-fluid mt-5 mb-3" src="../images/aboutmanjamma1.jpeg" style={{ width: '100%', height: '500px' }} alt="smart uniforms" />
						</div>
					</div>
				</div>
			</div>
			<div className="ex-basic-1 pt-4" style={{ marginTop: '-50px' }}>
				<div className="container">
					<div className="row">
						<div className="col-xl-10 offset-xl-1">
							<div className="text-container">
								<h1 className="h1-large" style={{ fontFamily: 'Poppins', color: 'darkblue', fontSize: '24px' }}>Our Mission</h1>
								<p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
									Manjamma Jogathi (born Manjunatha Shetty; 20 May 1957), is an Indian Kannada theatre actress, singer and dancer of Jogathi Nritya, a folk dance form of North Karnataka
								</p>
								<p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
									 In 2019, she became the first transgender woman to be the president of Karnataka Janapada Academy, state's top institution for folk arts.[1][2][3] In January 2021, Government of India announced Padma Shri award for her contribution to the field of folk arts.[4][5]
								</p>
							</div>

							<div className="text-container">
								<p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
									Jogathi was born as Manjunatha Shetty in Kallukamba village in Karnataka's Bellary district to Hanumantaiah and Jayalakshmi.[6] She was married to Jogappa, a Hindu deity owing to a ritual and was not allowed to return home
								</p>
								<p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
									She was then known as Manjamma Jogathi. After leaving her house aged 15, she identified herself as a woman. Having completed education only till Class 10, she resorted to begging.
								</p>
								<p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
									During this time, she was sexually abused. Later, a father and son duo introduced her to dancing and took her to dance teacher Kallava Jogathi, where she learnt the Jogathi dance
								</p>
								<p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
									Manjamma became a permanent dancer in Kallavva's Jogathi dance group, performing in different parts of India.[9] After Kallavva's death, Manjamma took over the troupe and made the dance popular among the people. In 2010, she received the Rajyotsava award by the Karnataka Government. She was awarded Padma Shri, fourth highest civilian award of Republic of India in 2021
								</p>
								<p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
									She was first appointed as the member of the Karnataka Jaanapada Academy and later as the president of the same institution by the State government, which made her the first trans woman to head the top institution for Performing arts in the state
								</p>
								

							</div>
							<div style={{ marginBottom: '45px', display: showPhil }} id="phil">

							</div>
							<div className="text-container" >
								<h1 className="h1-large" style={{ fontFamily: 'Poppins', color: 'darkblue', fontSize: '24px' }}>Accolodes</h1>
								<p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
								2021 - Padma Shri - fourth highest civilian award by Government of India
2010 - Rajyotsava award by Karnataka Government[11]
Life story of Manjamma has added in Karnataka Folklore University and Karnataka State Women's University syllabus for its students of Bachelor of Arts.[12][13]
2006 - Karnataka Janapada Academy Award.
								</p>

							</div>
						


						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default About
