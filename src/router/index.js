// Equivalente a navigation/AppNavigation.kt (NavHost + rotas).
// Os nomes/paths foram mantidos iguais aos do app Android para facilitar a conferência.
import { createRouter, createWebHistory } from 'vue-router'
import { definirTransicao } from './transition'
import { registrarAcesso } from '@/composables/useAtalhos'

/**
 * meta.layout = true → mostra Header + BottomNav
 * (lista `telasComNavegacao` do Kotlin; 'descricao_produto_alimentacao' e 'jogador' ficam sem barra).
 */
const routes = [
  { path: '/', redirect: { name: 'home' } },

  { path: '/home', name: 'home', component: () => import('@/views/HomeView.vue'), meta: { layout: true } },
  { path: '/login', name: 'login', component: () => import('@/views/LoginView.vue'), meta: { layout: true } },
  { path: '/cadastro', name: 'cadastro', component: () => import('@/views/CadastroView.vue'), meta: { layout: true } },
  { path: '/credito', name: 'credito', component: () => import('@/views/CreditoView.vue'), meta: { layout: true } },

  {
    // /ingresso  e  /ingresso/:jogoId  (jogoId inteiro, padrão -1)
    path: '/ingresso/:jogoId(-?\\d+)?',
    name: 'ingresso',
    component: () => import('@/views/IngressoView.vue'),
    props: (route) => ({ jogoIdSelecionado: Number(route.params.jogoId ?? -1) }),
    meta: { layout: true },
  },

  // Se o sócio tem plano mostra "Meu Espaço", senão a lista de planos (ver PlanosGate)
  { path: '/planos', name: 'planos', component: () => import('@/views/PlanosGate.vue'), meta: { layout: true } },
  { path: '/meueespaco', name: 'meueespaco', component: () => import('@/views/MeuEspacoView.vue'), meta: { layout: true } },
  {
    path: '/plano_detalhe/:tipoPlano',
    name: 'plano_detalhe',
    component: () => import('@/views/PlanoDetalheView.vue'),
    props: (route) => ({ tipoPlano: route.params.tipoPlano || 'RED' }),
    meta: { layout: true },
  },

  { path: '/lanchonete', name: 'lanchonete', component: () => import('@/views/LanchoneteView.vue'), meta: { layout: true } },
  {
    path: '/descricao_produto_alimentacao/:produtoId',
    name: 'descricao_produto_alimentacao',
    component: () => import('@/views/DescricaoProdutoView.vue'),
    props: true,
  },
  { path: '/carrinho', name: 'carrinho', component: () => import('@/views/CarrinhoView.vue'), meta: { layout: true } },
  {
    path: '/pagamento_alimentacao',
    name: 'pagamento_alimentacao',
    component: () => import('@/views/PagamentoView.vue'),
    meta: { layout: true },
  },

  { path: '/time', name: 'time', component: () => import('@/views/TimeView.vue'), meta: { layout: true } },
  {
    path: '/jogador/:atletaId(\\d+)',
    name: 'jogador',
    component: () => import('@/views/JogadorDetalheView.vue'),
    props: (route) => ({ atletaId: Number(route.params.atletaId) }),
  },

  { path: '/perfil', name: 'perfil', component: () => import('@/views/PerfilView.vue'), meta: { layout: true } },
  { path: '/apostas', name: 'apostas', component: () => import('@/views/ApostasView.vue'), meta: { layout: true } },

  { path: '/:pathMatch(.*)*', redirect: { name: 'home' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  definirTransicao(to, from)
})

router.afterEach((to) => {
  // Alimenta os "atalhos mais usados" da Home
  if (to.name) registrarAcesso(String(to.name))
})

export default router
