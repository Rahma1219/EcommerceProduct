const Currency = new Intl.NumberFormat(undefined,{
    currency:"USD",
    style:"currency"
})

function FormatCurrency(number){
    return Currency.format(number)
}
export default FormatCurrency