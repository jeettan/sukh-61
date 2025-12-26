import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

function Gallery() {
  let [isOpen, setIsOpen] = useState(false);
  let [img, setImg] = useState("");

  const images = Object.values(
    import.meta.glob("../images/gallery_images/*.{png,jpg,jpeg,svg,webp}", {
      eager: true,
      import: "default",
    })
  ) as string[];

  function openModal(img: string) {
    setImg(img);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <h2 className="text-center text-4xl my-6">Photo Gallery</h2>
      <div className="h-full grid grid-cols-1 md:grid-cols-3 px-10 gap-5 place-items-center">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-[300px] h-[200px] overflow-hidden rounded-md shadow-md"
          >
            <img
              key={index}
              src={img}
              alt=""
              width={300}
              height={200}
              className="object-cover cursor-pointer"
              onClick={() => openModal(img)}
            />
          </div>
        ))}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-center">
                    <img src={img}></img>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default Gallery;
