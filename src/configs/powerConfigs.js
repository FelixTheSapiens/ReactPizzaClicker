export const powerConfigs = [
    //(new)price = (old)price * priceMod + addPrice
    //(new)profit = (old)profit * profitMod + addProfit
    {
        name: 'FingerGuns™ Carrying License',
        img: '/img/fingerGuns.png',
        desc: "You can now carry a powerfull and dangerous weapon. It will not only implant fear in hearts of your enemies, but also enhance your clicking abilities. What a steal!",
        profit: 0,
        price: 10,
        lvl: 0,

        passive: false,
        priceMod: 1.2,
        profitMod: 1.1,
        addPrice: 1,
        addProfit: 0.1
    },
    {
        name: 'Intern Cook',
        img: '/img/internCook.png',
        desc: "Congratulations, you've been promoted to Intern Cook! You may still be the lowest on the pizza-making totem pole, but at least now you get to wear a chef hat without it being considered cultural appropriation. Plus, you'll get access to the highly-coveted pizza oven upgrade, which is definitely not just a repurposed Easy Bake Oven. Keep clicking and maybe one day you'll make it to Sous Chef!",
        profit: 0,
        price: 50,
        lvl: 0,

        passive: false,
        priceMod: 1.4,
        profitMod: 1,
        addPrice: 1,
        addProfit: 1
    },
    {
        name: 'Professional Pizza Oven',
        img: '/img/oven.png',
        desc: "Upgrade to the Professional Pizza Oven and watch your pizzas rise to new heights! Literally. This oven is so powerful, it might just launch your pizzas into orbit. But don't worry, we've added a safety feature to prevent them from burning up upon re-entry. And with its sleek stainless steel exterior, you'll feel like a real pizza pro. Who needs a Ferrari when you have a Professional Pizza Oven?",
        profit: 0,
        price: 1000,
        lvl: 0,

        passive: false,
        priceMod: 1.5,
        profitMod: 1,
        addPrice: 1,
        addProfit: 50
    },
]