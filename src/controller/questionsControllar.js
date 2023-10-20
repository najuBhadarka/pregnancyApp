import questionModel from "../models/questions.js";
import moment from "moment";

const addQuestions = async (req, res) => {
  const { title, questions, timeline } = req.body;
  try {
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
    res.status(500).json({ message: error });
  }
};

const getAllQuestions = async (req, res) => {
  try {
    const questionsData = await questionModel.find({}, { __v: 0 });
    res.status(200).json({ status: true, questionsData });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateQuestion = async (req, res) => {
  try {
    const questionBookId = req?.params?.id;
    const { questionId } = req?.query;
    const { questionTitle, optionType, options } = req.body;
    const findBookAndUpdate = await questionModel.findOneAndUpdate(
      {
        _id: questionBookId,
        "questions._id": questionId,
      },
      {
        $set: {
          "questions.$.questionTitle": questionTitle,
          "questions.$.optionType": optionType,
          "questions.$.options": options,
        },
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
    res.status(500).json({ message: error });
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
    res
      .status(500)
      .json({ message: "An error occurred while deleting the question" });
  }
};

const getQuestionOnTimeline = async (req, res) => {
  try {
    const { startDate } = req.query;
    const start = moment(startDate, "DD/MM/YYYY");
    const todayDate = moment(new Date(), "DD/MM/YYYY");

    // Calculate the difference in months
    const monthsDiff = todayDate.diff(start, "months");
    const findQuestionBook = await questionModel.find({
      timeline: { $lte: monthsDiff },
    });
    res.status(200).json({ status: true, data: findQuestionBook });
  } catch (error) {
    res.status(400).json({ status: false, message: 'Something went wrong' });
  }
};

export {
  addQuestions,
  getAllQuestions,
  updateQuestion,
  deleteQuestion,
  getQuestionOnTimeline,
};
