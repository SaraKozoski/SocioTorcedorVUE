<script setup>
// Tela provisória das etapas ainda não portadas. Remover conforme cada tela for implementada.
defineProps({
  titulo: { type: String, required: true },
  etapa: { type: [Number, String], required: true },
  origem: { type: String, required: true }, // arquivo Kotlin de origem
})
</script>

<template>
  <section class="placeholder">
    <h1>{{ titulo }}</h1>
    <p class="aviso">Tela ainda não portada — prevista para a <strong>etapa {{ etapa }}</strong>.</p>
    <p class="origem">Origem: <code>{{ origem }}</code></p>
    <pre v-if="Object.keys($route.params).length" class="params">{{ $route.params }}</pre>
  </section>
</template>

<style scoped>
.placeholder { padding: 32px 20px; text-align: center; }
h1 { margin: 0 0 12px; font-size: 32px; font-weight: 400; }
.aviso { color: var(--text-secondary); font-size: 18px; margin: 0 0 8px; }
.aviso strong { color: var(--brand); font-weight: 400; }
.origem { color: var(--text-secondary); font-size: 14px; }
code { font-family: ui-monospace, monospace; font-size: 12px; }
.params { display: inline-block; text-align: left; background: var(--card-dark); padding: 8px 12px; border-radius: 8px; font-size: 12px; }
</style>
