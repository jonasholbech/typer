import { writable } from 'svelte/store';

function createTimer() {
	const { subscribe, set, update } = writable(0);
    let interval;
    let count=0;
    function start(){
        interval = setInterval(() => {
            update(n=>n+1);
        }, 1000);
    }
    function stop(){
        clearInterval(interval);
    }
	return {
        subscribe,
        start:start,
        stop:stop
	};
}

export const timer = createTimer();