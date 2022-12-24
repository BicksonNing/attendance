import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import React, { Fragment, useState } from "react";

const HeadLessListBox = ({ lists }) => {
  const [selected, setSelected] = useState(lists[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1 mr-2 mb-1">
        <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white/30 backdrop-blur-sm py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-xs">
          <span className="block truncate font-semibold text-xs">
            {selected.name}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-50 mt-1 max-h-60 scrollbar-hide overflow-auto rounded-md bg-white/30 backdrop-blur-md py-1 ring-1 ring-black ring-opacity-5 focus:outline-none text-xs">
            {lists.map((list, listIdx) => (
              <Listbox.Option
                key={listIdx}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 px-10  ${
                    active ? "bg-blue-200 text-blue-900" : "text-gray-900"
                  }`
                }
                value={list}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-semibold" : "font-normal"
                      }`}
                    >
                      {list.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default HeadLessListBox;
