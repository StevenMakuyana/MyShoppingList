<script>
  import { fade } from 'svelte/transition';
  import { items } from './stores/items';
  import AddItem from './components/AddItem.svelte';
  import Item from './components/Item.svelte';
  import Icon from 'svelte-awesome';
  import { shoppingBasket } from 'svelte-awesome/icons';

  function clearAllBtnHandler() {
    items.set([]);
  }
</script>

<main class="app">
  <header class="app-header">
    <h1>my <br />shopping</h1>
    <button on:click={clearAllBtnHandler}>clear all</button>
  </header>
  <section class="main-section">
    <header>
      <Icon class="icon" data={shoppingBasket} />
      <span
        >{$items.filter((_item) => _item.completed)
          .length}/{$items.length}</span
      >
    </header>
    {#each $items as item}
      <div transition:fade>
        <Item {item} />
      </div>
    {:else}
      <p>nothing to display yet.</p>
    {/each}
  </section>
  <footer class="app-footer">
    <AddItem />
  </footer>
</main>

<style>
  .app {
    width: 100%;
    height: 100vh;
    background: var(--color1);
  }
  .app-header,
  .app-footer {
    display: flex;
    padding: 10px;
    position: fixed;
    left: 0;
    right: 0;
    align-items: center;
    height: 60px;
    background: var(--color1);
  }
  .app-header {
    justify-content: space-between;
    top: 0;
    height: 80px;
  }
  .app-header h1 {
    text-align: center;
    text-transform: capitalize;
    font-weight: 800;
    color: var(--color2);
  }
  .app-header button {
    background: var(--color3);
    color: var(--color4);
    box-shadow: 0 0 5px var(--color4);
  }
  .app-header button:hover {
    transition: 0.3s linear;
    background: var(--color2);
    color: var(--color4);
  }
  .main-section {
    padding: 90px 0;
  }
  .main-section header {
    padding: 10px 5px;
  }
  .main-section header span {
    color: var(--color5);
  }
  .main-section p {
    text-align: center;
  }
  .app-footer {
    bottom: 0;
  }

  @media screen and (min-width: 768px) {
    :global(body) {
      background: var(--color3);
    }
    .app {
      width: 600px;
      margin: auto;
      box-shadow: 0 0 2px;
    }
    .app-header,
    .app-footer {
      width: 600px;
      margin: auto;
    }
  }
</style>
