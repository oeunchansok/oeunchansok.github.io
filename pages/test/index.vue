<template>
  <main
    class="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-green-100 to-blue-100"
  >
    <h1 class="text-3xl sm:text-4xl font-extrabold mb-2 drop-shadow mt-10">🐹 Whack-a-Mole</h1>
    <p class="mb-4 text-gray-600 text-sm sm:text-base" v-if="!isRunning">
      Click <strong>Start</strong> and whack the glowing hole!
    </p>

    <!-- Progress Bar -->
    <div v-if="isRunning" class="w-full max-w-xl h-3 bg-gray-200 rounded-full mb-4 overflow-hidden">
      <div
        class="h-3 bg-yellow-500 transition-all duration-100 ease-linear"
        :style="{ width: (timeLeft / duration * 100) + '%' }"
      ></div>
    </div>

    <!-- Controls -->
    <div class="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-4 text-xs sm:text-sm">
      <button class="btn-start" :disabled="isRunning" @click="startGame">▶ Start</button>
      <button class="btn-stop" :disabled="!isRunning" @click="stopGame">⏹ Stop</button>

      <label class="flex items-center gap-1 sm:gap-2">
        Speed:
        <select v-model.number="spawnMs" class="select">
          <option :value="900">Slow</option>
          <option :value="650">Normal</option>
          <option :value="450">Fast</option>
          <option :value="300">Insane</option>
        </select>
      </label>

      <label class="flex items-center gap-1 sm:gap-2">
        Grid:
        <select v-model.number="gridSize" class="select">
          <option :value="3">3×3</option>
          <option :value="4">4×4</option>
          <option :value="5">5×5</option>
        </select>
      </label>

      <label class="flex items-center gap-1 sm:gap-2">
        Time:
        <select v-model.number="duration" class="select">
          <option :value="30">30s</option>
          <option :value="45">45s</option>
          <option :value="60">60s</option>
        </select>
      </label>
    </div>

    <!-- Stats -->
    <div class="mb-3 text-sm sm:text-lg flex flex-wrap justify-center gap-4">
      <div><span class="font-semibold">Score:</span> <span class="score">{{ score }}</span></div>
      <div><span class="font-semibold">Miss:</span> {{ misses }}</div>
      <div><span class="font-semibold">Best:</span> {{ bestScore }}</div>
    </div>

    <!-- Grid -->
    <div
      class="grid gap-2 sm:gap-3 w-full max-w-xl"
      :style="{ gridTemplateColumns: `repeat(${gridSize}, minmax(50px, 1fr))` }"
    >
      <button
        v-for="i in totalHoles"
        :key="i"
        class="hole"
        :class="{ active: activeIdx === i - 1, disabled: !isRunning }"
        @click="whack(i - 1)"
        :disabled="!isRunning"
        aria-label="hole"
      >
        <span v-if="activeIdx === i - 1" class="mole">🐹</span>
      </button>
    </div>

    <!-- Game Over Overlay -->
    <div v-if="showOverlay" class="overlay">
      <div class="overlay-box">
        <h2 class="text-xl sm:text-2xl font-bold mb-3">🎉 Game Over 🎉</h2>
        <p class="mb-2">Final Score: <span class="font-bold">{{ score }}</span></p>
        <p class="mb-2">Misses: {{ misses }}</p>
        <p class="mb-4">Best Score: {{ bestScore }}</p>
        <button class="btn-start w-32 sm:w-40" @click="startGame">Play Again</button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted, watch } from 'vue'

const score = ref<number>(0)
const misses = ref<number>(0)
const bestScore = ref<number>(Number(globalThis.localStorage?.getItem('mole-best') || 0))
const isRunning = ref<boolean>(false)
const showOverlay = ref<boolean>(false)

const gridSize = ref<number>(3)
const totalHoles = computed<number>(() => gridSize.value * gridSize.value)
const activeIdx = ref<number | null>(null)
const spawnMs = ref<number>(650)
const duration = ref<number>(30)
const timeLeft = ref<number>(duration.value)

let spawnTimer: ReturnType<typeof setInterval> | null = null
let countdownTimer: ReturnType<typeof setInterval> | null = null

function randInt(max: number) { return Math.floor(Math.random() * max) }

function nextMole() { if (!isRunning.value) return; activeIdx.value = randInt(totalHoles.value) }

function whack(idx: number) {
  if (!isRunning.value) return
  if (idx === activeIdx.value) { score.value++; activeIdx.value = null }
  else { misses.value++ }
}

function startGame() {
  isRunning.value = true
  showOverlay.value = false
  score.value = 0
  misses.value = 0
  timeLeft.value = duration.value
  activeIdx.value = null

  spawnTimer = setInterval(nextMole, spawnMs.value)
  nextMole()

  countdownTimer = setInterval(() => {
    timeLeft.value -= 1
    if (timeLeft.value <= 0) stopGame()
  }, 1000)
}

function stopGame() {
  isRunning.value = false
  if (spawnTimer) clearInterval(spawnTimer)
  if (countdownTimer) clearInterval(countdownTimer)
  spawnTimer = null
  countdownTimer = null
  activeIdx.value = null
  showOverlay.value = true
  if (score.value > bestScore.value) {
    bestScore.value = score.value
    globalThis.localStorage?.setItem('mole-best', String(bestScore.value))
  }
}

onUnmounted(() => { if (spawnTimer) clearInterval(spawnTimer); if (countdownTimer) clearInterval(countdownTimer) })

watch(duration, (v) => { if (!isRunning.value) timeLeft.value = v })
</script>

<style scoped>
/* Grid Holes */
.grid { margin: 0 auto; }
.hole {
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 9999px;
  border: 3px solid #11182720;
  background: radial-gradient(circle at 60% 40%, #374151 0%, #111827 70%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.15s ease;
}
.hole.disabled { cursor: not-allowed; filter: grayscale(0.3) brightness(0.9); }
.hole.active {
  background: radial-gradient(circle at 50% 45%, #9ca3af 0%, #4b5563 55%, #111827 100%);
  box-shadow: 0 0 15px #f59e0b88, inset 0 12px 24px #00000066;
}
.mole { font-size: 1.5rem; animation: pop 0.2s ease; }
@keyframes pop { from { transform: scale(0.6); } to { transform: scale(1); } }

/* Buttons */
.btn-start { background: linear-gradient(135deg,#10b981,#059669); color:white; font-weight:bold; padding:.5rem 1rem; border-radius:.75rem; transition: transform 0.2s; }
.btn-start:hover { transform: scale(1.05); }
.btn-stop { background: linear-gradient(135deg,#ef4444,#dc2626); color:white; font-weight:bold; padding:.5rem 1rem; border-radius:.75rem; transition: transform 0.2s; }
.btn-stop:hover { transform: scale(1.05); }

/* Select */
.select { border:1px solid #d1d5db; padding:0.25rem 0.5rem; border-radius:0.5rem; }

/* Overlay */
.overlay { position:absolute; inset:0; background:rgba(0,0,0,0.6); display:flex; justify-content:center; align-items:center; padding:1rem; }
.overlay-box { background:white; padding:2rem; border-radius:1rem; text-align:center; box-shadow:0 8px 24px rgba(0,0,0,0.3); max-width:90%; }
</style>
