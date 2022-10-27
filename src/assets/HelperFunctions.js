// SigIn.js SignUp.js helpers
export const isHidden = (e) => {
  const style = window.getComputedStyle(e)
  return style.display === "none"
}

export const clearErrorMsg = (text) => {
  setTimeout(() => {
    document.getElementById(`response-${text}`).innerText = ""
  }, "3000")
}

// FiveStar generator helper function
export const generateStars = (num) => {
  let i = num
  const starArr = []

  for (let j = 5 - i; j < 5; j++) {
    starArr.push(<i className="fa-solid fa-star"></i>)
  }

  for (let k = 0; k < 5 - i; k++) {
    starArr.push(<i className="fa-regular fa-star"></i>)
  }

  return starArr
}

//ShoppingCart helper functions
export const shortName = (e) => e.name.replaceAll(" ", "_").replaceAll("'", "")
