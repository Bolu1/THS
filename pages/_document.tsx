import { Html, Head, Main, NextScript } from "next/document";
import Document from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
          <script src="../path/to/flowbite/dist/datepicker.js"></script>
          <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/datepicker.min.js"></script>
        </body>
      </Html>
    );
  }
}
