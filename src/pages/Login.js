import FormButton from "../components/Buttons/FormButton.js"
import { clickFormLogin } from "../utils/eventListeners.js"
import newElement from "../utils/newElement.js"

const Login = () => {
    const LoginContent = newElement('div')
    LoginContent.classList.add('login-background')

    const logoArea = newElement('div')
    logoArea.classList.add('logo-area')

    const loginArea = newElement('div')
    loginArea.classList.add('login-area')

    const loginForm = newElement('form')
    loginForm.classList.add('login-form')

    const logo = newElement('img')
    logo.src = '../../assets/logo-lado.svg'

    const loginTitle = newElement('p')
    loginTitle.textContent = 'Faça Login'
    loginTitle.classList.add('title1')
    loginTitle.classList.add('login-title')
    loginTitle.style.textAlign = 'center'

    const credentialsArea = newElement('div')
    credentialsArea.classList.add('credentials')

    const credentialsLabel = newElement('label')
    credentialsLabel.textContent = 'Matrícula ou E-mail'
    credentialsLabel.setAttribute('for', 'credentials')
    
    const credentialsInput = newElement('input')
    credentialsInput.type = 'text'
    credentialsInput.id = 'credentials'

    const passwordArea = newElement('div')
    passwordArea.classList.add('credentials')

    const passwordLabel = newElement('label')
    passwordLabel.textContent = 'Senha'
    passwordLabel.setAttribute('for', 'password')

    const passwordInput = newElement('input')
    passwordInput.type = 'password'
    passwordInput.id = 'password'

    const changePasswordLink = newElement('a')
    changePasswordLink.textContent = 'Esqueceu a senha ou deseja trocar?'
    changePasswordLink.style.cursor = 'pointer'
    changePasswordLink.style.textAlign = 'center'

    const loginButton = FormButton('Entrar', 'button-form', 'textMdBold')
    loginButton.textContent = 'Entrar'
    clickFormLogin(loginButton)

    credentialsArea.appendChild(credentialsLabel)
    credentialsArea.appendChild(credentialsInput)
    passwordArea.appendChild(passwordLabel)
    passwordArea.appendChild(passwordInput)

    loginForm.appendChild(loginTitle)
    loginForm.appendChild(credentialsArea)
    loginForm.appendChild(passwordArea)
    loginForm.appendChild(changePasswordLink)
    loginForm.appendChild(loginButton)
    
    logoArea.appendChild(logo)
    
    loginArea.appendChild(loginForm)

    LoginContent.appendChild(logoArea)
    LoginContent.appendChild(loginArea)

    return LoginContent;
}

export default Login;
