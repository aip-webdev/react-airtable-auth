export const indexTemplate = (content) =>`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charSet="utf-8"/>
        <link rel="icon" href="/img-src/favicon.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="theme-color" content="#000000"/>
        <meta
            name="description"
            content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="/img-src/logo192.png"/>
        <link rel="manifest" href="/img-src/manifest.json"/>
        <title>Find a Book</title>
    </head>
    <script src="/static/client.js" type="application/javascript"></script>
    <body>
        <div id="root">${content}</div>
    </body>
    </html>
`;
