<script setup>
// Rota "planos": se o sócio já tem plano mostra "Meu Espaço", senão a lista de planos.
// (composable("planos") em AppNavigation.kt)
import { useUserStore } from '@/stores/user'
import PlanosView from './PlanosView.vue'
import MeuEspacoView from './MeuEspacoView.vue'

const user = useUserStore()
</script>

<template>
  <MeuEspacoView v-if="user.temPlano" />
  <PlanosView v-else />
</template>
