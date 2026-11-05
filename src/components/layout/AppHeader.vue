<script setup>
// Equivalente a HeaderSection.kt
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Menu, CircleUser } from 'lucide-vue-next'
import { useUserStore } from '@/stores/user'
import { ClubConfig } from '@/config/clubConfig'

const router = useRouter()
const route = useRoute()
const user = useUserStore()

const menuAberto = ref(false)
const menuRef = ref(null)

function ir(nome) {
  menuAberto.value = false
  router.push({ name: nome })
}

function irParaPerfilOuLogin() {
  router.push({ name: user.estaLogado ? 'perfil' : 'login' })
}

function fecharAoClicarFora(e) {
  if (menuAberto.value && menuRef.value && !menuRef.value.contains(e.target)) {
    menuAberto.value = false
  }
}

onMounted(() => document.addEventListener('pointerdown', fecharAoClicarFora))
onBeforeUnmount(() => document.removeEventListener('pointerdown', fecharAoClicarFora))
watch(() => route.fullPath, () => (menuAberto.value = false))
</script>

<template>
  <header class="header">
    <div ref="menuRef" class="menu-wrap">
      <button class="icon-btn" aria-label="Menu" :aria-expanded="menuAberto" @click="menuAberto = !menuAberto">
        <Menu :size="24" />
      </button>

      <ul v-if="menuAberto" class="dropdown" role="menu">
        <li role="menuitem" @click="ir('planos')">Planos de Sócio</li>
        <li role="menuitem" @click="ir('apostas')">Apostas</li>
      </ul>
    </div>

    <img class="logo" :src="ClubConfig.logo" alt="Logo do Clube" />

    <button
      class="icon-btn"
      :aria-label="user.estaLogado ? 'Perfil' : 'Login'"
      @click="irParaPerfilOuLogin"
    >
      <CircleUser :size="32" />
    </button>
  </header>
</template>

<style scoped>
.header {
  flex: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(12px + var(--safe-top)) 16px 12px;
  background: var(--card-dark);
  position: relative;
  z-index: 20;
}
.logo { width: 48px; height: 48px; object-fit: contain; }
.icon-btn {
  width: 48px; height: 48px;
  display: grid; place-items: center;
  border-radius: 50%;
  color: var(--text-primary);
}
.icon-btn:active { background: rgba(255, 255, 255, 0.12); }
.menu-wrap { position: relative; }
.dropdown {
  position: absolute; top: 100%; left: 0;
  margin: 4px 0 0; padding: 8px 0; list-style: none;
  min-width: 200px;
  background: var(--card-dark);
  border-radius: 8px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6);
  border: 1px solid var(--card-border);
}
.dropdown li { padding: 12px 16px; font-size: 16px; cursor: pointer; }
.dropdown li:active, .dropdown li:hover { background: rgba(255, 255, 255, 0.08); }
</style>
