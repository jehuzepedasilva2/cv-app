export function sanitizeInput(input) {
  console.log(input);
  let sanitizedString = (
      input.replace(/&nbsp;/g, ' ') // Replace non-breaking spaces
      .replace(/<br\s*\/?>/g, '\n')
      .replace(/&amp;/g, '&')
    ); 

  sanitizedString = sanitizedString.trim();

  return sanitizedString;
}