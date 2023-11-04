import { Component, For, Show, createSignal } from "solid-js";
import { Icon } from "solid-heroicons";
import { user } from "solid-heroicons/solid";
import { arrowLeftOnRectangle, bell, bookmark, home, informationCircle, phone, questionMarkCircle, trash } from "solid-heroicons/outline";
import { plusCircle } from "solid-heroicons/outline";
import { megaphone } from "solid-heroicons/outline";
import { listBullet, pencil } from "solid-heroicons/solid";
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

const sideNav = [
  {
    icon: bookmark,
    text: "Saved Items"
  },
  {
    icon: bell,
    text: "Notifications"
  },
  {
    icon: phone,
    text: "Contact Us"
  },
  {
    icon: informationCircle,
    text: "About School"
  },
  {
    icon: questionMarkCircle,
    text: "Help"
  }
]

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
  const [isShowingSidebar, setIsShowindSidebar] = createSignal(true)
  let sidebar: HTMLElement | null = null

  return (
    <>
      <div class="px-4">
        <nav class="flex w-full items-center py-4 gap-4">
          <div>
            <button type="button" onClick={() => setIsShowindSidebar(true)} class="rounded-full p-2 bg-gray-200">
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
      <Show when={isShowingSidebar()}>
        <aside ref={sidebar} class="fixed h-screen w-full top-0 left-0 bg-black/50" onClick={(e) => {
          if (e.target === sidebar)
            setIsShowindSidebar(false)
        }}>
          <div class="bg-white h-full w-3/4 sm:1/2 shadow-[0px_10px_8px_16px_rgba(0,0,0,0.10)]">
            <div class="p-4 divide-y-2">
              <div class="space-y-2 py-2">
                <button type="button" class="relative p-4 aspect-square rounded-full bg-gray-300">
                  <Icon path={user} class="fill-white w-12 h-12" />
                  <span class="absolute bottom-1 right-0 bg-green-900 p-1 aspect-square rounded-full">
                    <Icon path={pencil} class="fill-white w-3 h-3" />
                  </span>
                </button>
                <p class="text-lg font-semibold">
                  user@homeease.ng
                </p>
              </div>
              <div class="py-2 space-y-1 pb-24">
                <For each={sideNav}>
                  {(nav) => (
                    <button type="button" class="rounded-lg flex w-full gap-2 items-center py-2">
                      <Icon path={nav.icon} class="w-6 h-6 stroke-[2]" />
                      {nav.text}
                    </button>
                  )}
                </For>
              </div>
              <div class="space-y-2 py-2">
                <button type="button" class="rounded-lg flex w-full gap-2 items-center py-2">
                  <Icon path={arrowLeftOnRectangle} class="w-6 h-6 stroke-[2]" />
                  Logout
                </button>
                <button type="button" class="text-red-600 rounded-lg flex w-full gap-2 items-center py-2">
                  <Icon path={trash} class="w-6 h-6 stroke-[2]" />
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </aside>
      </Show>
    </>
  );
};

export default Navbar;
