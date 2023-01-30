import { component$, useSignal } from '@builder.io/qwik';
import { MUIButton } from '~/integrations/react/mui';

export default component$(() => {
  const count = useSignal(0);
  return (
    <div>
      <h2>React component with hydrated React code</h2>
      <MUIButton
        client:load
        variant="contained"
        onClick$={() => {
          count.value++;
        }}
      >
        I'm a button from react
      </MUIButton>
      <p>current count is: {count.value}</p>
    </div>
  );
});
