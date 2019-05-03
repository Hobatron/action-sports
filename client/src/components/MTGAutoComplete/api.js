import axios from "axios";

export default {
    autoComplete: (snip, func) => {
        const url = "https://api.scryfall.com/cards/autocomplete?q=" + snip;
        axios.get(url)
            .then((res) => {
                func(res.data.data)
            });
    },
    cardDetails: (cardName, func) => {
        cardName.replace(" // ", "-");
        const url = "https://api.scryfall.com/cards/named?exact=" + cardName;
        axios.get(url)
            .then((results) => [
                func(results.data)
            ]);
    }
};