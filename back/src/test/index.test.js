const { response, request } = require('express');
const {server} = require('../app');
const session = require('supertest');
const agent = session(server);

describe("Test de RUTAS",()=>{
    describe('GET /rickandmorty/character/:id',()=>{
        it('Responde con el status:200',async()=>{
            await agent.get('/rickandmorty/character/1').expect(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"',async()=>{
            const response = await agent.get('/rickandmorty/character/1')
            const props=["id", "name", "species", "gender", "status", "origin","image"];
            props.forEach(prop=>{
                expect(response.body).toHaveProperty(prop)  
            })
        })
        it('Si hay un error responde con status: 500',async()=>{
            await agent.get('/rickandmorty/character/yt').expect(500);
        })
    })
    describe('GET /rickandmorty/login',()=>{
        it('Validacion del login ',async()=>{
            const response = await agent.get('/rickandmorty/login/?email=Rick@gmail.com&password=Rick1mortyrr')
            expect(response.body).toEqual({ access:true }) 
        })
        it('Validacion de negacion del login',async()=>{
            const response = await agent.get('/rickandmorty/login/?email=Rick@gmail.com&password=Rick1mortyrtrr')
            expect(response.body).toEqual({ access:false }) 
        })
    })
    describe('POST /rickandmorty/fav',()=>{
        it('Responde con un arrglo, con lo objetos enviados por body',async()=>{
            const character ={
                id:43,
                name:'gaspar',
                status:'alive',
                gender:'masculino',
                species:'humano',
                origin:{
                    name: 'c137'
                },
                Image:'image.png'
            }
            const response = await agent.post('/rickandmorty/fav').send(character);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body).toContainEqual(character);
        })
        it('Responde con un arrglo, con lo objetos enviados body',async()=>{
            const character ={
                id:34,
                name:'gaston',
                status:'alive',
                gender:'femenine',
                species:'humano',
                origin:{
                    name: 'c137'
                },
                Image:'image.png'
            }
            const response = await agent.post('/rickandmorty/fav').send(character);
            expect(response.body.length).toBe(2);
        })
    })


})

// http://localhost:3001/rickandmorty/login/?email=Rick@gmail.com&password=Rick1mortyrr
