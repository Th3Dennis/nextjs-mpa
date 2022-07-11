import {
  Animator,
  batch,
  FadeIn,
  ScrollContainer,
  ScrollPage,
  StickyIn,
  ZoomIn,
  Sticky,
  Fade,
  MoveOut,
  Move,
} from "react-scroll-motion";

export default function Home() {
  const zoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const fadeUp = batch(Fade(), Sticky(), Move());
  return (
    <div className=".bg-primary">
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <h2>What&apos;s the porpuse of this page?</h2>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={zoomInScrollOut}>
            <h2>
              The purpose of this website is to show all the possibilities that
              can be created using NextJS.
            </h2>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={fadeUp}>
            <h2>
              Go and explore the next pages by clicking the links in the Navbar
            </h2>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}
