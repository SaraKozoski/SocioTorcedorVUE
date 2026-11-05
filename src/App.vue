<script setup>
// Equivalente ao AppNavigation() composable: Scaffold(topBar, bottomBar) + NavHost.
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import BottomNav from '@/components/layout/BottomNav.vue'
import { transitionName } from '@/router/transition'

const route = useRoute()
const mostrarNavegacao = computed(() => route.meta.layout === true)

// fade e slide-up-in aguardam a saída da tela anterior; slide-down-out sobrepõe.
const modo = computed(() => (transitionName.value === 'slide-down-out' ? undefined : 'out-in'))
</script>

<template>
  <div class="app-shell">
    <AppHeader v-if="mostrarNavegacao" />

    <main class="app-content">
      <RouterView v-slot="{ Component, route: r }">
        <Transition :name="transitionName" :mode="modo">
          <component :is="Component" :key="r.path" class="screen" />
        </Transition>
      </RouterView>
    </main>

    <BottomNav v-if="mostrarNavegacao" />
  </div>
</template>

<style>
.app-shell {
  height: 100dvh;
  max-width: var(--app-max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--background);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.8);
}
.app-content {
  flex: 1;
  min-height: 0;
  position: relative;
  overflow: hidden;
}
.screen {
  height: 100%;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: var(--background);
}

/* fade 220ms (110 saída + 110 entrada) */
.fade-enter-active, .fade-leave-active { transition: opacity 110ms linear; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Detalhe do plano: entra de baixo para cima (320ms) */
.slide-up-in-leave-active { transition: opacity 1ms; }
.slide-up-in-leave-to { opacity: 0; }
.slide-up-in-enter-active { transition: transform 320ms cubic-bezier(0.4, 0, 0.2, 1); }
.slide-up-in-enter-from { transform: translateY(100%); }

/* ...e sai para baixo (300ms) sobre a tela anterior */
.slide-down-out-leave-active {
  position: absolute; inset: 0; z-index: 5;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-down-out-leave-to { transform: translateY(100%); }
.slide-down-out-enter-active { transition: opacity 1ms; }
.slide-down-out-enter-from { opacity: 0; }

@media (prefers-reduced-motion: reduce) {
  .fade-enter-active, .fade-leave-active,
  .slide-up-in-enter-active, .slide-down-out-leave-active { transition-duration: 1ms; }
}
</style>
