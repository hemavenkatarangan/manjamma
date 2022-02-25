import { useEffect, useState} from 'react'
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

    useEffect(() => {
        var url = window.location.href
        var splitingForPhil = url.split('#')[1]
        if(splitingForPhil) {
            setShowPhil('block')
        } else {
            setShowPhil('none')
        }
    }, [])

    return (
        <>
           
            <div className="ex-basic-1 pt-5 pb-5" style={{ marginTop: '30px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <img className="img-fluid mt-5 mb-3" src="../images/AboutUs.png" style={{ width: '100%', height: '500px' }} alt="smart uniforms" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ex-basic-1 pt-4" style={{marginTop: '-50px'}}>
                <div className="container">
                    <div className="row">
                        <div className="text-container" style={{ marginTop: '20px' }}>
                            <h1 className="h1-large" style={{ fontFamily: 'Poppins', color: '#004AAD',fontSize: '24px' }}>Our Mission</h1>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                                Our mission is to bring about change in the minds and bodies of people so that they can discover the full potential of their mental and physical faculties through Yoga.
                            </p>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                                Our goal is to demystify and present Yogic teachings in a simple, relevant way that is applicable in modern times. We aim to teach yoga as a practical science, making it accessible to all regardless of their background or where they live.
                            </p>
                        </div>

                        <div className="text-container" style={{ marginTop: '20px' }}>
                            <h1 className="h1-large" style={{ fontFamily: 'Poppins', color: '#004AAD',fontSize: '24px' }}>About Bharat Yoga Vidya Kendra</h1>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                                Sri M has founded the Bharat Yoga Vidya Kendra (BYVK), an initiative of the Satsang Foundation, with the vision of spreading the ancient science of Yoga for the wellbeing of all.
                            </p>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                                Sri M is a living yogi, who from the age of nine has been guided on the path of Yoga by many teachers. Sri M was initiated into the Nath Sampradaya by his Guru, Sri Maheshwarnath Babaji at age 19. The Nath lineage has been known to preserve the science of Yoga over the millenia, and the Naths have authored many of the ancient yogic texts that are still referenced today.
                            </p>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                                Sri M has practiced and understood a wide range of spiritual and yogic practices, such as those in Hatha Yoga, Kriya Yoga, and Yoga Tantra from different lineages and traditions. He has been guiding many practitioners and seekers for decades.
                            </p>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                                BYVK functions under the direct guidance of Sri M. The teachings offered by us are rooted in ancient yogic texts such as the Yoga Sutras of Patanjali, Haṭha Yoga Pradipika, Shiva Samhita and Yoga Upanishads.
                            </p>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                                BYVK is designed like a modern day Gurukula, where these time tested teachings are taught in a way that is applicable to today’s society. BYVK recognises that the needs and challenges of every individual are different, thus each course offers practical methodologies to help the individual explore deeper aspects of themselves in a way that is relevant to them
                            </p>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                                Bharat Yoga Vidya Kendra is recognised by the Government of India and Ministry of AYUSH as an official Yoga Training Center.
                            </p>

                        </div>
                        <div style={{ marginBottom: '45px', display: showPhil}} id="phil">

                        </div>
                        <div className="text-container" style={{ marginTop: '20px' }} >
                            <h1 className="h1-large" style={{ fontFamily: 'Poppins', color: '#004AAD',fontSize: '24px' }}>Our Yoga Philosophy</h1>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                                “Yoga is a practice by which any human being who is earnestly interested can transform his or her life in a positive way. Yoga has a much vaster implication than just postures. It starts with the body, goes to the mind and proceeds to the spirit.”
                            </p>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                                ~Sri M
                            </p>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                                In modern times, many have come to associate Yoga with Asana, considering it to be a series of exercises to improve one's health and to acquire a beautiful body. While others associate Yoga as something that belongs to a particular religion or a culture.
                            </p>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                                Our aim at BYVK is to make Yoga accessible to anyone who is looking for ways to improve their life and turn within. Yoga is a non-denominational science that helps us understand our true essence. It takes a step by step approach that starts with the body, proceeds to the mind and finally to the spiritual level.
                            </p>

                        </div>
                        <div className="text-container" style={{ marginTop: '20px' }}>
                            <h1 className="h1-large" style={{ fontFamily: 'Poppins', color: '#004AAD' ,fontSize: '24px'}}>Our Values</h1>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                                Our core values are as follows:
                            </p>
                            <h3 className="h3-large" style={{ fontFamily: 'Poppins', color: '#004AAD' ,fontSize: '24px'}}>Yoga is Scientific and practical</h3>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                                Yoga is a scientific and systematic way to understand the true essence of the self. However, unlike many sciences that are inaccessible to the common person, Yoga offers practical tools that any human can use to experiment and verify the results on their own.
                            </p>
                            <h3 className="h3-large" style={{ fontFamily: 'Poppins', color: '#004AAD' ,fontSize: '24px'}}>Yoga as Non-denominational and Non-discriminatory</h3>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                                We teach Yoga as a non-denominational practice that can be done by anybody. We offer Yoga to people of all backgrounds and honour their existing religious, cultural and backgrounds. Anyone who sincerely and dedicatedly practices, gets the desired results.
                            </p>
                            <h3 className="h3-large" style={{ fontFamily: 'Poppins', color: '#004AAD' ,fontSize: '24px'}}>Discovering the self through Yoga</h3>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                                Yoga is a step by step way for each individual to discover themselves as they are right now. Yogic practices enable the practitioner to cultivate a sharp and unprejudiced mind, allowing the practitioner to see themselves in a new light.
                            </p>
                            <h3 className="h3-large" style={{ fontFamily: 'Poppins', color: '#004AAD' ,fontSize: '24px'}}>Every individual matters</h3>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                            We believe that personal transformation requires an individualised approach. We specifically design our class sizes to be small, and train our teachers to be attentive, so that each student receives the appropriate attention, care and support that nurtures them to grow.
                            </p>
                            <h3 className="h3-large" style={{ fontFamily: 'Poppins', color: '#004AAD' ,fontSize: '24px'}}>Samvaad</h3>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                                Deep understanding can only be cultivated through Saamvaad, dialogue. Our approach is to teach the Yogic path in a way that encourages enquiry, exploration and dialogue between participants and the teacher. We believe that transformation cannot occur through blindly following what a teacher says, but by exploring the teachings for oneself.
                            </p>
                            <h3 className="h3-large" style={{ fontFamily: 'Poppins', color: '#004AAD' ,fontSize: '24px'}}>The Yogashala and BYVK Location</h3>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                            The Yogashala was inaugurated on 11 December 2020. In a simple ceremony, Sri M consecrated the main deity, Rishi Patanjali at the Yogashala’s temple. Built under Sri M’s personal supervision, the Yogashala is an aesthetically designed, naturally lit and well-ventilated hall that can comfortably accommodate a class of 25 yoga practitioners. It offers a safe and nurturing  space for students to learn, practise, and experience Yoga.
                            </p>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                            BYVK is located at the Satsang Foundation Campus, on the outskirts of Madanapalle. The Ashram is surrounded by hills on all sides, and the Ashram premises consists of beautiful trees, flowers, birds, cows, a small pond with lilies and fish.
                            </p>
                            <div className="text-container" style={{ marginTop: '20px' }}>
                            <h1 className="h1-large" style={{ fontFamily: 'Poppins', color: '#004AAD',fontSize: '24px' }}>About the Satsang Foundation</h1>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                            Bharat Yoga Vidya Kendra is an initiative of The Satsang Foundation.
                            </p>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                            The Satsang Foundation, established by Sri M, is a meeting point for spiritual seekers of all persuasions.
                            </p>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                            The key objectives and activities of the Foundation derive from the dual intents of concern for mankind and the search for truth. Sri Ms teachings and the work of the foundation are designed to help people to explore ways to expand their spiritual horizons and lead a multi-dimensional life. The Satsang Foundation also extends a helping hand to the less privileged of society.
                            </p>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                            Some of The Satsang Foundation’s projects include the Satsang Vidyalaya, Satsang Rural School, Chanda Satsang Vidyalaya, Sacred Grove Wellnes & Study Centre, MyTree, Jal Seva, Swasthya Kendra, Satsang Seva Mission and Manav Ekta Mission.
                            </p>
                            <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                            To learn more you can <a href="https://satsang-foundation.org/">visit their website.</a>
                            </p>

                        </div>
                        </div>

                        {/* <div className="col-xl-10 offset-xl-1">
                            <p style={{textAlign:'justify'}}>
                            Bharat Yoga Vidya Kendra – founded by Sri M, to teach authentic, traditional Yoga for holistic well-being to all aspirants. A group of dedicated people who aim to spread the ancient science of Yoga to one and all
                            </p>
                            <p style={{textAlign:'justify'}}>
                            Yoga has been thoroughly misunderstood over the years as something that is only limited to Asanas and acquiring a beautiful body and something belonging to a religion or a culture.
                            </p>
                            <p style={{textAlign:'justify'}}>
                            We want to change that perception and make people aware that Yoga is a science. It is a simple, non-denominational and practical step by step approach that starts with the body, proceeds to the mind and finally to the spiritual level.
                            </p>
                            <p style={{fontWeight:'bold', textAlign:'center'}}>
                            <u>About Satsang Foundation</u>
                            </p>
                            <p style={{textAlign:'justify'}}>
                            The Satsang Foundation—established by Sri M, is a meeting point for spiritual seekers of all persuasions. The Foundation actively conceptualizes, organises and executes activities and initiatives that bring true reformation and change in human minds for a better, more inclusive and truly united world.
                            </p>
                            <p style={{textAlign:'justify'}}>
                            The key objectives and activities of the Foundation derive from the dual intents of concern for mankind and the search for truth—helping people to explore ways and means to expand their spiritual horizons and lead a multi-dimensional life. The Satsang Foundation also extends a helping hand to the less privileged of society.
                            </p>
                            <hr />
                            <p style={{fontWeight:'bold', textAlign:'center'}}>
                             Key Objectives
                            </p>
                           <hr />
                            <p style={{textAlign:'justify'}}>
                            <HeartFilled style={{ fontSize: '22px', marginTop:'2rem'}}/> &nbsp;To explore the common core, principles and teachings of all religions and to cultivate the habit of living harmoniously with all sects of people.
                            </p>
                            <p style={{textAlign:'justify'}}>
                            <HeartFilled style={{ fontSize: '22px', marginTop:'2rem'}}/> &nbsp;To bring together serious seekers of the Truth and investigate the true essence of religious and mystical teachings.
                            </p>
                            <p style={{textAlign:'justify'}}>
                            <HeartFilled style={{ fontSize: '22px', marginTop:'2rem'}}/> &nbsp;To engage in charitable activities which benefit the less privileged human beings like, feeding the poor, grant of educational scholarships, providing free medical aid and helping old-age homes etc.
                            </p>
                            <hr />
                            <p style={{fontWeight:'bold', textAlign:'center'}}>
                            Initiatives by The Satsang Foundation
                            </p>
                           <hr />
                           <p style={{textAlign:'justify'}}>
                           Satsang Foundation, based on its objectives, has contributed its mite for all-round and holistic improvement of the society. Over the years, Sri M’s efforts as a social reformer and educationist have given rise to many successful initiatives in Education, Health & Environment.
                            </p>
                            <hr />
                            <div className="row">
                                {content.map((data, index) => {
                                    return <div className="col-lg-4"><Link to={data.link}> <Card
                                    key={index}
                                    hoverable
                                    style={{ width: '100%', marginTop: '20px'}}
                                    cover={<img alt="example" src={`https://dummyimage.com/600x400/000/fff&text=${data.name}`} />}
                                  >
                                    <Meta title={data.name} style={{textAlign:'center', font:'400 1rem/1.625rem "Open Sans", sans-serif'}} />
                                  </Card>
                                  </Link>
                                  </div>
                                })}
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
