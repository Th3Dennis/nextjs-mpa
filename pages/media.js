import Image from "next/image";
import React from "react";

export default function media() {
  return (
    <div className="container mt-5">
      <h2>Videos</h2>
      <h2>Note: these video formats are not compatible with all browsers.</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-2 mb-5">
        <div className="col">
          <div className="card h-100">
            <video autoPlay loop muted height="500px">
              <source src="motorcycle.mp4" type="video/mp4" />
            </video>
            <div className="card-body">
              <h5 className="card-title">MP4</h5>
              <p className="card-text">
                MP4: Moving Picture Expert Group-4
                <br />
                <br />
                <b>Pro:</b> MP4 is a video format that is widely used in the
                industry.
                <br />
                - Video compression without noticeable quality loss
                <br />
                <b>Con:</b> MP4 is not compatible with all browsers.
                <br />- Unsuitable for streaming
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Source: Dennis Miceli</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <video autoPlay loop muted height="500px">
              <source src="motorcycle.MOV" type="video/mp4" />
            </video>
            <div className="card-body">
              <h5 className="card-title">MOV</h5>
              <p className="card-text">
                Mov is a video format created by Apple Inc. for the Quicktime
                Player.
                <br />
                <br />
                <b>Pro:</b> standard for professional video editing
                <br />
                <b>Con:</b> Only playable on few devices.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Source: Dennis Miceli</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <video autoPlay loop height="500px">
              <src src="/motorcycle.avi" type="video/avi" />
            </video>
            <div className="card-body">
              <h5 className="card-title">AVI</h5>
              <p className="card-text">
                AVI: Audio Video Interleaved
                <br></br>
                <br />
                <b>Pro:</b> AVI is a video format that is widely used in the
                industry.
                <br />
                - High quality audio
                <br />
                <b>Con:</b> very large sized files
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Source: Dennis Miceli</small>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-5">Photos</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <Image
              src="/mountains.jpeg"
              alt="jpg "
              className="jpg "
              width="250"
              height="250"
            />
            <div className="card-body">
              <h5 className="card-title">JPG</h5>
              <p className="card-text">
                JPEG is the common name for the ISO/IEC 10918-1 or CCITT
                Recommendation T.81 standard introduced in 1992, which describes
                various methods of image compression. The designation JPEG goes
                back to the Joint Photographic Experts Group, which developed
                the JPEG standard.
                <br />
                <br />
                <b>Pro:</b> Quick loading time
                <br />
                - High compatibility
                <br />
                <b>Con:</b> lossy compression
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Source: Dennis Miceli</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <Image
              src="/mountains.png"
              alt="png "
              className="png "
              width="250"
              height="250"
            />
            <div className="card-body">
              <h5 className="card-title">PNG</h5>
              <p className="card-text">
                Portable Network Graphics (PNG) is a raster graphics format with
                lossless data compression. It is approved by the World Wide Web
                Consortium (W3C) and is the most most widely used lossless
                graphics format on the Internet.
                <br />
                <br />
                <b>Pro:</b> Lossless compression
                <br />
                - Full color spectrum
                <br />
                <b>Con:</b> Not suitable for print
                <br />- Animations are not possible
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Source: Dennis Miceli</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <Image
              src="/mountains.webp "
              alt="webp "
              className="webp "
              width="250"
              height="250"
            />
            <div className="card-body">
              <h5 className="card-title">WEBP</h5>
              <p className="card-text">
                WebP is a graphics format for lossy or lossless image
                compression for static or animated images. Another descendant of
                the VP8 video codec released in 2010, it is a sister project of
                the WebM video format.
                <br />
                <br />
                <b>Pro:</b> Small file size
                <br />
                - Improved compression
                <br />
                <b>Con:</b> Weak browser support
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Source: Dennis Miceli</small>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-5">Audio</h2>
      <div className="row">
        <div className="col-4">
            <h4>MP3</h4>
          <audio controls>
            <source src="/dog.mp3" type="audio/mpeg"/>
          </audio>
          <p><b>Pro:</b> small file size</p>
            <p><b>Con:</b> loss of quality</p>
        </div>
        <div className="col-4">
            <h4>WAV</h4>
          <audio controls>
            <source src="/dog.wav" type="audio/wav"/>
          </audio>
          <p><b>Pro:</b> lossless audio quality</p>
            <p><b>Con:</b> large file size</p>
        </div>
        <div className="col-4">
            <h4>OGG</h4>
          <audio controls>
            <source src="/dog.ogg" type="audio/ogg"/>
          </audio>
          <p><b>Pro:</b> Audio quality between mp3 and wav</p>
            <p><b>Con:</b> more computing power</p>
        </div>
      </div>
    </div>
  );
}
