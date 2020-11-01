<script lang="ts">
  export let href = "#/";

  if (href && !href.startsWith("#")) {
    href = "#" + href;
  }
</script>

<a {href}><slot /></a>
