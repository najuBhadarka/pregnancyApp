import { validationResult } from "express-validator";
import questionModel from "../models/questions.js";
import moment from "moment";
import answerModel from "../models/answerSheet.js";

const addQuestions = async (req, res) => {
  try {
    const { title, questions, timeline } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array().map((ele) => ({ name: ele.path, msg: ele.msg })),
      });
    }
    const newQuestion = new questionModel({
      title,
      questions,
      timeline,
    });
    await newQuestion.save();
    res
      .status(200)
      .json({ status: true, message: "Question added successfully." });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

const updateQuestion = async (req, res) => {
  try {
    const questionBookId = req?.params?.id;
    const { title, timeline, questions } = req.body;
    const findBookAndUpdate = await questionModel.findOneAndUpdate(
      {
        _id: questionBookId,
      },
      {
        questions: questions,
        title: title,
        timeline: timeline,
      },
      { new: true }
    );
    if (!findBookAndUpdate) {
      return res
        .status(404)
        .json({ status: false, message: "Question not found!" });
    }
    res
      .status(200)
      .json({ status: true, message: "Question updated successfully." });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

const deleteQuestion = async (req, res) => {
  try {
    const questionBookId = req.params.id;
    const questionId = req.query.questionId;

    // Use findOneAndDelete to delete the specific question by its ID
    const deletedQuestionBook = await questionModel.findOneAndUpdate(
      { _id: questionBookId },
      {
        $pull: { questions: { _id: questionId } },
      },
      { new: true }
    );
    if (!deletedQuestionBook) {
      return res
        .status(404)
        .json({ status: false, message: "Question book not found" });
    }
    res
      .status(200)
      .json({ status: true, message: "Question deleted successfully" });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

const getQuestionOnTimeline = async (req, res) => {
  try {
    const { startDate } = req.query;
    if (startDate == undefined) {
      res
        .status(404)
        .json({ status: false, message: "Please enter valid start date." });
    }

    const start = moment(startDate, "DD/MM/YYYY");
    const todayDate = moment(new Date(), "DD/MM/YYYY");

    // Calculate the difference in months
    const monthsDiff = todayDate.diff(start, "months");
    const findQuestionBook = await questionModel.find(
      {
        timeline: { $lte: monthsDiff },
      },
      { __v: 0 }
    );
    res.status(200).json({ status: true, data: findQuestionBook });
  } catch (error) {
    res.status(400).json({ status: false, message: error });
  }
};

const submitAnswer = async (req, res) => {
  try {
    const { formData, timeline } = req.body;
    const userId = req?.user?.id;
    const answerForm = new answerModel({
      userId,
      formData,
      timeline,
    });
    await answerForm.save();
    res.status(200).json({
      status: true,
      message: "Your answer has been submited successfully",
    });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

const getQuestionForm = async (req, res) => {
  try {
    const formData = await questionModel.find({ isDeleted: false });
    res.status(200).json({
      status: true,
      data: formData[0],
    });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

const getQuestionFormByID = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    const formData = await questionModel.findById(id);
    console.log("formData", formData);
    res.status(200).json({
      status: true,
      data: formData,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

const getAllQuestionsList = async (req, res) => {
  try {
    const questionList = await questionModel.find({
      isDeleted: false,
    });
    if (questionList && questionList.length == 0) {
      res
        .status(404)
        .json({ status: false, datA: [], message: "No Questionaries found !" });
    } else {
      res.status(200).json({ status: true, data: questionList });
    }
  } catch (error) {
    res.status(200).json({ status: false, message: "Something went wrong !" });
  }
};

const addQuestionsTemp = async (req, res) => {
  try {
    const { title, questions, timeline } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array().map((ele) => ({ name: ele.path, msg: ele.msg })),
      });
    }
    const findForm = await questionModel.find();
    if (findForm && findForm.length > 0) {
      await questionModel.updateOne(
        {
          _id: findForm[0]._id.toString(),
        },
        {
          title: title,
          questions: questions,
        }
      );
      const udpatedForm = await questionModel.findOne({
        _id: findForm[0]._id.toString(),
      });
      res.status(200).json({
        status: true,
        message: "Question Updated successfully.",
        data: udpatedForm,
      });
    } else {
      const newQuestion = new questionModel({
        title,
        questions,
        timeline,
      });
      await newQuestion.save();
      res.status(200).json({
        status: true,
        message: "Question added successfully.",
        data: newQuestion,
      });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

const deleteForm = async (req, res) => {
  try {
    const formId = req.params.id;
    const { isDeleted } = req.body;

    const findFormAndUpdate = await questionModel.findOneAndUpdate(
      {
        _id: formId,
      },
      {
        isDeleted: isDeleted,
      }
    );
    if (!findFormAndUpdate) {
      return res.status(404).json({ status: false, message: "Form not found" });
    }
    res
      .status(200)
      .json({ status: true, message: "Form deleted successfully" });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

export {
  addQuestions,
  updateQuestion,
  deleteQuestion,
  getQuestionOnTimeline,
  submitAnswer,
  getQuestionForm,
  getAllQuestionsList,
  addQuestionsTemp,
  deleteForm,
  getQuestionFormByID,
};
