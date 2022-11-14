let salesData = {
  "6-1-21": [
    {
      company: "ms",
      product: "keyboard",
      sellCount: 12
    },
    {
      company: "nike",
      product: "f100",
      sellCount: 17
    }
  ],
  "7-1-21": [
    {
      company: "ms",
      product: "keyboard",
      sellCount: 10
    },
    {
      company: "nike",
      product: "f100",
      sellCount: 81
    },
    {
      company: "samsung",
      product: "galaxy",
      sellCount: 54
    }
  ],
  "8-1-12": [
    {
      company: "iBall",
      product: "keyboard",
      sellCount: 14
    },
    {
      company: "samsung",
      product: "note2",
      sellCount: 23
    }
  ]
};


    const arr = []

    for (da in salesData) {
        let obj = {}
        // for (ele in da) {
        //     console.log(da[ele])
        // }
        for (ele in salesData[da]) {
            // console.log(salesData[da][ele])
            // if (salesData[da][ele]['company'] && salesData[da][ele]['product']) {
            //     console.log(salesData[da][ele]['sellCount'])
            // }
          for (j in salesData[da]) {
            if (salesData[da][ele]['company'] === salesData[da][j]['company'] && salesData[da][ele]['product'] === salesData[da][j]['product']) {
              obj = { company: salesData[da][ele]['company'], product: salesData[da][ele]['product'], sellCount: salesData[da][ele]['sellCount'] += salesData[da][j]['sellCount'] }
              
              console.log(obj)
            }
          }
          
          
        }
    }



