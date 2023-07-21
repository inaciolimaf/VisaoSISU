# VisaoSISU
Um site para mostrar as notas de cortes anteriores do SISU
## Acesso
É possível acessar o site funcionando por [aqui](http://visaosisu.com.br/)

## Descrição
### Front-end
O front foi desenvolvido em React com duas páginas, notas e sobre, na pagina principal do site foram criadas 6 inputs de dados, para isso foi usado o Autocomplete do Material UI, quando existe uma mudança no input é feito um request para o back end para preencher os dados do próximo input. No botão pesquisar é junto todos os e feito um request para retornar todas informações, o que foi retornado é imprimido na tela.
### Back-end
O back foi feito em Django, recebe um resquest e retorna os dados baseado no que foi recebido, se não recebeu nada, retorna as edições possíveis, se recebeu o ano, retorna a instituição, e assim por diante
### Deploy
No deploy foi usado o Vercel para o front e a AWS para o back. Para hospedar o back com https foi necessário usar várias outras coisas, como gunicorn, supervisor, nginx e certbot.