import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react'
import React from "react";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body>
                <ColorModeScript />
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
