const Course = require('../models/course.model.js');
const QAAdmin = require('../models/qa.admin.model');
const AdditionalProperty = require('../models/additionalproperty.model');

module.exports = {

    allCourses: async (req, res, next) => {
        try {
            const courses = await Course.find({});
            res.status(200).json(courses);
        }
        catch (err) {
            next(err);
        }

    },

    getCourse: async (req, res) => {
        const { courseId } = req.params;
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).send({
                message: "Course not found with id " + req.params.courseId
            });
        }
        res.status(200).json(course);
    },

    getCompleteCourseDetails: async (req, res) => {
        const { courseId } = req.params;
        const course = await Course.findById(courseId).populate('qa').populate('additionalProperties');
        if (!course) {
            return res.status(404).send({
                message: "Course not found with id " + req.params.courseId
            });
        }
        res.status(200).json(course);
    },

    createCourse: async (req, res) => {

        const newCourse = new Course(req.body);
        const course = await newCourse.save();
        res.status(200).json(course);
    },

    createFullCourse: async (req, res) => {

        const { name } = req.body;
        const { autoValidate } = req.body;
        const { qa } = req.body;
        const { additionalProperties } = req.body;

        const newCourse = new Course({ name: name, autoValidate: autoValidate });
        let course = await newCourse.save();


        if (qa) {
            const qas = qa.map(function (element) {
                console.log(element);
                const newQA = new QAAdmin(element);
                newQA.course = course._id;
                return newQA;

            });

            const qs = await Promise.all(qas.map(qa=>qa.save()));
            console.log(qs);
            course.qa = qs;
            course = await course.save();


            // qa.forEach(async (element) => {
            //     console.log(element);
            //     const newQA = new QAAdmin(element);
            //     newQA.course = course._id;
            //     const newqa = await newQA.save();
            //     course.qa.push(newqa);
            //     course = await course.save();
            // });
        }

        if (additionalProperties) {
            const aps = additionalProperties.map(function (element) {
                console.log(element);
                const newAP = new AdditionalProperty(element);
                newAP.course = course._id;
                return newAP;

            });

            const ap = await Promise.all(aps.map(as=>as.save()));
            console.log(ap);
            course.additionalProperties = ap;
            course = await course.save();

            // additionalProperties.forEach(async (element) => {
            //     console.log(element);
            //     const newAP = new AdditionalProperty(element);
            //     newAP.course = course._id;
            //     const newap = await newAP.save();
            //     course.additionalProperties.push(newap);
            //     course = await course.save();
            // });
        }
        res.status(200).json(course);
    },

    updateCourse: async (req, res) => {
        const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
        res.status(200).json(course);
    },

    replaceCourse: async (req, res) => {
        const { courseId } = req.params;
        const course = req.body;
        const resultCourse = await Course.findByIdAndUpdate(courseId, course, { new: true });
        res.status(200).json(resultCourse);
    },

    removeCourse: async (req, res) => {
        const course = await Course.findByIdAndRemove(req.params.courseId);
        if (!course) {
            return res.status(404).send({
                message: "Course not found with id " + req.params.courseId
            });
        }
        res.status(200).json({ message: 'deleted the course successfully', deletedCourse: course });
    },

    getCourseQuestions: async (req, res) => {
        const course = await Course.findById(req.params.courseId).populate('qa');
        if (!course) {
            return res.status(404).send({
                message: "Course not found with id " + req.params.courseId
            });
        }

        res.status(200).json(course.qa);
    },

    createCourseQuestion: async (req, res) => {
        const course = await Course.findById(req.params.courseId);
        if (!course) {
            return res.status(404).send({
                message: "Course not found with id " + req.params.courseId
            });
        }
        const newQA = new QAAdmin(req.body);
        const qa = await newQA.save();
        course.qa.push(qa);
        const updatedCourse = await course.save();
        res.status(200).json(updatedCourse);
    },

    getCourseQuestion: async (req, res) => {
        const course = await Course.findById(req.params.courseId);
        if (!course) {
            return res.status(404).send({
                message: "Course not found with id " + req.params.courseId
            });
        }
        const qa = await QAAdmin.findById(req.params.questionId);
        res.status(200).json(qa);
    },

    getCompleteCourseQuestion: async (req, res) => {
        const course = await Course.findById(req.params.courseId);
        if (!course) {
            return res.status(404).send({
                message: "Course not found with id " + req.params.courseId
            });
        }
        const qa = await QAAdmin.findById(req.params.questionId).populate('course');
        res.status(200).json(qa);
    },


    updateCourseQuestion: async (req, res) => {
        const course = await Course.findById(req.params.courseId);
        const { questionId } = req.params;

        if (!course) {
            return res.status(404).send({
                message: "Course not found with id " + req.params.courseId
            });
        }

        const question = await QAAdmin.findByIdAndUpdate(questionId, req.body, { new: true });
        res.status(200).json(question);

    },

    replaceCourseQuestion: async (req, res) => {
        const course = await Course.findById(req.params.courseId);
        const { questionId } = req.params;
 
        if (!course) {
            return res.status(404).send({
                message: "Course not found with id " + req.params.courseId
            });
        }

        const question = await QAAdmin.findByIdAndUpdate(questionId, req.body, { new: true });
        res.status(200).json(question);

    },

 
    removeCourseQuestion: async (req, res) => {
        const course = await Course.findById(req.params.courseId);
        const { questionId } = req.params;
        if (!course) {
            return res.status(404).send({
                message: "Course not found with id " + req.params.courseId
            });
        }
        const question = await QAAdmin.findByIdAndRemove(req.params.questionId);

        res.status(200).json({ message: 'deleted the question successfully', deletedQuestion: question });
    },

    getCourseAdditionalProperties: async (req, res) => {
        const course = await Course.findById(req.params.courseId).populate('additionalProperties');
        if (!course) {
            return res.status(404).send({
                message: "Course not found with id " + req.params.courseId
            });
        }

        res.status(200).json(course.additionalProperties);
    },


    getCourseAdditionalProperty: async (req, res) => {
        const course = await Course.findById(req.params.courseId);
        if (!course) {
            return res.status(404).send({
                message: "Course not found with id " + req.params.courseId
            });
        }
        const addtionalProperty = await AdditionalProperty.findById(req.params.additionalPropertyId);
        res.status(200).json(addtionalProperty);
    },

    createCourseAdditionalProperty: async (req, res) => {
        const course = await Course.findById(req.params.courseId);
        if (!course) {
            return res.status(404).send({
                message: "Course not found with id " + req.params.additionalPropertyId
            });
        }
        const newAdditionalProperty = new AdditionalProperty(req.body);
        const additionalProperties = await newAdditionalProperty.save();
        course.additionalProperties.push(additionalProperties);
        const updatedCourse = await course.save();
        res.status(200).json(updatedCourse);
    },

    updateCourseAdditionalProperty: async (req, res) => {
        const course = await Course.findById(req.params.courseId);
        const { addtionalPropertyId } = req.params;

        if (!course) {
            return res.status(404).send({
                message: "Course not found with id " + req.params.courseId
            });
        }

        const addtionalProperty = await AdditionalProperty.findByIdAndUpdate(addtionalPropertyId, req.body, { new: true });
        res.status(200).json(addtionalProperty);

    },

    replaceCourseAdditionalProperty: async (req, res) => {
        const course = await Course.findById(req.params.courseId);
        const { addtionalPropertyId } = req.params;

        if (!course) {
            return res.status(404).send({
                message: "Course not found with id " + req.params.courseId
            });
        }

        const addtionalProperty = await AdditionalProperty.findByIdAndUpdate(addtionalPropertyId, req.body, { new: true });
        res.status(200).json(addtionalProperty);

    },

    removeCourseAdditionalProperty: async (req, res) => {
        const course = await Course.findById(req.params.courseId);
        const { additionalPropertyId } = req.params;
        console.log("this is nice " + additionalPropertyId);
        if (!course) {
            return res.status(404).send({
                message: "Course not found with id " + req.params.courseId
            });
        }

        const addtionalProperty = await AdditionalProperty.findByIdAndRemove(additionalPropertyId);
        res.status(200).json({ message: 'deleted the addtionalProperty successfully', deletedAdditionalProperty: addtionalProperty });
    }
};