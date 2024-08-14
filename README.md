# VisaoSISU
Um site para mostrar as notas de cortes anteriores do SISU
## Acesso
É possível acessar o site funcionando por [aqui](http://visaosisu.com.br/)

## Descrição
### Front-end
O front foi desenvolvido em React com duas páginas, notas e sobre, na pagina principal do site foram criadas 6 inputs de dados, para isso foi usado o Autocomplete do Material UI, quando existe uma mudança no input é feito um request para o back end para preencher os dados do próximo input. No botão pesquisar são juntos todos os inputs e feito um request para retornar todas informações, o que foi retornado é imprimido na tela.
### Back-end
O back foi feito em Node, recebe um resquest e retorna os dados baseado nos dados do request e na rota.
### Deploy
No deploy foi usado o Vercel.


Existe outra verssão do código feita incialmente em Django com DRF. Depois foi substituida por essa Node por causa de fatores como o deploy e necessidade de melhorar o código. A versão de Django está [aqui](https://github.com/inaciolimaf/VisaoSISU/tree/versao-em-django)
