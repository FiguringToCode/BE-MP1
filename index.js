const { initializeDatabase } = require('./db/db.connect')
const Categories = require('./models/categories.model')
// const Laptops = require('./models/laptop.model')
// const Smartphones = require('./models/smartphones.model')
// const Wearables = require('./models/wearables.model')
// const AudioGadgets = require('./models/audioGadgets.model')
// const HomeAppliances = require('./models/homeAppliances.model')

const express = require('express')
const app = express()

initializeDatabase()

app.use(express.json())

const cors = require('cors')
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))



const createCategories = async (newCategories) => {
    try {
        const categories = new Categories(newCategories)
        return await categories.save()

    } catch (error) {
        throw error
    }
}



// const createLaptops = async (newLaptop) => {
//     try {
//         const laptops = new Laptops(newLaptop)
//         return await laptops.save()

//     } catch (error) {
//         throw error
//     }
// }



// const createSmartphones = async (newSmartphone) => {
//     try {
//         const smartphones = new Smartphones(newSmartphone)
//         return await smartphones.save()

//     } catch (error) {
//         throw error
//     }
// }



// const createWearables = async (newWearables) => {
//     try {
//         const wearables = new Wearables(newWearables)
//         return await wearables.save()

//     } catch (error) {
//         throw error
//     }
// }



// const createAudioGadget = async (newAudioGadget) => {
//     try {
//         const audioGadgets = new AudioGadgets(newAudioGadget)
//         return await audioGadgets.save()

//     } catch (error) {
//         throw error
//     }
// }



// const createHomeAppliances = async (newHomeAppliances) => {
//     try {
//         const homeAppliances = new HomeAppliances(newHomeAppliances)
//         return await homeAppliances.save()

//     } catch (error) {
//         throw error
//     }
// }



app.post('/category', async (req, res) => {
    try {
        console.log(req.body)
        const savedCategory = await createCategories(req.body)
        res.status(201).json({message: "Category data saved successfully.", category: savedCategory})

    } catch (error) {
        res.status(500).json({error: "Failed to save categories data.", error})
    }
})



// app.post('/laptops', async (req, res) => {
//     try {
//         console.log(req.body)
//         const savedLaptop = await createLaptops(req.body)
//         res.status(201).json({message: "Laptop data saved successfully.", laptop: savedLaptop})

//     } catch (error) {
//         res.status(500).json({error: "Failed to save laptops data.", error})
//     }
// })



// app.post('/smartphones', async (req, res) => {
//     try {
//         console.log(req.body)
//         const savedSmartphone = await createSmartphones(req.body)
//         res.status(201).json({message: "Smartphone data saved successfully.", smartphones: savedSmartphone})

//     } catch (error) {
//         res.status(500).json({error: "Failed to save smartphones data.", error})
//     }
// })



// app.post('/wearables', async (req, res) => {
//     try {
//         console.log(req.body)
//         const savedWearables = await createWearables(req.body)
//         res.status(201).json({message: "Wearable data saved successfully.", wearables: savedWearables})

//     } catch (error) {
//         res.status(500).json({error: "Failed to save wearables data.", error})
//     }
// })



// app.post('/audiogadgets', async (req, res) => {
//     try {
//         console.log(req.body)
//         const savedAudioGadgets = await createAudioGadget(req.body)
//         res.status(201).json({message: "Audio gadgets data saved successfully.", audioGadgets: savedAudioGadgets})

//     } catch (error) {
//         res.status(500).json({error: "Failed to save audioGadgets data.", error})
//     }
// })



// app.post('/homeAppliances', async (req, res) => {
//     try {
//         console.log(req.body)
//         const savedHomeAppliances = await createHomeAppliances(req.body)
//         res.status(201).json({message: "Home Appliances data saved successfully.", homeAppliances: savedHomeAppliances})

//     } catch (error) {
//         res.status(500).json({error: "Failed to save homeAppliances data.", error})
//     }
// })




const getCategories = async () => {
    try {
        const categories = await Categories.find()
        return categories

    } catch (error) {
        throw error
    }
}



// const getLaptops = async () => {
//     try {
//         const laptops = await Laptops.find()
//         return laptops

//     } catch (error) {
//         throw error
//     }
// }



// const getSmartphones = async () => {
//     try {
//         const smartphones = await Smartphones.find()
//         return smartphones

//     } catch (error) {
//         throw error
//     }
// }



// const getWearables = async () => {
//     try {
//         const wearables = await Wearables.find()
//         return wearables

//     } catch (error) {
//         throw error
//     }
// }



// const getAudioGadgets = async () => {
//     try {
//         const audioGadgets = await AudioGadgets.find()
//         return audioGadgets

//     } catch (error) {
//         throw error
//     }
// }



// const getHomeAppliances = async () => {
//     try {
//         const homeAppliances = await HomeAppliances.find()
//         return homeAppliances

//     } catch (error) {
//         throw error
//     }
// }



// const getLaptopsById = async (laptopId) => {
//     try {
//         const laptop = await Laptops.find({_id: laptopId})
//         return laptop

//     } catch (error) {
//         throw error
//     }
// }



// const getSmartphonesById = async (smartphonesId) => {
//     try {
//         const smartphones = await Smartphones.find({_id: smartphonesId})
//         return smartphones

//     } catch (error) {
//         throw error
//     }
// }



// const getWearablesById = async (wearablesId) => {
//     try {
//         const wearables = await Wearables.find({_id: wearablesId})
//         return wearables

//     } catch (error) {
//         throw error
//     }
// }



// const getAudioGadgetsById = async (audiogadgetsId) => {
//     try {
//         const audiogadgets = await AudioGadgets.find({_id: audiogadgetsId})
//         return audiogadgets

//     } catch (error) {
//         throw error
//     }
// }



// const getHomeAppliancesById = async (homeAppliancesId) => {
//     try {
//         const homeAppliances = await HomeAppliances.find({_id: homeAppliancesId})
//         return homeAppliances

//     } catch (error) {
//         throw error
//     }
// }



app.get('/category', async (req, res) => {
    try {
        const categories = await getCategories()
        if(categories.length !== 0){
            res.json(categories)
        } else {
            res.status(404).json({message: "Categories not found", error})
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Failed to make GET call.", error})
    }
})



// app.get('/laptops', async (req, res) => {
//     try {
//         const laptops = await getLaptops()
//         if(laptops.length !== 0){
//             res.json(laptops)
//         } else {
//             res.status(404).json({message: "Laptops not found", error})
//         }

//     } catch (error) {
//         console.log(error)
//         res.status(500).json({message: "Failed to make GET call.", error})
//     }
// })



// app.get('/smartphones', async (req, res) => {
//     try {
//         const smartphones = await getSmartphones()
//         if(smartphones.length !== 0){
//             res.json(smartphones)
//         } else {
//             res.status(404).json({message: "Smartphones not found", error})
//         }

//     } catch (error) {
//         console.log(error)
//         res.status(500).json({message: "Failed to make GET call.", error})
//     }
// })



// app.get('/wearables', async (req, res) => {
//     try {
//         const wearables = await getWearables()
//         if(wearables.length !== 0){
//             res.json(wearables)
//         } else {
//             res.status(404).json({message: "Wearables not found", error})
//         }

//     } catch (error) {
//         console.log(error)
//         res.status(500).json({message: "Failed to make GET call.", error})
//     }
// })



// app.get('/audiogadgets', async (req, res) => {
//     try {
//         const audiogadgets = await getAudioGadgets()
//         if(audiogadgets.length !== 0){
//             res.json(audiogadgets)
//         } else {
//             res.status(404).json({message: "Audio gadgets not found", error})
//         }

//     } catch (error) {
//         console.log(error)
//         res.status(500).json({message: "Failed to make GET call.", error})
//     }
// })



// app.get('/homeAppliances', async (req, res) => {
//     try {
//         const homeAppliances = await getHomeAppliances()
//         if(homeAppliances.length !== 0){
//             res.json(homeAppliances)
//         } else {
//             console.log(error)
//             res.status(404).json({message: "Home appliances not found", error})
//         }

//     } catch (error) {
//         console.log(error)
//         res.status(500).json({message: "Failed to make GET call.", error})
//     }
// })



// app.get('/laptops/:laptopId', async (req, res) => {
//     try {
//         const laptopById = await getLaptopsById(req.params.laptopId)
//         laptopById ? res.status(200).json({message: "Found laptop by id", laptopDetails: laptopById}) : res.status(404).json({error: error.message})

//     } catch (error) {
//         res.status(500).json({message: "Failed to make GET call.", error: error.message})
//     }
// })



// app.get('/smartphones/:smartphoneId', async (req, res) => {
//     try {
//         const smartphone = await getSmartphonesById(req.params.smartphoneId)
//         smartphone ? res.status(200).json({message: "Found smartphone by id", smartphoneDetails: smartphone}) : res.status(404).json({error: error.message})

//     } catch (error) {
//         res.status(500).json({message: "Failed to make GET call.", error: error.message})
//     }
// })



// app.get('/wearables/:wearableId', async (req, res) => {
//     try {
//         const wearable = await getWearablesById(req.params.wearableId)
//         wearable ? res.status(200).json({message: "Found wearable by id", wearableDetails: wearable}) : res.status(404).json({error: error.message})

//     } catch (error) {
//         res.status(500).json({message: "Failed to make GET call.", error: error.message})
//     }
// })



// app.get('/audiogadgets/:audiogadgetId', async (req, res) => {
//     try {
//         const audiogadget = await getAudioGadgetsById(req.params.audiogadgetId)
//         audiogadget ? res.status(200).json({message: "Found audiogadget by id", audiogadgetDetails: audiogadget}) : res.status(404).json({error: error.message})

//     } catch (error) {
//         res.status(500).json({message: "Failed to make GET call.", error: error.message})
//     }
// })



// app.get('/homeAppliances/:homeApplianceId', async (req, res) => {
//     try {
//         const homeAppliance = await getHomeAppliancesById(req.params.homeApplianceId)
//         homeAppliance ? res.status(200).json({message: "Found homeAppliance by id", homeApplianceDetails: homeAppliance}) : res.status(404).json({error: error.message})

//     } catch (error) {
//         res.status(500).json({message: "Failed to make GET call.", error: error.message})
//     }
// })





const PORT=3000
app.listen(PORT, () => {
    console.log("Server connected to port", PORT)
})
