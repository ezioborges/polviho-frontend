import ExamBody from "../components/Exam/index.js";
import PageTitle from "../components/PageTitle.js";
import { quizzesData } from "../data/quizzesData.js";
import newElement from "../utils/newElement.js"

const Exam = () => {
    const hash = window.location.hash
    const hashId = hash.slice(-1)

    const data = quizzesData

    const { name, discipline } = data.find((quiz) => quiz.id == hashId)

    const examContent = newElement('div')
    examContent.classList.add('exam-content')    
    
    const title = PageTitle(name, discipline)
    const body = ExamBody()

    examContent.appendChild(title)
    examContent.appendChild(body)

    return examContent;
}

export default Exam;
