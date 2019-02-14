module.exports = survey => {
  const { REDIRECT_DOMAIN } = process.env;
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>I would like your input!</h3>
          <p>Please answer the following question:</p>
          <p>${survey.body}</p>
          <div>
            <a href="${REDIRECT_DOMAIN}/api/surveys/thanks">Yes</a>
          </div>
          <div>
            <a href="${REDIRECT_DOMAIN}/api/surveys/thanks">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};