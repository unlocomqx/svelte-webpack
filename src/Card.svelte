<div class="card">
  {#if title}<h2 class="title">{title}</h2>{/if}
  {#if detail}<p class="detail">{detail}</p>{/if}
  <div class="card-content">
    <slot>
      <p>This is an empty card waiting for some content.</p>
    </slot>
  </div>
</div>

<script>
  export let title = '';
  export let detail = '';
</script>

<style type="text/less">
  .card {
    position: relative;
    background-color: white;
    border: 1px solid lightgrey;
    box-shadow: 0 2px 0 0 lightgrey;
    margin-bottom: 1.33rem;
    font-size: 1.15rem;
    padding: 1.5rem;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }

  .title {
    font-size: 2.5rem;
    line-height: normal;
    margin-bottom: 0.5rem;
  }

  .detail {
    color: grey;
    display: inline;
  }

  .card-content {
    margin-top: 2rem;
  }
</style>
