<script>
  import { items } from '../stores/items';
  import { fade } from 'svelte/transition';

  let item,
    hasDuplicate = false;
  function duplicateItemChecker(store = [], item) {
    return store.find((_item) => _item.item === item);
  }
  function itemFormSubmitHandler() {
    const lowerCaseItem = item.toLowerCase();
    if (duplicateItemChecker($items, lowerCaseItem)) {
      hasDuplicate = true;
      item = '';
    } else {
      const newItem = {
        id: new Date().toJSON(),
        item: lowerCaseItem,
        completed: false,
      };
      items.update((_item) => (_item = [..._item, newItem]));
      item = '';
    }
  }
</script>

<form on:submit|preventDefault={itemFormSubmitHandler}>
  {#if hasDuplicate}
    <p transition:fade on:click={() => (hasDuplicate = false)}>item exist!</p>
  {/if}
  <input
    bind:value={item}
    on:input={() => (hasDuplicate = false)}
    type="text"
    placeholder="what can we buy?"
    required
    minLength="2"
  />
  <button type="submit" />
</form>

<style>
  form {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  form p {
    position: absolute;
    bottom: 70px;
    padding: 10px 60px;
    background: var(--color2);
    color: var(--color4);
    border-radius: 5px;
  }
  form input {
    width: 100%;
    text-align: center;
    font-size: 1em;
  }
  form button {
    position: absolute;
    opacity: 0;
  }
</style>
