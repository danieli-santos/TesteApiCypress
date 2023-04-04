import * as GETOpenWeather from '../request/GETOpenWeather.request'

describe('Obter o clima', () => {


    it('Obtém o clima de uma determinada localização',{tag: 'climaPorLocalidade'}, () => {
        GETOpenWeather.openWeather().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('coord');
            expect(response.body.coord.lat).to.equal(44.34);
            expect(response.body.coord.lon).to.equal(10.99);
            expect(response.body).to.have.property('weather');
            expect(response.body.weather[0]).to.have.property('main');
            expect(response.body.weather[0]).to.have.property('description');
            expect(response.body).to.have.property('main');
            expect(response.body.main).to.have.property('temp');
            expect(response.body.main).to.have.property('pressure');
            expect(response.body.main).to.have.property('humidity');
            
        })    
    })
    it('deve validar que a temperatura mínima é menor ou igual à temperatura máxima', {tag: 'validarTempMinMax'}, () => {
        GETOpenWeather.openWeather().then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.main.temp_min).to.be.lte(response.body.main.temp_max)
        })
    });

    it('Verificar se a descricao do clima é uma String',{tag: 'desc=String'}, () => {
        GETOpenWeather.openWeather().should((response)=>{
            expect(response.body.weather[0].description).to.be.a('string');
        })   
    });
    it('Verifica se a visibilidade é um número maior ou igual a zero', {tag: 'Visibilidade'}, () => {
        GETOpenWeather.openWeather().should((response)=>{
            expect(response.body.visibility).to.be.a('number').and.to.be.gte(0);
        })
    });

    it('Verifica se o país do objeto "sys" é uma string', {tag: 'objeto'}, () => {
        GETOpenWeather.openWeather().should((response)=>{
            expect(response.body.sys.country).to.be.a('string')

        })
    });
    it('Teste de valores extremos',{tag: 'extremo'}, () => {
        GETOpenWeather.openWeather().should((response)=>{
            expect(response.body.main.temp_max).to.be.lessThan(400);
            expect(response.body.main.temp_min).to.be.greaterThan(150);  
        }) 
    });
    it('Teste de respostas em diferentes idiomas', {tag: 'idiomas'}, () => {
        GETOpenWeather.openWeather().should((response)=>{
            expect(response.body.weather[0].description).to.eq('broken clouds');
        })      
    });

    it('Teste de dados históricos', {tag: 'smoke' }, () => {
        GETOpenWeather.openWeather().should((response)=> {
            expect(response.body.dt).to
        })
    });

        it('Verificar se a temperatura mínima é numérica', {tag:'TempNumerica'}, () => {
            GETOpenWeather.openWeather().should((response)=> {
            expect(response.body)
            expect(response.body.main.temp_min).to.be.a('number')
        })
    });
});

