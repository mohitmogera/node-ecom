const products  = [
    {
        productName: "Tata Sampann Chana Dal",
        categoryId: "1",
        productDescription: "Chana Dal",
        productImage:"https://img.dmart.in/images/rwd/products/K/D/A/KDALS500gmTATA3058xx190521_5_B.jpg",
        maxQuantity:"5",
        unitPrice:"60",
        weight: "500 gms"
    },
    {
        productName: "Tata Sampann Moong Dal",
        categoryId: "1",
        productDescription: "Moong Dal",
        productImage:"https://img.dmart.in/images/rwd/products/K/D/A/KDALS1kgTATA3065xx190521_5_B.jpg",
        maxQuantity:"10",
        unitPrice:"185",
        weight: "1000 gms"
    },
    {
        productName: "Tata Sampann Toor Dal",
        categoryId: "1",
        productDescription: "Toor Dal",
        productImage:"https://img.dmart.in/images/rwd/products/K/P/T/KPTurDalTataxx190521_5_B.jpg",
        maxQuantity:"10",
        unitPrice:"180",
        weight: "1000 gms"
    },
    {
        productName: "Satyam Rajma Sharmili",
        categoryId: "2",
        productDescription: "Rajma",
        productImage:"https://img.dmart.in/images/rwd/products/J/R/a/JRajma500gmSTYM624XX311216_1_B.jpg",
        maxQuantity:"5",
        unitPrice:"100",
        weight: "500"
    },
    {
        productName: "Satyam Chowla",
        categoryId: "2",
        productDescription: "Chowli",
        productImage:"https://img.dmart.in/images/rwd/products/I/W/h/IWholePulses500gmSTYM3279XX290216_1_B.jpg",
        maxQuantity:"5",
        unitPrice:"120",
        weight: "500 gms"
    },
    {
        productName: "Satyam Kabuli Chana",
        categoryId: "2",
        productDescription: "Kabuli Chana",
        productImage:"https://img.dmart.in/images/rwd/products/I/W/h/IWholePulses500gmSTYM3285XX290216_2_B.jpg",
        maxQuantity:"10",
        unitPrice:"100",
        weight: "500 gm"
    },
    {
        productName: "KMK Almond Mamra",
        categoryId: "3",
        productDescription: "Almond",
        productImage:"https://img.dmart.in/images/rwd/products/L/A/L/LALMONDS200gmKMK8xx1258200121_5_B.jpg",
        maxQuantity:"10",
        unitPrice:"500",
        weight: "500 gms"
    },
    {
        productName: "Kokan Gem Goa Cashew Classic (Kaju)",
        categoryId: "3",
        productDescription: "Cashew",
        productImage:"https://img.dmart.in/images/rwd/products/K/D/R/KDRYFRUITS500gmKKGC14190421_5_B.jpg",
        maxQuantity:"10",
        unitPrice:"500",
        weight: "500 gms"
    },
    {
        productName: "KMK Pista Salted Irani (Pistachios)",
        categoryId: "3",
        productDescription: "Pista",
        productImage:"https://img.dmart.in/images/rwd/products/L/P/I/LPISTA200gmKanj10xx261220201159_5_B.jpg",
        maxQuantity:"10",
        unitPrice:"500",
        weight: "500 gms"
    },
    {
        productName: "Gemini Refined Sunflower Oil",
        categoryId: "4",
        productDescription: "Sunflower Oil",
        productImage:"https://img.dmart.in/images/rwd/products/I/S/u/ISunflowerOil5LGMN3466XX290216_1_B.jpg",
        maxQuantity:"5",
        unitPrice:"600",
        weight: "1000 ml"
    },
    {
        productName: "Saffola Gold Oil",
        categoryId: "4",
        productDescription: "Blended Oil",
        productImage:"https://img.dmart.in/images/rwd/products/I/B/l/IBlendedOils5ltrSFOL3355xx170521_5_B.jpg",
        maxQuantity:"5",
        unitPrice:"600",
        weight: "1000 ml"
    },
    {
        productName: "Gulab Filtered Groundnut Oil",
        categoryId: "4",
        productDescription: "Groundnut Oil",
        productImage:"https://img.dmart.in/images/rwd/products/K/G/R/KGROUNDNUTOIL15LGULAB1XX12918_3_B.jpg",
        maxQuantity:"5",
        unitPrice:"600",
        weight: "1000 ml"
    },
    {
        productName: "Gowardhan Pure Cow Ghee Pouch",
        categoryId: "5",
        productDescription: "Ghee",
        productImage:"https://img.dmart.in/images/rwd/products/I/G/h/IGhee1LGWDN3387XX290216_3_B.jpg",
        maxQuantity:"10",
        unitPrice:"700",
        weight: "1000 gms"
    },
    {
        productName: "Prabhat Dairy Cow Ghee Pouch",
        categoryId: "5",
        productDescription: "Ghee",
        productImage:"https://img.dmart.in/images/rwd/products/L/C/O/LCOWGHEE1LPrab34xx240521_5_B.jpg",
        maxQuantity:"10",
        unitPrice:"700",
        weight: "1000 gms"
    },
    {
        productName: "Dalda Vanaspati",
        categoryId: "5",
        productDescription: "Vanaspati",
        productImage:"https://img.dmart.in/images/rwd/products/I/V/a/IVanaspati1LDALD3485XX290216_1_B.jpg",
        maxQuantity:"10",
        unitPrice:"700",
        weight: "1000 gms"
    },
    {
        productName: "Aashirvaad Superior MP Atta",
        categoryId: "6",
        productDescription: "Atta",
        productImage:"https://img.dmart.in/images/rwd/products/K/A/t/KAtta10kgASHW2223xx150421_5_B.jpg",
        maxQuantity:"5",
        unitPrice:"500",
        weight: "10 kg"
    },
    {
        productName: "Satyam Sabudana",
        categoryId: "6",
        productDescription: "Grains",
        productImage:"https://img.dmart.in/images/rwd/products/I/S/a/ISabudana500gmSTYM3986XX290216_1_B.jpg",
        maxQuantity:"10",
        unitPrice:"50",
        weight: "500 gms"
    },
    {
        productName: "Aashirvaad Select Sharbati Wheat Atta",
        categoryId: "6",
        productDescription: "Atta",
        productImage:"https://img.dmart.in/images/rwd/products/I/A/t/IAtta5kgASHW3501xx150421_5_B.jpg",
        maxQuantity:"10",
        unitPrice:"500",
        weight: "5 kg"
    },{
        productName: "Basmati Rice Mogra",
        categoryId: "7",
        productDescription: "Rice",
        productImage:"https://img.dmart.in/images/rwd/products/K/R/I/KRICE10KG06xx23119_3_B.jpg",
        maxQuantity:"5",
        unitPrice:"400",
        weight: "10 kg"
    },
    {
        productName: "Wada Kolam Sorted Rice",
        categoryId: "7",
        productDescription: "Rice",
        productImage:"https://img.dmart.in/images/rwd/products/L/R/I/LRICE10kg02xx160320_5_B.jpg",
        maxQuantity:"5",
        unitPrice:"300",
        weight: "10 kg"
    },
    {
        productName: "Daawat Brown Basmati Rice",
        categoryId: "7",
        productDescription: "Rice",
        productImage:"https://img.dmart.in/images/rwd/products/I/B/a/IBasmatiRice1kgDAWT3566xx260221_5_B.jpg",
        maxQuantity:"10",
        unitPrice:"135",
        weight: "1 kg"
    },{
        productName: "Vandevi Hing Powder",
        categoryId: "8",
        productDescription: "Powdered Spices",
        productImage:"https://img.dmart.in/images/rwd/products/I/P/o/IPowderMasala100gVNDV3868XX290216_3_B.jpg",
        maxQuantity:"10",
        unitPrice:"60",
        weight: "100 gm"
    },
    {
        productName: "Satyam Jeera",
        categoryId: "8",
        productDescription: "Whole Spices",
        productImage:"https://img.dmart.in/images/rwd/products/I/W/h/IWholeSpices200gmSTYM3965XX290216_1_B.jpg",
        maxQuantity:"10",
        unitPrice:"60",
        weight: "100 gm"
    },
    {
        productName: "Mother's Recipe Rozaana Ginger & Garlic Paste",
        categoryId: "8",
        productDescription: "Cooking Pastes",
        productImage:"https://img.dmart.in/images/rwd/products/K/P/C/KPCookingPasteMothersXX20417_1_B.jpg",
        maxQuantity:"10",
        unitPrice:"60",
        weight: "100 gm"
    },{
        productName: "Tata Salt - Evaporated Iodised",
        categoryId: "9",
        productDescription: "Salt",
        productImage:"https://img.dmart.in/images/rwd/products/I/S/a/ISalt1kgTATA3655xx190521_5_B.jpg",
        maxQuantity:"5",
        unitPrice:"20",
        weight: "1 kg"
    },
    {
        productName: "24 Mantra Organic Sugar",
        categoryId: "9",
        productDescription: "Sugar",
        productImage:"https://img.dmart.in/images/rwd/products/K/S/U/KSUGAR1kgMNTR18XX143211713_5_B.jpg",
        maxQuantity:"5",
        unitPrice:"50",
        weight: "1 kg"
    },
    {
        productName: "Sakas Premium Jaggery",
        categoryId: "9",
        productDescription: "Jaggery",
        productImage:"https://img.dmart.in/images/rwd/products/I/J/a/IJaggery900gmPRMI3645XX290216_1_B.jpg",
        maxQuantity:"5",
        unitPrice:"60",
        weight: "1 kg"
    },
]

module.exports = products;