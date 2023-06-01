
/* Dynamicdropdown */

class restaurantManager{
    const cityUrl = "http://zomatoajulypi.herokuapp.com/location"
    const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="
    
    const getCity = async() => {
        let response = await fetch(cityUrl,{method:"GET"})
        let data = await response.json()
        data.map((item) => {
            let element = document.createElement('option') //<option></option>
            let text = document.createTextNode(item.state) // Delhi
            element.appendChild(text) //<option>Delhi</option>
            element.value = item.state_id //<option value="1">Delhi</option>
            document.getElementById('city').appendChild(element)
            //<select><option value="1">Delhi</option></select>
        })
    }
    
    const getRest = async() => {
        let cityId = document.getElementById('city').value;
        let rest = document.getElementById('restaurants');
        while(rest.length > 0){
            rest.remove(0)
        }
        let response = await fetch(`${restUrl}${cityId}`,{method:"GET"})
        let data = await response.json()
        data.map((item) => {
            let element = document.createElement('option')
            let text = document.createTextNode(`${item.restaurant_name} | ${item.address}`)
            element.appendChild(text)
            rest.appendChild(element)
        })
    }



      // part1(a)
    restaurantList=[
        {
            id: 1,
            restaurantName: 'KFC',
            address: 'Anand Vihar',
            city: 'Delhi'
        },
        {
            id: 2,
            restaurantName: 'Domino',
            address: 'Savita Vihar',
            city: 'Delhi'
        },
        {
            id: 3,
            restaurantName: 'Burger King',
            address: 'Civil Lines',
            city: 'Pune'
        },
        {
            id: 4,
            restaurantName: 'Subway',
            address: 'Cantonment',
            city: 'Mumbai'
        }
    ]

    //part1B
    printAllRestaurantNames= () => {
        return this.restaurantList.map((data) => {
            return data.restaurantName
        })
    }
    //part1C
    filterRestaurantByCity=(cityName) => {
        return this.restaurantList.filter((data) => {
            return data.city === cityName
        })
    }
}

let restObj = new restaurantManager();

// console.log(restObj.printAllRestaurantNames())
// ['KFC', 'Domino', 'Burger King', 'Subway' ]
// console.log(restObj.filterRestaurantByCity('Delhi'))

//////part2-a/////
var orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
};

let out = 0;
for(key in orderData){
    out += Number(orderData[key])
    //out  = out + Number(orderData[key])      we also write like this
}

// console.log(out)
//199

/*
20/199*100
10.050251256281408
29/199*100
14.572864321608039
30/199*100
15.07537688442211
*/

function getPercent(orderData){
    let total = 0;
    for(key in orderData){
        total += Number(orderData[key])
    }

    let output = [];
    let count = 0;
    for(key in orderData){
        let percentValue = ((orderData[key]/total)*100).toFixed(2)
        count = count+1;
        let myObj = {};
        myObj.id = count;
        myObj.order = key;
        myObj.order_percent = `${percentValue}%`;
        myObj.restaurant="Punjabi Tadka"
        output.push(myObj)
    }

    return output
}

console.log(getPercent(orderData))

/*
[
  {
    id: 1,
    order: 'Below 500',
    order_percent: '10.05%',
    restaurant: 'Punjabi Tadka'
  },
  {
    id: 2,
    order: '500-1000',
    order_percent: '14.57%',
    restaurant: 'Punjabi Tadka'
  },
  {
    id: 3,
    order: '1000-1500',
    order_percent: '15.08%',
    restaurant: 'Punjabi Tadka'
  },
  {
    id: 4,
    order: '1500-2000',
    order_percent: '22.11%',
    restaurant: 'Punjabi Tadka'
  },
  {
    id: 5,
    order: 'Above 2000',
    order_percent: '38.19%',
    restaurant: 'Punjabi Tadka'
  }
]
*/