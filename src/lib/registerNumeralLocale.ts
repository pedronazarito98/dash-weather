import numeral from "numeral";

export const registerNumeralLocale = () => {
  if (typeof numeral.locales["pt-br"] === "undefined") {
    try {
      numeral.register("locale", "pt-br", {
        delimiters: {
          thousands: ".",
          decimal: ",",
        },

        abbreviations: {
          thousand: "mil",
          million: "mi",
          billion: "bi",
          trillion: "tri",
        },
        ordinal: (number) => "º",
        currency: {
          symbol: "R$",
        },
      });
    } catch (error: any) {
      if (!error.message.includes("already registered")) {
        throw error;
      }
    }
  }
  numeral.locale("pt-br");
};
