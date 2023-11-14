Feature('login');

Scenario('Login com sucesso',  ({ I }) => {
    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 3)
    I.fillField('#user', 'andreas@gmail.com')
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('Login realizado', 3)
}).tag('@sucesso')

Feature('login');

Scenario('Tentando logar digitando apenas o email',  ({ I }) => {
    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 3)
    I.fillField('#user', 'andreas@gmail.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida.', 3)
}).tag('@apenasEmail')

Feature('login');

Scenario('Tentando logar sem digitar email e senha',  ({ I }) => {
    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 3)
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 3)
}).tag('@semEmailSenha')

Feature('login');

Scenario('Tentando logar apenas digitando a senha',  ({ I }) => {
    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 3)
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 3)
}).tag('@apenasSenha');
