<script>
  import { words } from "../stores/words";
  import { score } from "../stores/score";
  import { timer } from "../stores/timer";
  let typed = "";
  let lastValue = "";
  let correct = false;
  let running = false;

  function checkAnswer() {
    if (typed === $words[$score]) {
      score.update(n => n + 1);
      correct = true;
      lastValue = typed;
      typed = "";
      if ($score >= $words.length) {
        timer.stop();
        running = false;
      }
    }
  }
  function transitionEnded() {
    correct = false;
    lastValue = "";
  }
  function init(el) {
    el.focus();
  }
</script>

<style>
  div {
    display: grid;

    align-items: center;
    height: 60px;
  }
  input,
  p {
    grid-column: 1;
    grid-row: 1;
    background: transparent;
  }
  p {
    text-align: left;
    font-family: inherit;
    font-size: inherit;
    -webkit-padding: 0.4em 0;
    padding: 0.4em;
    margin: 0 0 0.5em 0;
  }
  p.moveOut {
    transition: 0.6s;
    transform: translateX(100vw);
  }
</style>

<h1>Write:</h1>
<h2>{$words[$score] ? $words[$score] : 'Completed!!!!'}</h2>
<h3>{$timer}</h3>
<div>
  {#if !running}
    <button
      on:click={() => {
        running = true;
        timer.start();
      }}>
      Start Typer
    </button>
  {/if}
  {#if running}
    <p on:transitionend={transitionEnded} class={correct ? 'moveOut' : ''}>
      {lastValue}
    </p>
    <input use:init bind:value={typed} on:input={checkAnswer} type="text" />
  {/if}

</div>
