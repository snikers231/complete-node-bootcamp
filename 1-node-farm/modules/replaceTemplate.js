module.exports = (template, data) => {
  return template.replace(/{%PRODUCTNAME%}/g, data.productName)
    .replace(/{%IMAGE%}/g, data.image)
    .replace(/{%QUANTITY%}/g, data.quantity)
    .replace(/{%PRICE%}/g, data.price)
    .replace(/{%ID%}/g, data.id)
    .replace(/{%NUTRIENTS%}/g, data.nutrients)
    .replace(/{%DESCRIPTION%}/g, data.description)
    .replace(/{%FROM%}/g, data.from)
    .replace(/{%NOT_ORGANIC%}/g, data.organic ? "not-organic" : "")
}