export const isHidden = (e) => {
  const style = window.getComputedStyle(e);
  return (style.display === 'none')
}

export const clearErrorMsg = (text) => {
  setTimeout(() => {
    document.getElementById(`response-${text}`).innerText = ''
  }, "3000")
}