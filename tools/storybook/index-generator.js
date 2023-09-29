const generateLinks = (package) => `
  <a href="${package.name}" target="_blank" rel="noopener noreferrer" class="vtmn-btn vtmn-btn_variant--tertiary vtmn-mb-4" style="width: 300px">
    ${package.name}
  </a>
`;

const generateHTML = (packages) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Sunology Design System - Vitamin web libraries showcases</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        .container {
            padding: 1.5rem;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            display: flex;
        }
        .btn {
            width: 300px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            position: relative;
            block-size: 3rem;
            border: 0;
            line-height: 1;
            inline-size: -moz-max-content;
            inline-size: max-content;
            padding-block: 0.875rem;
            padding-inline: 1.5rem;
            font-family: Roboto, "system-ui", -apple-system, sans-serif;
            font-weight: 700;
            font-size: 1rem;
            letter-spacing: 0.01687rem;
            border-radius: .25rem;
            color: #0C0C0C;
            fill: #0C0C0C;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            background-color: #EDFF00;
            transition: box-shadow 200ms ease-out;
        }

        .btn:hover {
            background-color: #C3D100;
        }
    </style>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,400;0,700;1,700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="container">
      ${packages.map(generateLinks).join('')}
    </div>
  </body>
  </html>
`;

module.exports = function buildMonorepoIndex(packages) {
  return generateHTML(packages);
};