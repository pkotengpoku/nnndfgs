"use client"
import * as React from "react";

import Lightbox from "yet-another-react-lightbox";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import slides from "@/data/slides";
import "yet-another-react-lightbox/styles.css";


export default function Gallery(props) {
  const myIndex= props.index;
  const handleClick = (myIndex)=>{props.setIndex(myIndex)}
  return (
    <>

      <RowsPhotoAlbum
        photos={slides}
        targetRowHeight={50}
        onClick={()=>{handleClick(myIndex)}}
      />

      <Lightbox
        index={props.index}
        slides={slides}
        open={props.index >= 0}
        close={() => props.setIndex(-1)}
      />
    </>
  );
}
