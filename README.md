# Sócio Torcedor — Vue.js

Port do app Android (Kotlin / Jetpack Compose) **socioTorcedor** para **Vue 3**.
Mobile-first: no desktop o app aparece centralizado numa coluna de até 480px.

## Rodando

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # gera /dist
npm run preview
```

Requer Node 20+.

## Stack

| Android (Kotlin)            | Vue                                 |
| --------------------------- | ----------------------------------- |
| Jetpack Compose             | Vue 3 (`<script setup>`) + Vite     |
| Navigation Compose          | Vue Router                          |
| ViewModel + StateFlow       | Pinia                               |
| Room (SQLite)               | `localStorage` / IndexedDB (etapa 2)|
| Retrofit                    | `fetch` (etapa 4)                   |
| Material Icons              | lucide-vue-next                     |
| `ClubConfig` / `AppColors`  | `src/config/clubConfig.js` → CSS variables |
| `SharedPreferences`         | `localStorage`                      |

## Mapa de arquivos

| Kotlin                                  | Vue                                         |
| --------------------------------------- | ------------------------------------------- |
| `navigation/AppNavigation.kt`           | `src/App.vue` + `src/router/index.js`       |
| `navigation/BottomNavigation.kt`        | `src/components/layout/BottomNav.vue`       |
| `ui/home/HeaderSection.kt`              | `src/components/layout/AppHeader.vue`       |
| `ui/theme/ClubTheme.kt` (+ Color.kt, HomeColors.kt) | `src/config/clubConfig.js`      |
| `ui/login/UserViewModel.kt`             | `src/stores/user.js`                        |
| `ui/alimentacao/CarrinhoViewModel.kt`   | `src/stores/carrinho.js`                    |
| `ui/home/AtalhoManager.kt`              | `src/composables/useAtalhos.js`             |
| `res/drawable`, `res/font`              | `src/assets/images`, `src/assets/fonts`     |

As rotas mantêm os mesmos nomes/paths do Android (`/plano_detalhe/:tipoPlano`,
`/ingresso/:jogoId?`, `/jogador/:atletaId`, ...). As telas que ainda não foram portadas
mostram um `PlaceholderView` indicando em qual etapa serão feitas.

## Trocar de clube

Edite `src/config/clubConfig.js` (nome, cores, IDs) e substitua as imagens em `src/assets/images`.

## Roteiro de migração

- [x] **Etapa 1** — Base: Vite, Vue Router, Pinia, tema, layout (header + bottom nav), stores e rotas
- [ ] **Etapa 2** — Login, cadastro e perfil (+ persistência de sócios no lugar do Room)
- [ ] **Etapa 3** — Home (header, atalhos, plano de sócio, resultados) e apostas
- [ ] **Etapa 4** — Time: elenco, classificação, últimos jogos, detalhe do jogador (+ API de futebol)
- [ ] **Etapa 5** — Ingressos, planos e mapa do estádio
- [ ] **Etapa 6** — Lanchonete e carrinho
- [ ] **Etapa 7** — Meu espaço, pagamentos e crédito
