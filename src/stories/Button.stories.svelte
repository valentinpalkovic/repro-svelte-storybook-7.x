<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

  import Button from './Button.svelte';
</script>

<Meta title="ButtonMDX" component={Button}/>

<Template let:args>
  <Button {...args}>
    Button Text
  </Button>
</Template>

<Story name="PrimaryMDX" args={{primary: true}} />