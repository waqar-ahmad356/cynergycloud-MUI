import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import basic from "../../assets/basic.png";
import check_circle from "../../assets/Check Circle.png";
import all_data from "../../assets/all_data";

// Map country codes to currency symbols
const currencySymbolMap = {
  USD: "$",
  GBP: "£",
  EUR: "€",
  INR: "₹",
  PKR: "₨",
  AUD: "A$",
  CAD: "C$",
  CNY: "¥",
  JPY: "¥",
  RUB: "₽",
  BRL: "R$",
  ZAR: "R",
  MXN: "$",
  SGD: "S$",
  CHF: "CHF",
  SEK: "kr",
  NOK: "kr",
  DKK: "kr",
  NZD: "NZ$",
  KRW: "₩",
  THB: "฿",
  MYR: "RM",
  IDR: "Rp",
  VND: "₫",
  SAR: "﷼",
  AED: "د.إ",
  NGN: "₦",
  EGP: "£",
  KES: "KSh",
  BDT: "৳",
  TRY: "₺",
  HKD: "HK$",
  ILS: "₪",
  ARS: "$",
  CLP: "$",
  COP: "$",
  PEN: "S/",
  PHP: "₱",
  LKR: "Rs",
  QAR: "﷼",
  KWD: "KD",
  OMR: "﷼",
  BHD: "BD",
  JMD: "J$",
  ZWL: "Z$",
  IRR: "﷼",
  IQD: "د.ع",
  JOD: "د.ا",
  LBP: "ل.ل",
  MMK: "K",
  ISK: "kr",
  PLN: "zł",
  HUF: "Ft",
  CZK: "Kč",
  RON: "lei",
  BGN: "лв",
  HRK: "kn",
  UAH: "₴",
  KZT: "₸",
  UZS: "лв",
  GEL: "₾",
  AMD: "֏",
  AZN: "₼",
  BYN: "Br",
  TMT: "T",
  KGS: "с",
  MNT: "₮",
};

const Pricing = () => {
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [prices, setPrices] = useState({ basic: 99, pro: 149, enterprise: 199 });

  const fetchCurrencies = async () => {
    try {
      const api_key = "6ec1f09c44cdd1fbb203274c67475489";
      const res = await fetch(`http://api.currencylayer.com/list?access_key=${api_key}`);
      const data = await res.json();
      setCurrencies(data.currencies);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchExchangeRate = async (currency) => {
    try {
      const apikey = "Zm84WOoRBmUglB0ucbMeOA1sPZLPbiVw";
      const res = await fetch(`https://api.currencybeacon.com/v1/convert?from=USD&to=${currency}&amount=1&api_key=${apikey}`);
      const data = await res.json();
      const rate = data.response.value;
      setExchangeRate(rate);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUserLocation = async () => {
    try {
      const apiKey = "478fe52c3fc9487fb0049aa136d319dc";
      const res = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`);
      const data = await res.json();
      const countryCode = data.country_code2;
      const userCurrency = getCurrencyByCountryCode(countryCode) || countryCode;
      console.log(userCurrency);
      setSelectedCurrency(userCurrency);
    } catch (error) {
      console.log("Error fetching user location", error);
    }
  };

  const getCurrencyByCountryCode = (countryCode) => {
    const currencyMap = {
      US: "USD",
      GB: "GBP",
      EU: "EUR",
      IN: "INR",
      PK: "PKR",
      AU: "AUD",
      CA: "CAD",
      CN: "CNY",
      JP: "JPY",
      RU: "RUB",
      BR: "BRL",
      ZA: "ZAR",
      MX: "MXN",
      SG: "SGD",
      CH: "CHF",
      SE: "SEK",
      NO: "NOK",
      DK: "DKK",
      NZ: "NZD",
      KR: "KRW",
      TH: "THB",
      MY: "MYR",
      ID: "IDR",
      VN: "VND",
      SA: "SAR",
      AE: "AED",
      NG: "NGN",
      EG: "EGP",
      KE: "KES",
      BD: "BDT",
      TR: "TRY",
      HK: "HKD",
      IL: "ILS",
      AR: "ARS",
      CL: "CLP",
      CO: "COP",
      PE: "PEN",
      PH: "PHP",
      LK: "LKR",
      QA: "QAR",
      KW: "KWD",
      OM: "OMR",
      BH: "BHD",
      JM: "JMD",
      ZW: "ZWL",
      IR: "IRR",
      IQ: "IQD",
      JO: "JOD",
      LB: "LBP",
      MM: "MMK",
      IS: "ISK",
      PL: "PLN",
      HU: "HUF",
      CZ: "CZK",
      RO: "RON",
      BG: "BGN",
      HR: "HRK",
      UA: "UAH",
      KZ: "KZT",
      UZ: "UZS",
      GE: "GEL",
      AM: "AMD",
      AZ: "AZN",
      BY: "BYN",
      TM: "TMT",
      KG: "KGS",
      MN: "MNT",
    };
    return currencyMap[countryCode];
  };

  const getCurrencySymbol = (currencyCode) => {
    return currencySymbolMap[currencyCode] || currencyCode;
  };

  useEffect(() => {
    fetchCurrencies();
    fetchUserLocation();
  }, []);

  useEffect(() => {
    if (selectedCurrency !== "USD") {
      fetchExchangeRate(selectedCurrency);
    } else {
      setExchangeRate(1);
    }
  }, [selectedCurrency]);

  const formatPrice = (price) => {
    const symbol = getCurrencySymbol(selectedCurrency);
    return symbol + (price * exchangeRate).toFixed(2);
  };

  return (
    <Box sx={{display:"flex",flexDirection:"column",gap:{xs:"13px",lg:"19px"},padding:{xs:'20px 53px 48px',lg:'78px 117px'},backgroundColor:"#EEEDF5",justifyContent:"center",alignItems:"center"}}  id="pricing">
    <Box sx={{display:"flex",flexDirection:"column",gap:{xs:"",lg:"31px"},justifyContent:"center",alignItems:"center"}} >
      <Box sx={{display:"flex",flexDirection:"column",gap:{xs:"8px",lg:"13px"},justifyContent:"center",alignItems:"center"}} >
        <Typography sx={{color:"#0F172A",fontSize:{xs:"24px",lg:"56px"},fontWeight:"700"}} >Affordable pricing plans</Typography>
        <Typography sx={{color:"#6F6C90",fontSize:{xs:"12px",lg:"21px",fontWeight:"400"}}}>Flexible Plans Tailored to Your Goals</Typography>
      </Box>
      <Box sx={{display:"flex",gap:{xs:"8px",lg:"14px",alignItems:"center"}}} className="flex flex-row lg:gap-[14px] gap-2 items-center">
        <Typography sx={{color:"#170F49",fontSize:{xs:"12px",lg:"21px"},lineHeight:"35px"}}>How many users you have?</Typography>
        <Box component="span" sx={{width:{xs:"53px",lg:"119px"},height:{xs:"27px",lg:"61px"},borderRadius:{xs:"8px",lg:"18px"},border:"1px solid #D9DBE9",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#fff",fontWeight:"700"}} >10</Box>
        <Box component="span" sx={{color:"#170F49",fontSize:{xs:"12px",lg:"21px",fontWeight:"700"}}} className="text-[#170F49] lg:text-[21px] text-[12px] font-bold lg:leading-6">user</Box>
      </Box>
    </Box>
    <Box sx={{display:"flex",flexDirection:{xs:"column",lg:"row"},gap:{xs:"16px",lg:"30px"},alignItems:"flex-start",justifyContent:"center"}}>
    {/*----------------------Card 1---------------*/}
      <Box sx={{display:"flex",flexDirection:"column",padding:{xs:"26px 29px",lg:"47px 56px 50px"},gap:{xs:"8px",lg:"21px"},borderRadius:{xs:"16px",lg:"28px"},border:"2px solid #EFF0F6",backgroundColor:"#fff",width:{xs:"280px",lg:"420px"}}}>
        <Box sx={{display:"flex",flexDirection:"row",gap:"12px"}} >
          <Box component="img" src={basic} sx={{width:{xs:"48px",lg:"85px",height:{xs:"48px",lg:"85px"}}}} className="lg:w-[85px] w-[48px] h-[48px] lg:h-[85px]" alt="basic-plan" />
          <Box  >
            <Typography sx={{marginBottom:"0px",color:"#6F6C90",fontSize:{xs:"12px",lg:"21px"},fontWeight:"500",lineHeight:"23px"}}>{all_data.basic_card.subtitle}</Typography>
            <Typography sx={{color:"#170F49",fontSize:{xs:"16px",lg:"28px"},fontWeight:"700",lineHeight:{xs:"23px",lg:"41px"}}} className="lg:text-[28px] text-[#170F49] text-[16px] font-bold lg:leading-10">{all_data.basic_card.title}</Typography>
          </Box>
        </Box>
        <Box sx={{marginTop:{lg:"6px"}}}>
          <Typography sx={{color:"#6F6C90",fontSize:{xs:"12px",lg:"21px"},fontWeight:"400",lineHeight:{xs:"20px",lg:"35px"},width:{lg:"350px"}}} >{all_data.basic_card.description}</Typography>
        </Box>
        <Box sx={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:{lg:"12px"},flexWrap:"wrap"}} >
          <Typography sx={{color:"#0F172A",fontSize:{xs:"36px",lg:"63px"},fontWeight:"700",lineHeight:{xs:"44px",lg:"77px"}, wordBreak: "break-word"}} >{formatPrice(prices.basic)}</Typography>
          <Typography sx={{color:"#6F6C90",fontSize:{xs:"13px",lg:"24px"},fontWeight:"500",lineHeight:{xs:"14px",lg:"24px"}}} >/monthly</Typography>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",gap:{xs:"17px",lg:"31px"}}} >
          <Typography sx={{color:"#170F49",fontSize:{xs:"12px",lg:"21px"},fontWeight:"700",lineHeight:{xs:"13px",lg:"23px"}}} >What’s included</Typography>
          <Box sx={{display:"flex",flexDirection:"column",gap:{xs:"10px",lg:"25px",alignItems:"flex-start",justifyContent:"center"}}} >
            <Box sx={{display:"flex",gap:{xs:"9px",lg:"16px"},justifyContent:"flex-start",alignItems:"center"}}>
              <Box component="img" src={check_circle} sx={{width:{xs:"18px",lg:"31px"},height:{xs:"18px",lg:"31px"}}} alt="" />
              <Typography sx={{marginBottom:"0px",fontSize:{xs:"12px",lg:"21px"},color:"#170F49",fontWeight:"400",lineHeight:{xs:"13px",lg:"23px"}}} className="mb-0 lg:text-[21px] text-[12px] text-[#170F49] font-normal lg:leading-6">{all_data.basic_card.feature_1}</Typography>
            </Box>
            <Box sx={{display:"flex",gap:{xs:"9px",lg:"16px"},justifyContent:"flex-start",alignItems:"center"}}>
              <Box component="img" src={check_circle} sx={{width:{xs:"18px",lg:"31px"},height:{xs:"18px",lg:"31px"}}} alt="" />
              <Typography sx={{marginBottom:"0px",fontSize:{xs:"12px",lg:"21px"},color:"#170F49",fontWeight:"400",lineHeight:{xs:"13px",lg:"23px"}}} className="mb-0 lg:text-[21px] text-[12px] text-[#170F49] font-normal lg:leading-6">{all_data.basic_card.feature_2}</Typography>
            </Box>
            <Box sx={{display:"flex",gap:{xs:"9px",lg:"16px"},justifyContent:"flex-start",alignItems:"center"}}>
              <Box component="img" src={check_circle} sx={{width:{xs:"18px",lg:"31px"},height:{xs:"18px",lg:"31px"}}} alt="" />
              <Typography sx={{marginBottom:"0px",fontSize:{xs:"12px",lg:"21px"},color:"#170F49",fontWeight:"400",lineHeight:{xs:"13px",lg:"23px"}}} className="mb-0 lg:text-[21px] text-[12px] text-[#170F49] font-normal lg:leading-6">{all_data.basic_card.feature_3}</Typography>
            </Box>
            <Box sx={{display:"flex",gap:{xs:"9px",lg:"16px"},justifyContent:"flex-start",alignItems:"center"}}>
              <Box component="img" src={check_circle} sx={{width:{xs:"18px",lg:"31px"},height:{xs:"18px",lg:"31px"}}} alt="" />
              <Typography sx={{marginBottom:"0px",fontSize:{xs:"12px",lg:"21px"},color:"#170F49",fontWeight:"400",lineHeight:{xs:"13px",lg:"23px"}}} className="mb-0 lg:text-[21px] text-[12px] text-[#170F49] font-normal lg:leading-6">{all_data.basic_card.feature_4}</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:{xs:"10px",lg:"20px"},width:{xs:"207px",lg:"330px"},height:{xs:"51px",lg:"89px"},borderRadius:{xs:"64px",lg:"113px"},backgroundColor:"#22739C"}}>
          <Typography sx={{color:"#fff",fontSize:{xs:"12px",lg:"21px"},fontWeight:"700"}}>Get started</Typography>
        </Box>
      </Box>
      {/*-------------card 2------------*/}
      <Box sx={{display:"flex",position:"relative",flexDirection:"column",padding:{xs:"26px 29px",lg:"47px 56px 50px"},gap:{xs:"8px",lg:"21px"},borderRadius:{xs:"16px",lg:"28px"},border:"2px solid #EFF0F6",backgroundColor:"#22739C",width:{xs:"280px",lg:"420px"}}}>
        <Box sx={{display:"flex",flexDirection:"row",gap:"12px"}} >
          <Box component="img" src={basic} sx={{width:{xs:"48px",lg:"85px",height:{xs:"48px",lg:"85px"}}}} className="lg:w-[85px] w-[48px] h-[48px] lg:h-[85px]" alt="basic-plan" />
          <Box sx={{marginTop:{lg:"6px"}}}>
            <Typography sx={{marginBottom:"0px",color:"#EFF0F6",fontSize:{xs:"12px",lg:"21px"},fontWeight:"500",lineHeight:"23px"}}>{all_data.pro_card.subtitle}</Typography>
            <Typography sx={{color:"#fff",fontSize:{xs:"16px",lg:"28px"},fontWeight:"700",lineHeight:{xs:"23px",lg:"41px"}}} >{all_data.pro_card.title}</Typography>
          </Box>
        </Box>
        <Box>
          <Typography sx={{color:"#D9DBE9",fontSize:{xs:"12px",lg:"21px"},fontWeight:"400",lineHeight:{xs:"20px",lg:"35px"},width:{lg:"350px"}}} >{all_data.pro_card.description}</Typography>
        </Box>
        <Box sx={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:{lg:"12px"},flexWrap:"wrap"}} >
          <Typography sx={{color:"#fff",fontSize:{xs:"36px",lg:"63px"},fontWeight:"700",lineHeight:{xs:"44px",lg:"77px"}, wordBreak: "break-word"}} >{formatPrice(prices.pro)}</Typography>
          <Typography sx={{color:"#D9DBE9",fontSize:{xs:"13px",lg:"24px"},fontWeight:"500",lineHeight:{xs:"14px",lg:"24px"}}} >/monthly</Typography>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",gap:{xs:"17px",lg:"31px"}}} >
          <Typography sx={{color:"#fff",fontSize:{xs:"12px",lg:"21px"},fontWeight:"700",lineHeight:{xs:"13px",lg:"23px"}}} >What’s included</Typography>
          <Box sx={{display:"flex",flexDirection:"column",gap:{xs:"10px",lg:"25px",alignItems:"flex-start",justifyContent:"center"}}} >
            <Box sx={{display:"flex",gap:{xs:"9px",lg:"16px"},justifyContent:"flex-start",alignItems:"center"}}>
              <Box component="img" src={all_data.pro_card.check_circle} sx={{width:{xs:"18px",lg:"31px"},height:{xs:"18px",lg:"31px"}}} alt="" />
              <Typography sx={{marginBottom:"0px",fontSize:{xs:"12px",lg:"21px"},color:"#D9DBE9",fontWeight:"400",lineHeight:{xs:"13px",lg:"23px"}}} className="mb-0 lg:text-[21px] text-[12px] text-[#170F49] font-normal lg:leading-6">{all_data.pro_card.feature_1}</Typography>
            </Box>
            <Box sx={{display:"flex",gap:{xs:"9px",lg:"16px"},justifyContent:"flex-start",alignItems:"center"}}>
              <Box component="img" src={all_data.pro_card.check_circle} sx={{width:{xs:"18px",lg:"31px"},height:{xs:"18px",lg:"31px"}}} alt="" />
              <Typography sx={{marginBottom:"0px",fontSize:{xs:"12px",lg:"21px"},color:"#D9DBE9",fontWeight:"400",lineHeight:{xs:"13px",lg:"23px"}}} className="mb-0 lg:text-[21px] text-[12px] text-[#170F49] font-normal lg:leading-6">{all_data.pro_card.feature_2}</Typography>
            </Box>
            <Box sx={{display:"flex",gap:{xs:"9px",lg:"16px"},justifyContent:"flex-start",alignItems:"center"}}>
              <Box component="img" src={all_data.pro_card.check_circle} sx={{width:{xs:"18px",lg:"31px"},height:{xs:"18px",lg:"31px"}}} alt="" />
              <Typography sx={{marginBottom:"0px",fontSize:{xs:"12px",lg:"21px"},color:"#D9DBE9",fontWeight:"400",lineHeight:{xs:"13px",lg:"23px"}}} className="mb-0 lg:text-[21px] text-[12px] text-[#170F49] font-normal lg:leading-6">{all_data.basic_card.feature_3}</Typography>
            </Box>
            <Box sx={{display:"flex",gap:{xs:"9px",lg:"16px"},justifyContent:"flex-start",alignItems:"center"}}>
              <Box component="img" src={all_data.pro_card.check_circle} sx={{width:{xs:"18px",lg:"31px"},height:{xs:"18px",lg:"31px"}}} alt="" />
              <Typography sx={{marginBottom:"0px",fontSize:{xs:"12px",lg:"21px"},color:"#D9DBE9",fontWeight:"400",lineHeight:{xs:"13px",lg:"23px"}}} className="mb-0 lg:text-[21px] text-[12px] text-[#170F49] font-normal lg:leading-6">{all_data.pro_card.feature_4}</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:{xs:"10px",lg:"20px"},width:{xs:"207px",lg:"330px"},height:{xs:"51px",lg:"89px"},borderRadius:{xs:"64px",lg:"113px"},backgroundColor:"#fff"}}>
          <Typography sx={{color:"#22739C",fontSize:{xs:"12px",lg:"21px"},fontWeight:"700"}}>Get started</Typography>
        </Box>
        <Box sx={{position:"absolute",top:{xs:"10px",lg:"25px"},fontSize:{xs:"9px",lg:"12px"},right:{xs:"30px",lg:"25px"},color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",width:{xs:"66px",lg:"115px"},height:{xs:"26px",lg:"47px"},borderRadius:{xs:"6px",lg:"12px"},backgroundColor:"rgba(255, 255, 255, 0.20)"}}>Popular</Box>
      </Box>
      
      {/*------------------------card 3 -------------------*/}
      <Box sx={{display:"flex",flexDirection:"column",padding:{xs:"26px 29px",lg:"47px 56px 50px"},gap:{xs:"8px",lg:"21px"},borderRadius:{xs:"16px",lg:"28px"},border:"2px solid #EFF0F6",backgroundColor:"#fff",width:{xs:"280px",lg:"420px"}}}>
        <Box sx={{display:"flex",flexDirection:"row",gap:"12px"}} >
          <Box component="img" src={basic} sx={{width:{xs:"48px",lg:"85px",height:{xs:"48px",lg:"85px"}}}} className="lg:w-[85px] w-[48px] h-[48px] lg:h-[85px]" alt="basic-plan" />
          <Box sx={{marginTop:{lg:"6px"}}} >
            <Typography sx={{marginBottom:"0px",color:"#6F6C90",fontSize:{xs:"12px",lg:"21px"},fontWeight:"500",lineHeight:"23px"}}>{all_data.enterprise_card.subtitle}</Typography>
            <Typography sx={{color:"#170F49",fontSize:{xs:"16px",lg:"28px"},fontWeight:"700",lineHeight:{xs:"23px",lg:"41px"}}} className="lg:text-[28px] text-[#170F49] text-[16px] font-bold lg:leading-10">{all_data.enterprise_card.title}</Typography>
          </Box>
        </Box>
        <Box>
          <Typography sx={{color:"#6F6C90",fontSize:{xs:"12px",lg:"21px"},fontWeight:"400",lineHeight:{xs:"20px",lg:"35px"},width:{lg:"350px"}}} >{all_data.enterprise_card.description}</Typography>
        </Box>
        <Box sx={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:{lg:"12px"},flexWrap:"wrap"}} >
          <Typography sx={{color:"#0F172A",fontSize:{xs:"36px",lg:"63px"},fontWeight:"700",lineHeight:{xs:"44px",lg:"77px"}, wordBreak: "break-word"}} >{formatPrice(prices.enterprise)}</Typography>
          <Typography sx={{color:"#6F6C90",fontSize:{xs:"13px",lg:"24px"},fontWeight:"500",lineHeight:{xs:"14px",lg:"24px"}}} >/monthly</Typography>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",gap:{xs:"17px",lg:"31px"}}} >
          <Typography sx={{color:"#170F49",fontSize:{xs:"12px",lg:"21px"},fontWeight:"700",lineHeight:{xs:"13px",lg:"23px"}}} >What’s included</Typography>
          <Box sx={{display:"flex",flexDirection:"column",gap:{xs:"10px",lg:"25px",alignItems:"flex-start",justifyContent:"center"}}} >
            <Box sx={{display:"flex",gap:{xs:"9px",lg:"16px"},justifyContent:"flex-start",alignItems:"center"}}>
              <Box component="img" src={check_circle} sx={{width:{xs:"18px",lg:"31px"},height:{xs:"18px",lg:"31px"}}} alt="" />
              <Typography sx={{marginBottom:"0px",fontSize:{xs:"12px",lg:"21px"},color:"#170F49",fontWeight:"400",lineHeight:{xs:"13px",lg:"23px"}}} className="mb-0 lg:text-[21px] text-[12px] text-[#170F49] font-normal lg:leading-6">{all_data.enterprise_card.feature_1}</Typography>
            </Box>
            <Box sx={{display:"flex",gap:{xs:"9px",lg:"16px"},justifyContent:"flex-start",alignItems:"center"}}>
              <Box component="img" src={check_circle} sx={{width:{xs:"18px",lg:"31px"},height:{xs:"18px",lg:"31px"}}} alt="" />
              <Typography sx={{marginBottom:"0px",fontSize:{xs:"12px",lg:"21px"},color:"#170F49",fontWeight:"400",lineHeight:{xs:"13px",lg:"23px"}}} className="mb-0 lg:text-[21px] text-[12px] text-[#170F49] font-normal lg:leading-6">{all_data.enterprise_card.feature_2}</Typography>
            </Box>
            <Box sx={{display:"flex",gap:{xs:"9px",lg:"16px"},justifyContent:"flex-start",alignItems:"center"}}>
              <Box component="img" src={check_circle} sx={{width:{xs:"18px",lg:"31px"},height:{xs:"18px",lg:"31px"}}} alt="" />
              <Typography sx={{marginBottom:"0px",fontSize:{xs:"12px",lg:"21px"},color:"#170F49",fontWeight:"400",lineHeight:{xs:"13px",lg:"23px"}}} className="mb-0 lg:text-[21px] text-[12px] text-[#170F49] font-normal lg:leading-6">{all_data.enterprise_card.feature_3}</Typography>
            </Box>
            <Box sx={{display:"flex",gap:{xs:"9px",lg:"16px"},justifyContent:"flex-start",alignItems:"center"}}>
              <Box component="img" src={check_circle} sx={{width:{xs:"18px",lg:"31px"},height:{xs:"18px",lg:"31px"}}} alt="" />
              <Typography sx={{marginBottom:"0px",fontSize:{xs:"12px",lg:"21px"},color:"#170F49",fontWeight:"400",lineHeight:{xs:"13px",lg:"23px"}}} className="mb-0 lg:text-[21px] text-[12px] text-[#170F49] font-normal lg:leading-6">{all_data.enterprise_card.feature_4}</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:{xs:"10px",lg:"20px"},width:{xs:"207px",lg:"330px"},height:{xs:"51px",lg:"89px"},borderRadius:{xs:"64px",lg:"113px"},backgroundColor:"#22739C"}}>
          <Typography sx={{color:"#fff",fontSize:{xs:"12px",lg:"21px"},fontWeight:"700"}}>Get started</Typography>
        </Box>
      </Box>
    </Box>
  </Box>
  );
};

export default Pricing;
