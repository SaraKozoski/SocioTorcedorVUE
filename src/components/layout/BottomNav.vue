<script setup>
// Equivalente a BottomNavigation.kt
import { useRoute, useRouter } from 'vue-router'
import { House, Utensils, CreditCard, Ticket } from 'lucide-vue-next'
import { ClubConfig } from '@/config/clubConfig'

const route = useRoute()
const router = useRouter()

const esquerda = [
  { nome: 'home', label: 'Home', icone: House },
  { nome: 'lanchonete', label: 'Lanchonete', icone: Utensils },
]
const direita = [
  { nome: 'credito', label: 'Crédito', icone: CreditCard },
  { nome: 'ingresso', label: 'Ingresso', icone: Ticket },
]
</script>

<template>
  <nav class="bottom-nav" aria-label="Navegação principal">
    <button
      v-for="item in esquerda"
      :key="item.nome"
      class="item"
      :class="{ ativo: route.name === item.nome }"
      @click="router.push({ name: item.nome })"
    >
      <component :is="item.icone" :size="24" />
      <span>{{ item.label }}</span>
    </button>

    <!-- Logo central → Time -->
    <button class="item" aria-label="Time" @click="router.push({ name: 'time' })">
      <span class="logo-circulo">
        <img :src="ClubConfig.logo" alt="Logo" />
      </span>
    </button>

    <button
      v-for="item in direita"
      :key="item.nome"
      class="item"
      :class="{ ativo: route.name === item.nome }"
      @click="router.push({ name: item.nome })"
    >
      <component :is="item.icone" :size="24" />
      <span>{{ item.label }}</span>
    </button>
  </nav>
</template>

<style scoped>
.bottom-nav {
  flex: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: calc(72px + var(--safe-bottom));
  padding: 8px 4px calc(8px + var(--safe-bottom));
  background: var(--bottom-bar);
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 20;
}
.item {
  flex: 1;
  display: flex; flex-direction: column; align-items: center; gap: 4px;
  color: var(--text-secondary);
  font-size: 13px;
}
.item.ativo { color: var(--brand); }
.logo-circulo {
  width: 48px; height: 48px; border-radius: 50%;
  display: grid; place-items: center;
  background: var(--brand-faint);
}
.logo-circulo img { width: 45px; height: 45px; object-fit: contain; }
</style>
