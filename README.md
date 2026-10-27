# Academia+ — Projeto Angular

Projeto acadêmico para praticar componentes standalone, navegação e rotas aninhadas com Angular 19.

## Executar o projeto

Requisitos: Node.js 20.11 ou superior e npm.

```bash
npm install
npm start
```

Acesse `http://localhost:4200` no navegador.

## Rotas disponíveis

| Rota | Página |
| --- | --- |
| `/` | Início do portal e links para cursos, professores, Sobre e Contato |
| `/sobre` | Sobre este sistema |
| `/contato` | Página de contato |
| `/galeria` | Grade com seis imagens e acesso ao detalhe |
| `/detalhe` | Detalhe da imagem |
| `/login` | Formulário de entrada com redirecionamento para o dashboard |
| `/dashboard` | Dashboard administrativo e mensagem de entrada |
| `/dashboard/usuarios` | Lista de usuários |
| `/dashboard/usuarios/detalhe` | Detalhe do usuário |
| `/dashboard/relatorios` | Menu de relatórios |
| `/dashboard/relatorios/vendas` | Relatório de vendas |
| `/dashboard/relatorios/estoque` | Relatório de estoque |
| `/produtos` | Lista de produtos |
| `/produto` | Detalhe do produto |
| `/noticias` | Lista de notícias |
| `/detalhe-noticia` | Detalhe da notícia |
| `/cursos` | Lista de cursos |
| `/cursos/detalhe` | Detalhe do curso |
| `/professores` | Lista de professores |
| `/professores/detalhe` | Detalhe do professor |

O caminho `/dashboard` atende ao exercício de login e ao painel administrativo. A página inicial reúne o tema de cursos e mantém os acessos de Sobre e Contato.
