import express from 'express';
import cors from 'cors';

const holydazerServer = express(); 
holydazerServer.use(cors());

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "3/1/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];

holydazerServer.get("/holidays", (request, response) => {
    response.send(holidays);
});

holydazerServer.get("/is-today-holiday", (request, response) => {
    const today = new Date();
    if (holidays.find(holiday => holiday.date === today)) {
        let name = holidays.find(holiday => holiday.date === today).name;
        response.send(`Sim, hoje é ${name}`);
    } else {
        response.send('Não, hoje não é feriado');
    }    
});

holydazerServer.listen(5000);