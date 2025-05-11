"use client"
import * as React from "react";

import Lightbox from "yet-another-react-lightbox";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import slides from "@/data/slides";
import "yet-another-react-lightbox/styles.css";
import Modal from "@/components/Modal";


export default function Gallery() {
  const [index, setIndex] = React.useState(-1);
  const [showModal, setShowModal] = React.useState(-1);
  const handleModal = () => {
    setShowModal(!showModal)
}

  return (
    <div>
      <h1>Gallery</h1>
      <div className='bg-blue-400 p-3 m-3 rounded-lg border w-fit shadow-lg' onClick={handleModal}>Open Modal</div>
      <p>
        Here is an example of a photo gallery with a lightbox. You can click any
        photo to open it in a lightbox.
      </p>
      < Modal showModal = {showModal} setShowModal = {setShowModal}/>

      <RowsPhotoAlbum
        photos={slides}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </div>
  );
}
