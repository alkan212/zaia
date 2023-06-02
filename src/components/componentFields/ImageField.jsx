import React, { useState } from "react";


export function ImageField({ optionnal = false, callback }) {

  let imageRef = React.createRef();

  const [isImg, setIsImg] = useState(false);

  function setImageSize(ratio, img) {
    if (ratio == 1) { /* square aspect 1/1 */
      img.style.width = null;
      img.style.height = null;

      img.style.width = "100%"
    }
    if (ratio < 1) { /* vertical (height full) */
      img.style.width = null;
      img.style.height = null;

      img.style.height = "100%"
    }
    if (ratio > 1) { /* horizontal (width full) */
      img.style.width = null;
      img.style.height = null;

      img.style.width = "100%"
    }
  }

  function setInputImage(e) {
    let img = imageRef.current;
    let input = e.currentTarget;

    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file)

    /* reader on load */
    reader.onload = function () {

      /* image on load */
      var prototypeImg = new Image;
      prototypeImg.onload = function () {
        let ratio = (prototypeImg.width / prototypeImg.height); /* ratio 2 = big width */

        /* code here */

        setImageSize(ratio, img);
      }

      prototypeImg.src = reader.result;
      img.src = reader.result;
      setIsImg(true)
      { callback && callback(reader.result) }
    };

    reader.onerror = function () {
      alert("impossible to charge your image")
    };
  }

  const fieldId = `ImageFied_${Math.round(Math.random() * 1000000)}`

  return (
    <button type="button" class="aspect-[1/1] relative block w-full rounded-lg border-2 border-dashed border-gray-700 text-center hover:border-gray-400 ">
      <label for={fieldId} class="cursor-pointer flex items-center justify-center w-full h-full rounded-lg opacity-100 z-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <img ref={imageRef} src={""} class="object-cover"></img>
        <input onInput={setInputImage} id={fieldId} type="file" class="hidden"></input>
      </label>

      {isImg == false &&
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" class="mx-auto w-12 h-12 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>

          <span class="z-10 mt-1 block text-sm font-medium text-gray-400">3:2</span>
          {optionnal && <span class="z-10 mt-1 block text-[13px] font-medium text-gray-600">*Optionnal</span>}
        </div>
      }



    </button>

  )
}