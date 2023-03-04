# **GA Toolbox v0.22**

## **OBJETIVO**

Este pequeno código tem a finalidade de facilitar o dia-a-dia dos estagiários da GreenAnt, no momento temos duas ferramentas incluídas aqui:

- Seleção das URLs de logs dos dispositivos da GreenAnt nos servidores da Cloud9, providenciando uma pequena interface web onde é escolhido o tipo de log e fornecido o MAC, retornando em uma nova janela a página de logs selecionada do respectivo MAC.
- Conversor de caixa alta para caixa baixa dos MACs, útil para inserção de dados na ferramente do Park Management que aceita apenas valores de MAC em caixa baixa.

---

## **INSTRUÇÕES**

### **SELETOR DO CLOUD9**

Nesta funcionalidade deve-se selecionar o campo adequado do Cloud9 dentre as opções disponíveis, após é preciso inserir o endereço MAC no campo `MAC address`, e por fim clicar em `Enviar!`. 

Em seguida é exibida uma página do Cloud9 contendo as informações escolhidas a respeito do dispositivo selecionado.

Caso algum dos campos não seja selecionado ou endereço MAC não seja inserido, uma págima de erro será exibida.

As imagens abaixo exemplificam o uso da ferramenta.

![Selecionando opção do Cloud9](./images/cloud9.PNG)

![Tela do Cloud9](./images/cloud9-site.PNG)

![Página de erro](./images/pag.%20erro.PNG)

### **CONVERSOR DE CAIXA ALTA**

Para utilizar esta funcionalidade abra o arquivo `index.html` no seu navegador de preferência e insira o MAC que deseja converter no campo `MAC address` e clique em `Converter!`. O MAC convertido par caixa baixa irá ser exposto ao lado do campo `MAC em caixa baixa` logo abaixo. As imagens a seguir exemplificam esta ação.

![Texto em caixa alta e alterado para caixa baixa](./images/caixa%20baixa.PNG)

---

## **ATUALIZAÇÕES v0.22**
- Correções ortográficas.
- Atualização do arquivo de Readme
- Pequenas alterações.

## **ATUALIZAÇÕES v0.21**

- Projeto renomeado para GA Toolbox.

## **ATUALIZAÇÕES v0.2**

- Adicionada a funcionalidade do conversor para caixa baixa, útil no momento de utilizar o Park Management, o qual só permite endereços MAC em caixa baixa.
- Separadas em funções distintas a validação do MAC e a criação da URL do Cloud9
- Agora a função de validação de MAC faz a remoção de espaços em branco antes e depois do MAC, não retornando erro para essa condição.
