<script>
  import Icon from 'svelte-awesome';
  import { items } from '../stores/items';
  import { windowCloseO } from 'svelte-awesome/icons';
  export let item;

  let completed = item.completed;
  function completetedInputHandler(event) {
    const updatedItem = $items.map((_item) => {
      if (_item.id === item.id) {
        _item.completed = event.target.checked;
        return _item;
      }
      return _item;
    });
    items.update((_item) => (_item = updatedItem));
  }
  function deleteHandler() {
    items.update(
      (_items) => (_items = $items.filter((_item) => _item.id !== item.id))
    );
  }
</script>

<div class="item-card">
  <div class="left">
    <input
      on:click={completetedInputHandler}
      type="checkbox"
      bind:checked={completed}
    />
    <p class:completed>{item.item}</p>
  </div>
  <div class="right">
    <i on:click={deleteHandler}>
      <Icon data={windowCloseO} />
    </i>
  </div>
</div>

<style>
  .item-card {
    background: var(--color3);
    margin: 10px;
    display: flex;
    justify-content: space-between;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 0 2px var(--color4);
  }
  .item-card:hover {
    transition: 0.3s linear;
    background: var(--color2);
  }
  .item-card .left {
    display: flex;
    align-items: center;
  }
  .item-card .left p {
    margin: 0 5px;
    color: var(--color4);
  }

  .completed {
    text-decoration: line-through;
    background: var(--color2);
  }
</style>
