import { Component, For } from "solid-js";
import { Icon } from "solid-heroicons";
import { user } from "solid-heroicons/solid";
import { home } from "solid-heroicons/outline";
import { plusCircle } from "solid-heroicons/outline";
import { megaphone } from "solid-heroicons/outline";
import { listBullet } from "solid-heroicons/solid";
import { magnifyingGlass } from "solid-heroicons/outline";

const bottomNav = [
  {
    icon: home,
    text: "Home",
  },
  {
    icon: listBullet,
    text: "Categories",
  },
  {
    icon: plusCircle,
    text: "Post",
  },
  {
    icon: megaphone,
    text: "ADs",
  },
];

export const BottomNav: Component = () => {
  return (
    <nav class="w-full grid grid-cols-4">
      <For each={bottomNav}>
        {(nav) => (
          <button
            type="button"
            class="grid gap-2 justify-items-center text-gray-700 py-2"
          >
            <Icon path={nav.icon} class="w-8 h-8 stroke-gray-400" />
            <p class="text-sm">
              {nav.text}
            </p>
          </button>
        )}
      </For>
    </nav>
  );
};

const Navbar: Component = () => {
  return (
    <div class="px-4">
      <nav class="flex w-full items-center py-4 gap-4">
        <div>
          <button type="button" class="rounded-full p-2 bg-gray-200">
            <Icon path={user} class="w-6 h-6" />
          </button>
        </div>
        <div class="grow">
          <form
            class="flex w-full items-stretch"
            onSubmit={(e) => e.preventDefault()}
          >
            <label
              for="navbarSearch"
              class="rounded-l-md px-2 bg-gray-200 flex items-center text-gray-500"
            >
              <Icon path={magnifyingGlass} class="w-6 h-6 stroke-[2]" />
            </label>
            <input
              type="text"
              placeholder="Search"
              id="navbarSearch"
              class="py-2 px-1 focus:outline-none grow rounded-r-md bg-gray-200"
            />
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
