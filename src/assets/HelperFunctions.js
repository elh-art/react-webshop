import local_json from "../assets/products.json"

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
// export const shortName = (e) => e.name.replaceAll(" ", "_").replaceAll("'", "")

export const handlePrice = (cart, setPrice) => {
  let sumPrice = 0
  cart.map((item) => (sumPrice += item[0].amount * item[0].newPrice))
  setPrice(sumPrice)
}

export const handleClickOnX = (item, arr, setArr) => {
  const selectedCardId = parseInt(item.target.parentNode.parentNode.id)
  const selectedCardObj = local_json.filter((obj) => obj.id === selectedCardId)
  //Product can be placed into array (cart, wishList) only once:
  const selectedCardAgain = arr.some((item) => item[0].id === selectedCardId)
  if (selectedCardAgain === false) setArr([...arr, selectedCardObj])
}
