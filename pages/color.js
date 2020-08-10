import Head from "next/head"
import Highlighter from "react-syntax-highlighter"
import paraisoDark from "react-syntax-highlighter/dist/cjs/styles/hljs/paraiso-dark"

const ColorPage = () => (
  <article className="color-page" data-layout="standard">
    <Head>
      <title>{"Styling Demo - /colors"}</title>
      <link rel="icon" href="favicon.ico" />
    </Head>

    <h1>{"Color Demo"}</h1>
    <h2>{"Hacked by Andrew"}</h2>

    <p>
      {"Since this is a prototype, I've restricted myself to monochrome "}
      {"colorschemes. It's convenient because I can use sass builtins to "}
      {"derive secondary colors: "}
      <a href="#generating-colors">{"See below"}</a>
      {"."}
    </p>

    <p>
      {"These divs have a"}
      <code>{"[data-pal]"}</code>
      {"attribute to select a palette, and a"}
      <code>{"[data-pal-scheme]"}</code>
      {"attribute which determines how the palette is applied."}
    </p>
    <section className="color-demo">
      {["q", "w", "e", "r", "t"].map((shadeIdx, idx) => (
        <div key={shadeIdx} data-pal={shadeIdx} data-pal-scheme="standard">
          <span>{`fill: --${shadeIdx}-fill`}</span>
          <span>{`text: --${shadeIdx}-text`}</span>
          <strong>{`highlight: --${shadeIdx}-text-hi`}</strong>
        </div>
      ))}
    </section>

    <p>
      {"These divs have the same"}
      <code>{"data-pal"}</code>
      {"values, and the container has"}
      <code>{"[data-pal-scheme=\"invert\"]"}</code>
      {"\u2014the palette is the same, but the scheme by which it's "}
      {"applied is different."}
    </p>

    <section className="color-demo" data-pal-scheme="invert">
      {["q", "w", "e", "r", "t"].map((shadeIdx, idx) => (
        <div key={shadeIdx} data-pal={shadeIdx}>
          <span>{`fill: --${shadeIdx}-text`}</span>
          <span>{`text: --${shadeIdx}-fill`}</span>
          <strong>{`highlight: --${shadeIdx}-fill-hi`}</strong>
        </div>
      ))}
    </section>

    <Highlighter
      language="scss"
      style={paraisoDark}
      customStyle={{ overflowX: "none" }}>{`
.color-page {
  > * + * {
    margin-top: var(--s1);
  }

  section.color-demo {
    display: flex;
    justify-content: space-evenly;
    padding-top: var(--s3);
    padding-bottom: var(--s3);
    border: 1px solid black;
    margin-left: var(--s3);
    margin-right: var(--s3);

    > div {
      width: var(--s5);
      height: var(--s5);
      display: flex;
      flex-direction: column;
      place-content: center center;
      text-align: center;
      font-size: large;
    }
  }
}
    `}</Highlighter>

    <h2 id="generating-colors">{"Generating Colors"}</h2>

    <p>
      {"See below for the code that generates these colorschemes from a "}
      {"basic monochrome palette."}
    </p>

    <Highlighter
      language="scss"
      style={paraisoDark}
      customStyle={{ overflowX: "none" }}>{`
@use "sass:color";
@use "sass:math";

$shades: 'q' 1 'russian-violet' hsla(255, 45%, 18%, 1),
  'w' 2 'purple-navy' hsla(250, 26%, 44%, 1),
  'e' 3 'purple-mountain-majesty' hsla(266, 32%, 64%, 1),
  'r' 4 'lilac' hsla(292, 28%, 68%, 1),
  't' 5 'pink-lavender' hsla(327, 43%, 79%, 1);

:root {
  --__origin: 'styles/color';

  @each $sid, $sidx, $sname, $hsla in $shades {
    $fillcolor: $hsla;
    $fill-highlight: color.change($fillcolor, $lightness: +30%);

    $textcolor: color.change(
      color.scale($fillcolor, $saturation: -60%),
      $lightness: math.percentage(0.65 + ($sidx * 0.065))
    );
    $text-highlight: color.change($textcolor, $saturation: +30%);

    // named fill + highlight
    --#{$sname}: #{$fillcolor};
    --#{$sname}-highlight: #{$fill-highlight};

    // named text + highlight
    --#{$sname}__text: #{$textcolor};
    --#{$sname}__text-highlight: #{$text-highlight};

    // identifier fill + highlight
    --#{$sid}-fill: var(--#{$sname});
    --#{$sid}-fill-hi: var(--#{$sname}-highlight);

    // identifier text + highlight
    --#{$sid}-text: var(--#{$sname}__text);
    --#{$sid}-text-hi: var(--#{$sname}__text-highlight);
  }
}

@each $sid, $sidx, $sname, $hsla in $shades {
  // palette selectors
  .pal-#{$sid},
  .pal-#{$sidx},
  .#{$sname},
  [data-pal='#{$sid}'],
  [data-pal='#{$sidx}'] [data-pal='#{$sname}'] {
    --fill-color: var(--#{$sid}-fill);
    --text-color: var(--#{$sid}-text);
    --text-hi: var(--#{$sid}-text-hi);
  }
}
    `}</Highlighter>
  </article>
)

export default ColorPage
