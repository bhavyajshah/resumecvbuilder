export const defaultTemplate: ResumeTemplate = {
  id: 'default',
  name: 'Professional Modern',
  content: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        @page {
          size: A4;
          margin: 2cm;
        }
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 0;
        }
        .header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .name {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .contact-info {
          margin-bottom: 1.5rem;
        }
        .section {
          margin-bottom: 2rem;
        }
        .section-title {
          font-size: 1.2rem;
          font-weight: bold;
          border-bottom: 2px solid #333;
          margin-bottom: 1rem;
        }
        .footer {
          text-align: center;
          margin-top: 2rem;
          font-size: 0.8rem;
        }
      </style>
    </head>
    <body>
      <div class="header">
        \${header}
        <div class="name">\${firstName} \${lastName}</div>
        <div class="contact-info">
          \${email} | \${phone} | \${address}
        </div>
      </div>

      <div class="section">
        <div class="section-title">Professional Summary</div>
        <div>\${summary}</div>
      </div>

      <div class="section">
        <div class="section-title">Experience</div>
        \${experience}
      </div>

      <div class="section">
        <div class="section-title">Education</div>
        \${education}
      </div>

      <div class="section">
        <div class="section-title">Skills</div>
        \${skills}
      </div>

      <div class="footer">
        \${footer}
      </div>
    </body>
    </html>
  `
};