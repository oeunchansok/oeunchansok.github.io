  <template>
    <main class="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-green-100 to-blue-100">
      <!-- Title -->
      <h1 class="text-3xl sm:text-4xl font-extrabold mb-2 drop-shadow text-center mt-10">🐹 Whack‑a‑Mole </h1>
      <p class="mb-4 text-center" v-if="!isRunning">Click <strong>Start</strong> and whack the glowing mole!</p>

      <!-- Controls -->
      <div class="flex flex-wrap justify-center items-center gap-4 mb-4">
        <button class="btn-start" :disabled="isRunning" @click="startGame">▶ Start</button>
        <button class="btn-stop" :disabled="!isRunning" @click="stopGame">⏹ Stop</button>

        <label class="flex items-center gap-2 text-sm">
          ⚡ Speed:
          <select v-model.number="spawnMs" class="select">
            <option :value="900">Slow</option>
            <option :value="650">Normal</option>
            <option :value="450">Fast</option>
            <option :value="300">Insane</option>
          </select>
        </label>

        <label class="flex items-center gap-2 text-sm">
          🔲 Grid:
          <select v-model.number="gridSize" class="select">
            <option :value="3">3×3</option>
            <option :value="4">4×4</option>
            <option :value="5">5×5</option>
          </select>
        </label>

        <label class="flex items-center gap-2 text-sm">
          ⏱ Time:
          <select v-model.number="duration" class="select">
            <option :value="30">30s</option>
            <option :value="45">45s</option>
            <option :value="60">60s</option>
          </select>
        </label>
      </div>

      <!-- Progress Bar -->
      <div v-if="isRunning" class="w-5/6 max-w-xl h-3 bg-gray-300 rounded-full overflow-hidden mb-4">
        <div
          class="h-3 bg-yellow-400 transition-all duration-100 ease-linear"
          :style="{ width: (timeLeft / duration * 100) + '%' }"
        ></div>
      </div>

      <!-- Scoreboard -->
      <div class="mb-3 text-lg flex flex-wrap justify-center gap-6">
        <div class="flex items-center gap-1">🏆 Score: <span class="font-bold">{{ score }}</span></div>
        <div class="flex items-center gap-1">❌ Miss: <span class="font-bold">{{ misses }}</span></div>
        <div class="flex items-center gap-1">⏳ Time: <span class="font-bold">{{ timeLeft }}s</span></div>
        <div class="flex items-center gap-1">⭐ Best: <span class="font-bold">{{ bestScore }}</span></div>
      </div>

      <!-- Game Grid -->
      <div
        class="grid gap-3 w-full max-w-xl"
        :style="{ gridTemplateColumns: `repeat(${gridSize}, minmax(70px, 1fr))` }"
      >
        <button
          v-for="i in totalHoles"
          :key="i"
          class="hole"
          :class="{ active: activeIdx === i - 1, disabled: !isRunning }"
          @click="whack(i - 1)"
          :disabled="!isRunning"
        >
          <span v-if="activeIdx === i - 1" class="mole">🐹</span>
        </button>
      </div>

      <p class="mt-5 text-sm text-gray-700 text-center">Tip: Increase grid size or speed for more challenge!</p>
    </main>
  </template>

  <script setup lang="ts">
  import { ref, computed, onUnmounted, watch } from 'vue'

  const score = ref<number>(0)
  const misses = ref<number>(0)
  const bestScore = ref<number>(Number(globalThis.localStorage?.getItem('mole-best') || 0))
  const isRunning = ref<boolean>(false)
  const gridSize = ref<number>(3)
  const totalHoles = computed(() => gridSize.value * gridSize.value)
  const activeIdx = ref<number | null>(null)
  const spawnMs = ref<number>(650)
  const duration = ref<number>(30)
  const timeLeft = ref<number>(duration.value)

  let spawnTimer: ReturnType<typeof setInterval> | null = null
  let countdownTimer: ReturnType<typeof setInterval> | null = null

  function randInt(max: number) { return Math.floor(Math.random() * max) }

  function nextMole() {
    if (!isRunning.value) return
    const prev = activeIdx.value
    const next = randInt(totalHoles.value)
    if (prev !== null && prev === activeIdx.value) { misses.value += 1 }
    activeIdx.value = next
  }

  function whack(idx: number) {
    if (!isRunning.value) return
    if (idx === activeIdx.value) { score.value++; activeIdx.value = null }
    else { misses.value++ }
  }

  function startGame() {
    if (isRunning.value) return
    isRunning.value = true
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
    if (score.value > bestScore.value) {
      bestScore.value = score.value
      globalThis.localStorage?.setItem('mole-best', String(bestScore.value))
    }
  }

  onUnmounted(() => { if (spawnTimer) clearInterval(spawnTimer); if (countdownTimer) clearInterval(countdownTimer) })

  watch([spawnMs, gridSize], () => {
    if (!isRunning.value) return
    if (spawnTimer) clearInterval(spawnTimer)
    spawnTimer = setInterval(nextMole, spawnMs.value)
  })

  watch(duration, (v) => { if (!isRunning.value) timeLeft.value = v })
  </script>

  <style scoped>
  main { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji'; }

  /* Grid & Holes */
  .grid { margin: 0 auto; }
  .hole {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 9999px;
    border: 3px solid #11182720;
    background: radial-gradient(circle at 60% 40%, #374151 0%, #111827 70%);
    box-shadow: inset 0 8px 18px #00000066, 0 2px 6px #00000022;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 80ms ease, box-shadow 120ms ease, background 150ms ease;
  }
  .hole.disabled { cursor: not-allowed; filter: grayscale(0.3) brightness(0.9); }
  .hole:hover { transform: translateY(-2px); }
  .hole.active {
    background: radial-gradient(circle at 50% 45%, #fcd34d 0%, #fbbf24 55%, #f59e0b 100%);
    box-shadow: 0 0 0 3px #f59e0b inset, 0 10px 24px #f59e0b55, inset 0 12px 24px #00000066;
    animation: pulse 800ms ease-in-out infinite alternate;
  }
  .mole { font-size: 1.6rem; animation: pop 0.2s ease; }
  @keyframes pop { from { transform: scale(0.6); } to { transform: scale(1); } }
  @keyframes pulse { from { filter: drop-shadow(0 0 0 rgba(0,0,0,0.2)); } to { filter: drop-shadow(0 0 18px rgba(245,158,11,0.8)); } }

  /* Buttons */
  .btn-start {
    padding: 0.5rem 1rem; border-radius: 0.75rem; border: none; font-weight: 600;
    background: linear-gradient(135deg,#10b981,#059669); color:white; transition: transform 0.2s;
  }
  .btn-start:hover { transform: scale(1.05); }
  .btn-stop {
    padding: 0.5rem 1rem; border-radius: 0.75rem; border: none; font-weight: 600;
    background: linear-gradient(135deg,#ef4444,#dc2626); color:white; transition: transform 0.2s;
  }
  .btn-stop:hover { transform: scale(1.05); }

  /* Select */
  .select { border: 1px solid #e5e7eb; padding: 0.25rem 0.5rem; border-radius: 0.5rem; }
  </style>
