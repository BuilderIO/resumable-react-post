import { component$, useSignal } from '@builder.io/qwik';
import { MUIButton } from '~/integrations/react/mui';

export default component$(() => {
  const count = useSignal(0);
  return (
    <div>
      <h2>React component without React code</h2>
      <MUIButton
        variant="contained"
        host:onClick$={() => {
          count.value++;
        }}
      >
        I'm a button from react
      </MUIButton>
      <p>current count is: {count.value}</p>
    </div>
  );
});
