const order= (values, json) =>{

    let result = {};
    
    Object.keys(json.data).forEach(item => {

        let limit = json.data[item].limit,
            over =  json.data[item].over_carrier_service_id,
            under = json.data[item].under_carrier_service_id;

        result[item] = {
            limit: limit,
            over: {
                carrier: values[over].carrier,
                service: values[over].service
            },
            under: {
                carrier: values[under].carrier,
                service: values[under].service
            }
        }
    });

    return result;

}

let result = {
    BUIN: {
        limit: 1,
        over: {
            carrier: "CHP",
            service: "express",
        },
        under: {
            carrier: "CHP",
            service: "express",
        }
    },
    LAJA: {
        limit: 1,
        over: {
            carrier: "CCH",
            service: "DEX",
        },
        under: {
             carrier: "CCH",
            service: "DEX",
        }
    },
    LEBU: {
        limit: 1,
        over: {
            carrier: "CCH",
            service: "DEX",
        },
        under: {
             carrier: "CCH",
            service: "DEX",
        }
    },
    LOTA: {
        limit: 1,
        over: {
            carrier: "CHP",
            service: "express",
        },
        under: {
            carrier: "CHP",
            service: "express",
        }
    }
} 