import jsx from 'view';
import { createSignal, createEffect, Accessor } from 'signal';

const $ = (fn: Function) => {
    const el = document.createElement("span");
    createEffect(() => {el.textContent = fn()});
    return el;
}

const Counter: JSX.Component = () => {
    const [clicks, setClicks] = createSignal(0);

    createEffect(()=>{
      document.getElementById("key1");
      console.log(`clicks: ${clicks()}`);
    });

    return (
        <div class="counter">
            <button onclick={() => setClicks(clicks() + 1)}>
                I have been clicked: {$(clicks)} times;
            </button>
        </div>
    );
}

export default Counter;
