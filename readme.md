# **GA Toolbox v0.21**

## **OBJETIVO**

Este pequeno código tem a finalidade de facilitar o dia-a-dia dos estagiários da GreenAnt, no momento temos duas ferramentas incluídas aqui:

- Seleção das URLs de logs dos dispositivos da GreenAnt nos servidores da Cloud9, providenciando uma pequena interface web onde é escolhido o tipo de log e fornecido o MAC, retornando em uma nova janela a página de logs selecionada do respectivo MAC.
- Conversor de caixa alta para caixa baixa dos MACs, útil para inserção de dados na ferramente do Park Management que aceita apenas valores de MAC em caixa baixa.

---

## **ATUALIZAÇÕES v0.21**

- Projeto renomeado para GA Toolbox.

## **ATUALIZAÇÕES v0.2**

- Adicionada a funcionalidade do conversor para caixa baixa, útil no momento de utilizar o Park Management, o qual só permite endereços MAC em caixa baixa.
- Separadas em funções distintas a validação do MAC e a criação da URL do Cloud9
- Agora a função de validação de MAC faz a remoção de espaços em branco antes e depois do MAC, não retornando erro para essa condição.
