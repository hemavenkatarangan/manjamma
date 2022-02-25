import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Modal, Button, Table, Switch } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { isArray } from 'jquery';
import axios from 'axios';

const leftData = {
    NEW_COURSE: 'NEW_COURSE',
    NEW_EVENT: 'NEW_EVENT',
}

const errStyle = {
    color: 'red',
    textAlign: 'center',
    fontSize: '.7rem'
}

const questionTypes = [
    {type: '', name: ''},
    {type:'Descriptive', name:'Descriptive'},
    {type:'Selective', name:'Selective'},
    {type:'Multiple Choice', name:'Multiple Choice'}
]

const PropertyTypes = [
    {type: '', name: ''},
    {type:'doc', name:'Document'},
    {type:'text', name:'Text'},
]

const questions = []
const addProperties = []

function Admin() {
    const user = useSelector(state => state.auth)
    const hello = useSelector(state => state)
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [selectedState, setSelectedState] = useState('')
    const [course, setcourse] = useState({
        name:'',
        autoValidate: false,
        qa:[],
        additionalProperties:[],
        autoValidate: false,
    })
    const [property, setProperty] = useState({
        id:0,
        name:'',
        type:''
    })
    const [listQa, setListQa] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isPropertiesModalVisible, setisPropertiesModalVisible] = useState(false)
    const [listProperty, setListProperty] = useState([])
    const [data, setData] = useState({
        id:0,
        question: '',
        questionType: '',
        expectedAnswer: '', 
        preDefinedValues : '',
        isAutoValidated: false,
        isMandatory: false,
    })
    const [descValue, setDescValue] = useState('')
    const errors = useSelector(state => state.errors)

    
    useEffect(() => {
        if (user.isAuthenticated) {
            setAuthenticated(true)
        } else {
            setAuthenticated(false)
        }
    })

    const selectingContent = (params) => {
        if (params === leftData.NEW_COURSE) {
            setSelectedState(leftData.NEW_COURSE)
        } else if (params === leftData.NEW_EVENT) {
            setSelectedState(leftData.NEW_EVENT)
        }
    }

    const onCourseChange = (e) => {
        const { id, value } = e.target;
        setcourse(course => ({ ...course, [id]: value }));
    }

     const showModal = () => {
            setData({
                id: data.id + 1,
                question: '',
                questionType: '',
                expectedAnswer: '', 
                preDefinedValues : '',
                isAutoValidated: false,
                isMandatory: false,
            })
            setIsModalVisible(true);
        };

        const handleOk = (index) => {
            if(!isArray(data.expectedAnswer)){
                let expec = data.expectedAnswer.split(',')
                let pre = data.preDefinedValues.split(',')
            var obj = {
                id: data.id + 1,
                question: data.question,
                questionType: data.questionType,
                expectedAnswer: expec, 
                preDefinedValues : pre,
                isAutoValidated: data.isAutoValidated,
                isMandatory: data.isMandatory,
            }
            questions.push(obj)
            console.log(questions)
            setListQa([...questions])
            } else {
                let expec = isArray(data.expectedAnswer) ? data.expectedAnswer : data.expectedAnswer.split(',')
                let pre = isArray(data.preDefinedValues) ? data.preDefinedValues : data.preDefinedValues.split(',')
                for(let i = 0; i < questions.length; i++) {
                    if(data.id === questions[i].id) {
                        questions[i].id =  data.id
                        questions[i].question=data.question
                        questions[i].questionType= data.questionType
                        questions[i].expectedAnswer=expec
                        questions[i].preDefinedValues = pre
                        questions[i].isAutoValidated= data.isAutoValidated
                        questions[i].isMandatory= data.isMandatory
                    }
                }
                setListQa(questions)
            }
            

            setIsModalVisible(false);
        };

        const handleCancel = () => {
            setIsModalVisible(false);
        };

        const handleChage = (e, type) => {
             var id = type ? type : ''
             var value = e.target ? e.target.value : e
            if(e.target) {
                id = e.target.id
                value = e.target.value
            }
            setData(qa => ({ ...qa, [id]: value}));

        }

        const deleteQuestion = (e) => {
            var arr = listQa
            for(let i = 0; i < arr.length; i++) {
                if(e.id === arr[i].id) {
                    arr.splice(arr[i], 1)
                    break
                }
            }
            
            setListQa([...arr])
            console.log(listQa)
        }

        const editQuestion = (data) => {
            setData(data)
            console.log(data)
            setIsModalVisible(true);
        }

        const columns = [
            {
              title: 'Name',
              dataIndex: 'question',
              key: 'question',
            },
            {
              title: 'Question Type',
              dataIndex: 'questionType',
              key: 'questionType',
            },
            {
              title: 'Expected Answer',
              dataIndex: 'expectedAnswer',
              key: 'expectedAnswer',
            },
            {
              title: 'Predefined Values',
              key: 'preDefinedValues',
              dataIndex: 'preDefinedValues',
            },
            {
              title: 'Action',
              key: 'action',
              render: (id, data) => <> 
              <EditOutlined onClick={(e) => {editQuestion(data)}} /> {" "} <DeleteOutlined onClick={(e) => deleteQuestion(data)} />
              </>
            },
          ];

          const propertyColumns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: 'Type',
              dataIndex: 'type',
              key: 'type',
            },
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => <> 
                <DeleteOutlined onClick={(e) => deletePropertyQuestion(record)} />
              </>
            },
          ];

        //   const editPropertyQuestion = (data) => {
        //       setProperty(data)
        //       setisPropertiesModalVisible(true)
        //   }

          const deletePropertyQuestion = (data) => {
              var propArray = listProperty
              let index = propArray.findIndex(a => a.name === data.name);
            //   for(let i = 0; i < propArray.length; i++) {
            //       if(data === propArray[i].id) {
            //           propArray.splice(data[i], 1)
            //           break
            //       }
            //   }
            propArray.splice(index, 1)
              setListProperty([...propArray])
          }

          const handlePropertiesOk = () => {
              var obj = {
                  id: property.id + 1,
                  name: property.name,
                    type: property.type,              }
              addProperties.push(obj)
              setListProperty([...addProperties])
              setisPropertiesModalVisible(false)
          }

          const handlePropertiesCancel = () => {
            setisPropertiesModalVisible(false)
        }

        const showAdditionalPropertiesModal = () => {
            setProperty({
                name:'',
                type:''
            })
            setisPropertiesModalVisible(true)
        }
   
        const handlePropertyChage = (e) => {
            const { id, value} = e.target
            setProperty(qa => ({ ...qa, [id]: value}));
        }

        const saveCourse = () => {
            var obj = { 
                name : course.name,
                autoValidate: false,
                qa: listQa,
                additionalProperties: listProperty
            }

            axios.post('courses/create', obj)
            .then(res => console.log(res))
            .catch(err => err)
        }

        const onDescriptionChange = (e) => {
            console.log(e)
        }

    return (
        <>
            <header className="ex-header">
                <div className="container">
                    <div className="row">
                        <br />
                        <div className="col-xl-12" style={{textAlign: 'center'}}>
                            <h1>Hey Hi {user.user.name}, Welcome to Admin Panel!</h1>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container" style={{marginTop:'12px'}}>
            <div className="row"> 
                <div className="col-xl-4">
                    <div className="row"> 
                        <Button type="primary" shape="round" size="large" onClick={(e) => selectingContent(leftData.NEW_COURSE)}>Add Course</Button>
                    </div>
                    <br />
                    <div className="row"> 
                        <Button type="primary" shape="round" size="large" onClick={(e) => selectingContent(leftData.NEW_EVENT)}>Add Event</Button>
                    </div>
                </div>
                <div className='col-xl-8'>
                    {
                        selectedState === leftData.NEW_COURSE ? 
                        <> 
                            <div className="col-xl-12" style={{textAlign: 'center'}}>
                                <h1>Add Course</h1>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control-input" id="name" onChange={(e) => onCourseChange(e)} required />
                                <label className="label-control" htmlFor="name">Name</label>
                                <p style={errStyle}>{errors.name}</p>
                            </div>
                            <div>
                            {/* <RichTextEditor
                                    value={descValue}
                                    onChange={onDescriptionChange}
                                /> */}
                            </div>
                                <div className="form-group"><Button type="primary" shape="round" name="Add question" onClick={(e) => showModal(e)}>Add Question</Button> </div>
                            <div className="form-group">
                                <Table columns={columns} dataSource={listQa} />
                            </div>
                            <div className="form-group">
                                <Button type="primary" shape="round" name="Add Properties" onClick={(e) => showAdditionalPropertiesModal(e)}>Add Additional Properties</Button> 
                            </div>
                            <div className="form-group">
                                <Table columns={propertyColumns} dataSource={listProperty} />
                            </div>
                            <div className="form-group">
                            <Button type="primary" shape="round" name="save" onClick={(e) => saveCourse(e)}>Save Course</Button>
                            </div>
                            {/* {listQa.map((data, index) => {
                                return <><p><span>{index + 1} : </span> {data.question}</p> <br />
                                <p><span>Type : </span> {data.questionType}</p> <br /> 
                                EXPECTED : {data.expectedAnswer.map(d => {return <><p>{d}</p> {' '} </> } )} <br/>
                                PREDEFINED : {data.preDefinedValues.map(d => {return <><p>{d}</p> {' '} </> } )}
                                
                                <Button type="primary"  onClick={(e) => deleteQuestion(index)}>Delete</Button> {' '} <button onClick={(e) => editQuestion(data)}>Edit</button>
                                </>
                            })} */}      
                            
                            </> : selectedState === leftData.NEW_EVENT ?
                        <> 
                            <div className="col-xl-12" style={{textAlign: 'center'}}>
                                <h1>Add Event</h1>
                            </div>
                            <p> selected Event</p>
                        </>
                        :
                        'Nothing Much'
                    }
                </div>
                </div>
            </div>
            <>
            <Modal title="Add Question" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                            <div className="form-group">
                                <input type="text" className="form-control-input" id="question" onChange={(e) => handleChage(e)} value={data.question} required />
                                <label className="label-control" htmlFor="question">Question</label>
                                <p style={errStyle}>{errors.Question}</p>
                            </div>
                            <div className="form-group">
                                <select type="select" className="form-control-input" id="questionType" onChange={(e) => handleChage(e)} value={data.questionType}> 
                                {questionTypes.map((each, index) => {
                                    return <option value={each.type} key={index}>{each.name}</option>}
                                )}
                                </select>
                                <label className="label-control" htmlFor="name">Question Type</label>
                                <p style={errStyle}>{errors.questionType}</p>
                            </div>
                            <div className="form-group">
                                <input type="textarea" className="form-control-input" id="expectedAnswer" onChange={(e) => handleChage(e)} value={data.expectedAnswer} required />
                                <label className="label-control" htmlFor="expectedAnswer">Expected Answer</label>
                                <p style={errStyle}>{errors.expectedAnswer}</p>
                            </div>
                            <div className="form-group">
                                <input type="textarea" className="form-control-input" id="preDefinedValues" onChange={(e) => handleChage(e)} value={data.preDefinedValues} required />
                                <label className="label-control" htmlFor="preDefinedValues">PreDefined Values</label>
                                <p style={errStyle}>{errors.preDefinedValues}</p>
                            </div>
                            <div className="form-group">
                                <Switch defaultChecked={data.isAutoValidated} id="isAutoValidated" onChange={(e) => handleChage(e, 'isAutoValidated')} />
                                <label className="label-control" htmlFor="isAutoValidated">Is Auto Validate</label>
                            </div>
                            <div className="form-group">
                                <Switch defaultChecked={data.isMandatory} id="isMandatory" onChange={(e) => handleChage(e, 'isMandatory')} />
                                <label className="label-control" htmlFor="isMandatory">Is Mandatory</label>
                            </div>
            </Modal>
            <Modal title="Additional Properties" visible={isPropertiesModalVisible} onOk={(e) => handlePropertiesOk(e)} onCancel={(e) => handlePropertiesCancel(e)}>
                            <div className="form-group">
                                <input type="text" className="form-control-input" id="name" onChange={(e) => handlePropertyChage(e)} value={property.name} required />
                                <label className="label-control" htmlFor="name">Name</label>
                                <p style={errStyle}>{errors.name}</p>
                            </div>
                            <div className="form-group">
                                <select type="select" className="form-control-input" id="type" onChange={(e) => handlePropertyChage(e)} value={property.type}> 
                                {PropertyTypes.map((each, index) => {
                                    return <option value={each.type} key={index}>{each.name}</option>}
                                )}
                                </select>
                                <label className="label-control" htmlFor="type">Type</label>
                                <p style={errStyle}>{errors.type}</p>
                            </div>
            </Modal>
            </>
        </>
    )
}

export default Admin