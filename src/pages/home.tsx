import { Component, For } from "solid-js";
import Navbar, { BottomNav } from "../components/navbar";
import { Icon } from "solid-heroicons";
import { mapPin } from "solid-heroicons/outline";

const Card: Component = () => {
  return (
    <div class="pt-2 py-1 px-4 grid gap-3">
      <div class="flex justify-between">
        <div class="flex">
          <div class="flex gap-2">
            <img
              src="/imgs/bed.jpg"
              alt="bedsitter"
              class="rounded-md w-[100px] aspect-video"
            />
            <header class="grid gap-1">
              <h3 class="font-bold text-xl">Bedsitter</h3>
              <p class="text-xs text-gray-500 flex">
                <Icon path={mapPin} class="w-4 h-4" />
                <span>Campus 4 road</span>
              </p>
            </header>
          </div>
        </div>
        <div class="justify-self-end">
          <p class="text-xl font-semibold">₦195,000</p>
          <p class="text-xs">Negotiable</p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-8">
        <button type="button" class="bg-gray-200 rounded-md py-2">
          Details
        </button>
        <button type="button" class="text-white bg-green-900 rounded-md">
          Message
        </button>
      </div>
    </div>
  );
};

const HomePage: Component = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div class="flex flex-col h-full w-full">
      <div class="grow overflow-y-scroll">
        <Navbar />
        <div>
          <header class="flex justify-between items-center px-4 py-4">
            <h5 class="text-xl font-semibold">Categories</h5>
            <a href="#!" class="text-green-900 text-sm font-semibold">
              View all
            </a>
          </header>
          <div class="grid gap-1 divide-y">
            <For each={cards}>
              {(card) => <Card />}
            </For>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default HomePage;
