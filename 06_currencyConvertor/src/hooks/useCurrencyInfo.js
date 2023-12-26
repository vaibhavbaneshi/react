import { useEffect, useState } from "react";

function userCurrencyInfo(currency) {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

    useEffect(() => {
        fetch(url)
    }, [])
} 