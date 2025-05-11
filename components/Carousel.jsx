"use client"
import "yet-another-react-lightbox/styles.css";

import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import slides from "@/data/slides";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import NextJsImage from "@/components/NextJsImage";


export default function Carousel(props) {
  return (
    <>

      <Lightbox
        index={props.index}
        slides={slides}
        plugins={[Inline]}
        on={{
          view: props.updateIndex,
          click: props.toggleOpen(true),
        }}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: "cover",
        }}
        inline={{
          style: {
            width: "100%",
            maxWidth: "900px",
            aspectRatio: "3 / 2",
            margin: "0 auto",
          },
        }}
      />

      <Lightbox
        open={props.openImage}
        close={props.toggleOpen(false)}
        index={props.index}
        slides={slides}
        on={{ view: props.updateIndex }}
        animation={{ fade: 0 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
        plugins={[Captions, Fullscreen, Video, Zoom]}
      />
    </>
  );
}
