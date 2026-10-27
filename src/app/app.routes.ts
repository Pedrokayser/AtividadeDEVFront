import { Routes } from '@angular/router';
import { ContatoComponent, CursosComponent, DashboardComponent, DetalheCursoComponent, DetalheImagemComponent, DetalheNoticiaComponent, DetalheProdutoComponent, DetalheProfessorComponent, DetalheUsuarioComponent, GaleriaComponent, HomeComponent, LoginComponent, NoticiasComponent, ProdutosComponent, ProfessoresComponent, RelatoriosComponent, SobreComponent, EstoqueComponent, UsuariosComponent, VendasComponent } from './pages';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'detalhe', component: DetalheImagemComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'usuarios/detalhe', component: DetalheUsuarioComponent },
    { path: 'relatorios', component: RelatoriosComponent, children: [
      { path: 'vendas', component: VendasComponent },
      { path: 'estoque', component: EstoqueComponent }
    ] }
  ] },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produto', component: DetalheProdutoComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'detalhe-noticia', component: DetalheNoticiaComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/detalhe', component: DetalheCursoComponent },
  { path: 'professores', component: ProfessoresComponent },
  { path: 'professores/detalhe', component: DetalheProfessorComponent },
  { path: '**', redirectTo: '' }
];
