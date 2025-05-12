import newElement from "../../utils/newElement.js";

const SendTestFinished = () => {
    const dialogContent = newElement('div');
    const titleDialog = newElement('p');
    const textDialog = newElement('p');
    const resumeLink = newElement('a')

    titleDialog.textContent = 'Teste enviado com sucesso!'

    textDialog.textContent = 'O quiz "nome do Quiz" fois enviado com sucesso!'

    resumeLink.textContent = 'Ver Gabarito'

    dialogContent.appendChild(titleDialog);
    dialogContent.appendChild(textDialog);
    dialogContent.appendChild(resumeLink);


    return dialogContent;
}
export default SendTestFinished;