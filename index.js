const { initializeDatabase } = require('./db/db.connect')
const Categories = require('./models/categories.model')
const Laptops = require('./models/laptop.model')
const Smartphones = require('./models/smartphones.model')
const Wearables = require('./models/wearables.model')
const AudioGadgets = require('./models/audioGadgets.model')
const HomeAppliances = require('./models/homeAppliances.model')

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



const createLaptops = async (newLaptop) => {
    try {
        const laptops = new Laptops(newLaptop)
        return await laptops.save()

    } catch (error) {
        throw error
    }
}



const createSmartphones = async (newSmartphone) => {
    try {
        const smartphones = new Smartphones(newSmartphone)
        return await smartphones.save()

    } catch (error) {
        throw error
    }
}



const createWearables = async (newWearables) => {
    try {
        const wearables = new Wearables(newWearables)
        return await wearables.save()

    } catch (error) {
        throw error
    }
}



const createAudioGadget = async (newAudioGadget) => {
    try {
        const audioGadgets = new AudioGadgets(newAudioGadget)
        return await audioGadgets.save()

    } catch (error) {
        throw error
    }
}



const createHomeAppliances = async (newHomeAppliances) => {
    try {
        const homeAppliances = new HomeAppliances(newHomeAppliances)
        return await homeAppliances.save()

    } catch (error) {
        throw error
    }
}



app.post('/categories', async (req, res) => {
    try {
        console.log(req.body)
        const savedCategory = await createCategories(req.body)
        res.status(201).json({message: "Category data saved successfully.", category: savedCategory})

    } catch (error) {
        res.status(500).json({error: "Failed to save categories data.", error})
    }
})



app.post('/laptops', async (req, res) => {
    try {
        console.log(req.body)
        const savedLaptop = await createLaptops(req.body)
        res.status(201).json({message: "Laptop data saved successfully.", laptop: savedLaptop})

    } catch (error) {
        res.status(500).json({error: "Failed to save laptops data.", error})
    }
})



app.post('/smartphones', async (req, res) => {
    try {
        console.log(req.body)
        const savedSmartphone = await createSmartphones(req.body)
        res.status(201).json({message: "Smartphone data saved successfully.", smartphones: savedSmartphone})

    } catch (error) {
        res.status(500).json({error: "Failed to save smartphones data.", error})
    }
})



app.post('/wearables', async (req, res) => {
    try {
        console.log(req.body)
        const savedWearables = await createWearables(req.body)
        res.status(201).json({message: "Wearable data saved successfully.", wearables: savedWearables})

    } catch (error) {
        res.status(500).json({error: "Failed to save wearables data.", error})
    }
})



app.post('/audiogadgets', async (req, res) => {
    try {
        console.log(req.body)
        const savedAudioGadgets = await createAudioGadget(req.body)
        res.status(201).json({message: "Audio gadgets data saved successfully.", audioGadgets: savedAudioGadgets})

    } catch (error) {
        res.status(500).json({error: "Failed to save audioGadgets data.", error})
    }
})



app.post('/homeAppliances', async (req, res) => {
    try {
        console.log(req.body)
        const savedHomeAppliances = await createHomeAppliances(req.body)
        res.status(201).json({message: "Home Appliances data saved successfully.", homeAppliances: savedHomeAppliances})

    } catch (error) {
        res.status(500).json({error: "Failed to save homeAppliances data.", error})
    }
})




const getCategories = async () => {
    try {
        const categories = await Categories.find()
        return categories

    } catch (error) {
        throw error
    }
}



const getLaptops = async () => {
    try {
        const laptops = await Laptops.find()
        return laptops

    } catch (error) {
        throw error
    }
}



const getSmartphones = async () => {
    try {
        const smartphones = await Smartphones.find()
        return smartphones

    } catch (error) {
        throw error
    }
}



const getWearables = async () => {
    try {
        const wearables = await Wearables.find()
        return wearables

    } catch (error) {
        throw error
    }
}



const getAudioGadgets = async () => {
    try {
        const audioGadgets = await AudioGadgets.find()
        return audioGadgets

    } catch (error) {
        throw error
    }
}



const getHomeAppliances = async () => {
    try {
        const homeAppliances = await HomeAppliances.find()
        return homeAppliances

    } catch (error) {
        throw error
    }
}



app.get('/categories', async (req, res) => {
    try {
        const categories = await getCategories()
        if(categories.length !== 0){
            res.json(categories)
        } else {
            res.status(404).json({message: "Categories not found", error.message})
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "Failed to make GET call.", error.message})
    }
})



app.get('/laptops', async (req, res) => {
    try {
        const laptops = await getLaptops()
        if(laptops.length !== 0){
            res.json(laptops)
        } else {
            res.status(404).json({message: "Laptops not found", error.message})
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "Failed to make GET call.", error.message})
    }
})



app.get('/smartphones', async (req, res) => {
    try {
        const smartphones = await getSmartphones()
        if(smartphones.length !== 0){
            res.json(smartphones)
        } else {
            res.status(404).json({message: "Smartphones not found", error.message})
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "Failed to make GET call.", error.message})
    }
})



app.get('/wearables', async (req, res) => {
    try {
        const wearables = await getWearables()
        if(wearables.length !== 0){
            res.json(wearables)
        } else {
            res.status(404).json({message: "Wearables not found", error.message})
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "Failed to make GET call.", error.message})
    }
})



app.get('/audiogadgets', async (req, res) => {
    try {
        const audiogadgets = await getAudioGadgets()
        if(audiogadgets.length !== 0){
            res.json(audiogadgets)
        } else {
            res.status(404).json({message: "Audio gadgets not found", error.message})
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "Failed to make GET call.", error.message})
    }
})



app.get('/homeAppliances', async (req, res) => {
    try {
        const homeAppliances = await getHomeAppliances()
        if(homeAppliances.length !== 0){
            res.json(homeAppliances)
        } else {
            console.log(error.message)
            res.status(404).json({message: "Home appliances not found", error.message})
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "Failed to make GET call.", error.message})
    }
})





const PORT=process.env.MONGODB
app.listen(PORT, () => {
    console.log("Server connected to port", PORT)
})
