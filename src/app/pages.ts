import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({ selector: 'app-home', standalone: true, imports: [RouterLink], template: `<section class="hero"><p class="eyebrow">Projeto acadêmico · Angular</p><h1>Bem-vindo ao sistema!</h1><p>Explore as áreas do portal, os cursos e os conteúdos dos exercícios de rotas.</p><div class="actions"><a class="button primary" routerLink="/cursos">Ver cursos</a><a class="button" routerLink="/professores">Professores</a><a class="button" routerLink="/sobre">Sobre o sistema</a><a class="button" routerLink="/contato">Contato</a></div></section><section class="content-card"><h2>Portal de aprendizagem</h2><p>Escolha uma seção no menu para conhecer os exemplos de navegação.</p></section>` })
export class HomeComponent {}

@Component({ selector: 'app-sobre', standalone: true, template: `<section class="content-card"><p class="eyebrow">Institucional</p><h1>Sobre este sistema</h1><p>Um portal acadêmico desenvolvido para praticar componentes, navegação e rotas aninhadas com Angular.</p></section>` })
export class SobreComponent {}

@Component({ selector: 'app-contato', standalone: true, template: `<section class="content-card"><p class="eyebrow">Fale conosco</p><h1>Página de contato</h1><p>Entre em contato com a equipe acadêmica para tirar dúvidas sobre o sistema.</p></section>` })
export class ContatoComponent {}

@Component({ selector: 'app-galeria', standalone: true, imports: [RouterLink], template: `<section class="page-heading"><p class="eyebrow">Explore</p><h1>Galeria</h1><p>Uma seleção de imagens para ilustrar a galeria.</p></section><section class="gallery">@for (image of images; track image) { <img [src]="image" [alt]="'Imagem da galeria ' + $index" loading="lazy"> }</section><a class="button primary" routerLink="/detalhe">Ver detalhe da imagem</a>` })
export class GaleriaComponent { images = [1, 2, 3, 4, 5, 6].map((id) => `https://images.unsplash.com/photo-${['1518770660439-4636190af475','1498050108023-c5249f4df085','1519389950473-47ba0277781c','1516321318423-f06f85e504b3','1521737711867-e3b97375f902','1517245386807-bb43f82c33c4'][id - 1]}?auto=format&fit=crop&w=900&q=80`); }

@Component({ selector: 'app-detalhe-imagem', standalone: true, template: `<section class="content-card"><p class="eyebrow">Galeria</p><h1>Detalhe da imagem</h1><p>Aqui seria o detalhe da imagem</p></section>` })
export class DetalheImagemComponent {}

@Component({ selector: 'app-login', standalone: true, template: `<section class="form-card"><p class="eyebrow">Área do aluno</p><h1>Entrar</h1><form (submit)="entrar($event)"><label for="usuario">Usuário</label><input id="usuario" name="usuario" autocomplete="username" placeholder="Seu usuário"><label for="senha">Senha</label><input id="senha" name="senha" type="password" autocomplete="current-password" placeholder="Sua senha"><button class="button primary" type="submit">Entrar</button></form></section>` })
export class LoginComponent { constructor(private router: Router) {} entrar(event: Event) { event.preventDefault(); this.router.navigateByUrl('/dashboard'); } }

@Component({ selector: 'app-dashboard', standalone: true, imports: [RouterLink, RouterOutlet], template: `<section class="page-heading"><p class="eyebrow">Painel administrativo</p><h1>Dashboard</h1><p>Você entrou no sistema</p></section><div class="card-grid"><a class="content-card link-card" routerLink="/dashboard/usuarios"><h2>Usuários</h2><p>Consulte a lista e os detalhes dos usuários.</p><span>Ver usuários →</span></a><a class="content-card link-card" routerLink="/dashboard/relatorios"><h2>Relatórios</h2><p>Acesse relatórios de vendas e estoque.</p><span>Ver relatórios →</span></a></div><router-outlet />` })
export class DashboardComponent {}

@Component({ selector: 'app-usuarios', standalone: true, imports: [RouterLink], template: `<section class="content-card"><p class="eyebrow">Administração</p><h1>Usuários</h1><ul class="item-list"><li>João</li><li>Maria</li><li>Pedro</li></ul><a class="button primary" routerLink="detalhe">Ver detalhe do usuário</a></section>` })
export class UsuariosComponent {}

@Component({ selector: 'app-detalhe-usuario', standalone: true, template: `<section class="content-card"><p class="eyebrow">Administração</p><h1>Detalhe do usuário</h1><p>Detalhes do usuário selecionado</p></section>` })
export class DetalheUsuarioComponent {}

@Component({ selector: 'app-relatorios', standalone: true, imports: [RouterLink, RouterOutlet], template: `<section class="content-card"><p class="eyebrow">Administração</p><h1>Relatórios</h1><div class="actions"><a class="button" routerLink="vendas">Vendas</a><a class="button" routerLink="estoque">Estoque</a></div><router-outlet /></section>` })
export class RelatoriosComponent {}

@Component({ selector: 'app-vendas', standalone: true, template: `<p class="sub-route">Relatório de Vendas</p>` })
export class VendasComponent {}

@Component({ selector: 'app-estoque', standalone: true, template: `<p class="sub-route">Relatório de Estoque</p>` })
export class EstoqueComponent {}

@Component({ selector: 'app-produtos', standalone: true, imports: [RouterLink], template: `<section class="content-card"><p class="eyebrow">Catálogo</p><h1>Produtos</h1><ul class="item-list"><li>Notebook</li><li>Celular</li><li>Fone de Ouvido</li></ul><a class="button primary" routerLink="/produto">Detalhes do produto</a></section>` })
export class ProdutosComponent {}

@Component({ selector: 'app-detalhe-produto', standalone: true, template: `<section class="content-card"><p class="eyebrow">Catálogo</p><h1>Detalhes do produto</h1><p>Detalhes do produto</p></section>` })
export class DetalheProdutoComponent {}

@Component({ selector: 'app-noticias', standalone: true, imports: [RouterLink], template: `<section class="content-card"><p class="eyebrow">Atualizações</p><h1>Notícias</h1><ul class="item-list"><li>Angular 18 lançado</li><li>TypeScript ganha nova versão</li><li>Front-end em alta no mercado</li></ul><a class="button primary" routerLink="/detalhe-noticia">Ler mais</a></section>` })
export class NoticiasComponent {}

@Component({ selector: 'app-detalhe-noticia', standalone: true, template: `<section class="content-card"><p class="eyebrow">Atualizações</p><h1>Notícia</h1><p>Detalhe da notícia selecionada</p></section>` })
export class DetalheNoticiaComponent {}

@Component({ selector: 'app-cursos', standalone: true, imports: [RouterLink], template: `<section class="content-card"><p class="eyebrow">Aprenda</p><h1>Cursos</h1><ul class="item-list"><li>Algoritmos</li><li>FrontEnd</li><li>Banco de Dados</li></ul><a class="button primary" routerLink="detalhe">Detalhe do curso</a></section>` })
export class CursosComponent {}

@Component({ selector: 'app-detalhe-curso', standalone: true, template: `<section class="content-card"><p class="eyebrow">Aprenda</p><h1>Detalhe do curso</h1><p>Este curso apresenta os principais conceitos e práticas da área.</p></section>` })
export class DetalheCursoComponent {}

@Component({ selector: 'app-professores', standalone: true, imports: [RouterLink], template: `<section class="content-card"><p class="eyebrow">Nossa equipe</p><h1>Professores</h1><ul class="item-list"><li>Ana Souza</li><li>Marcos Lima</li><li>Carla Mendes</li></ul><a class="button primary" routerLink="detalhe">Detalhe do professor</a></section>` })
export class ProfessoresComponent {}

@Component({ selector: 'app-detalhe-professor', standalone: true, template: `<section class="content-card"><p class="eyebrow">Nossa equipe</p><h1>Detalhe do professor</h1><p>Conheça a trajetória e as disciplinas deste professor.</p></section>` })
export class DetalheProfessorComponent {}


